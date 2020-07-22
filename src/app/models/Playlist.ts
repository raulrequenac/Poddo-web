import { Podcast } from './Podcast';

export interface Playlist {
  id: string;
  title: string;
  description: string;
  podcasts: Podcast[];
}