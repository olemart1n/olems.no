```go

package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	setupAPI()

	// Get the port from the environment variable, or use a default value if not set
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Default port if not specified
	}

	// Serve on the specified port
	log.Printf("Starting server on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func setupAPI() {
	manager := NewManager()
	http.HandleFunc("/ws",manager.serveWS)

}


```
