```go
package main

import (
	"encoding/json"
	"log"

	"github.com/gorilla/websocket"
)
func sendVisitorCount(c *Client) {
		data := map[string]interface{}{
			"name": "visitorCount",
			"payload": map[string]interface{}{
				"visitorCount": len(c.manager.clients),
			},
		}
        jsonBytes, err := json.Marshal(data)
        if err != nil {
            log.Printf("Error marshalling JSON: %v", err)
            return
        }
        err = c.connection.WriteMessage(websocket.TextMessage, jsonBytes)
        if err != nil {
            log.Printf("Error sending client count to %s: %v", c.connection.RemoteAddr(), err)
        }

}
```
