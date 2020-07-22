import { Channel } from './Channel';

export interface User{
  id: number;
  username: string;
  role: string;
  subscriptions: Channel[];
  createdAt: Date;
  channel: Channel;
}