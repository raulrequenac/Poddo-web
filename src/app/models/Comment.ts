export interface Comment {
  id: number;
  userId: number;
  text: string;
  stars: number;
  createdAt: Date;
  responses: Comment[];
}