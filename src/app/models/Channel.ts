import { Podcast } from './Podcast';
import { Playlist } from './Playlist';

export interface Channel {
  id: number;
  logo: string;
  status: string;
  userId: number;
  subscribers: number[];
  podcasts: Podcast[];
  playlists: Playlist[];
}
