import { Podcast } from './Podcast';
import { Playlist } from './Playlist';

export interface Channel {
  id: number;
  logo: string;
  status: string;
  subscribers: number[];
  podcasts: Podcast[];
  playlists: Playlist[];
}
