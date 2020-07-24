export interface Comment {
  id: number;
  stars: number;
  createdAt: Date;
  responses: Comment[];
  userId: number;
  text: string;
  responseTo: Comment;
}
