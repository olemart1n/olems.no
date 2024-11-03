```go

package main

import (
	"encoding/json"
	"log"
	"time"

	"github.com/gorilla/websocket"
)

// writeMessages is a process that listens for new messages to output to the Client
func (c *Client) channelMessage() {
	ticker := time.NewTicker(pingInterval)
defer func() {
	ticker.Stop()
	c.manager.removeClient(c)
}()

for {
	select {
	case message, ok := <-c.egress:
		if !ok {
			if err := c.connection.WriteMessage(websocket.CloseMessage, nil); err != nil {
				log.Printf("error in (case message, ok := <- c.egress): %s",err)
			}
			return
		}
		data, err := json.Marshal(message)
		if err != nil {
			log.Println(err)
			return
		}
		// THE PART BELOW SEND THE MESSAGE THAT IS MARSHALED FROM THE CHANNEL
		if err := c.connection.WriteMessage(websocket.TextMessage, data); err != nil {
			log.Println(err)
		}
	case <-ticker.C:
		sendVisitorCount(c)
		if err := c.connection.WriteMessage(websocket.PingMessage, []byte{}); err != nil {
			log.Println("writemsg: ", err)
			return // return to break this goroutine triggeing cleanup
		}
	}
}}

```