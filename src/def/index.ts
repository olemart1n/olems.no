export interface SocketMessage {
  name: string;
  payload: VisitorCount | MessageBroadcast;
}

export interface VisitorCount {
  visitorCount: number;
}

export interface MessageBroadcast {
  message: string;
  from: string;
}
