export class CommentDto {
  userId: number;
  text: string;
  responseTo: Comment;

  constructor(userId: number, text: string, responseTo: Comment) {
    this.userId = userId;
    this.text = text;
    this.responseTo = responseTo;
  }

  getUserId(): number {
    return this.userId;
  }

  setUserId(userId: number): void {
    this.userId = userId;
  }

  getText(): string {
    return this.text;
  }

  setText(text: string): void {
    this.text = text;
  }

  getResponseTo(): Comment {
    return this.responseTo;
  }

  setResponseTo(responseTo: Comment): void {
    this.responseTo = responseTo;
  }
}