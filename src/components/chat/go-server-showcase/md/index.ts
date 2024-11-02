import main from "./main.md?raw";
import manager from "./manager.md?raw";
import pongHandler from "./pong.md?raw";
import channelMessage from "./channel-message.md?raw";
import client from "./client.md?raw";
import readMessages from "./read-messages.md?raw";
import visitorCount from "./visitor-count.md?raw";
import event from "./event.md?raw";

interface MdGoFiles {
  name: string;
  content: string;
}
const mdGoFiles: MdGoFiles[] = [
  { name: "main.go", content: main },
  { name: "manager.go", content: manager },
  { name: "pongHandler.go", content: pongHandler },
  { name: "channelMessage.go", content: channelMessage },
  { name: "client.go", content: client },
  { name: "readMessages.go", content: readMessages },
  { name: "visitorCount.go", content: visitorCount },
  { name: "event.go", content: event },
];

export default mdGoFiles;
