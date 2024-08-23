import main from "./main.md?raw";
import manager from "./manager.md?raw";
import pongHandler from "./pongHandler.md?raw";
import channelMessage from "./channelMessage.md?raw";
import client from "./client.md?raw";
import readMessages from "./readMessages.md?raw";
import visitorCount from "./visitorCount.md?raw";
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
