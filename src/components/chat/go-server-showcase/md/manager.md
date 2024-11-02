```go
package main

import (
	"log"
	"net/http"
	"sync"

	"github.com/gorilla/websocket"
)

var (
	websocketUpgrader = websocket.Upgrader{
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
		CheckOrigin: func(r *http.Request) bool {
			// 	origin := r.Header.Get("Origin")
			// 	switch origin {
			// 	case "http://127.0.0.1:5500":
			// 	}
				return true
			},
	}
)

type Manager struct {
	clients ClientList
	sync.RWMutex
}

func NewManager() *Manager {
	m := &Manager{
		clients: make(ClientList),
	}
	return m
}

func (m *Manager) serveWS(w http.ResponseWriter, r *http.Request) {
	conn, err := websocketUpgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}
	client := NewClient(conn, m)
	m.addClient(client)
	log.Println("client added")
	go client.channelMessage()
	go client.broadcastMessages()
}

func (m *Manager) addClient (c *Client) {
	m.Lock()
	defer m.Unlock()
	m.clients[c] = true
	sendVisitorCount(c)
}

func (m *Manager) removeClient (c *Client) {
	m.Lock()
	defer m.Unlock()
	if _, ok := m.clients[c]; ok {
		c.connection.Close()
		delete(m.clients, c)
	}
}
```
