export interface SocketMessage {
  name: string;
  payload: VisitorCount | MessageBroadcast;
}

interface VisitorCount {
  visitorCount: number;
}

interface MessageBroadcast {
  message: string;
  from: string;
}
