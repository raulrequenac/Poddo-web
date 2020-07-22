import { Comment } from './Comment';

export interface Podcast {
  id: string;
  stars: number;
  tags: string[];
  title: string;
  description: string;
  comments: Comment[];
  status: string;
  audio: string;
  allowComments: boolean;
  creationDate: Date;
}