import { Comment } from '../models/Comment';
import { Channel } from '../models/Channel';

export class PodcastView {
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
  channel: Channel;

  constructor(
    id: string,
    stars: number,
    tags: string[],
    title: string,
    description: string,
    comments: Comment[],
    status: string,
    audio: string,
    allowComments: boolean,
    creationDate: Date,
    channel: Channel
  ) {
    this.id = id;
    this.stars = stars;
    this.tags = tags;
    this.title = title;
    this.description = description;
    this.comments = comments;
    this.status = status;
    this.audio = audio;
    this.allowComments = allowComments;
    this.creationDate = creationDate;
    this.channel = channel;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getStars(): number {
    return this.stars;
  }

  public setStars(stars: number): void {
    this.stars = stars;
  }

  public getTags(): string[] {
    return this.tags;
  }

  public setTags(tags: string[]): void {
    this.tags = tags;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getComments(): Comment[] {
    return this.comments;
  }

  public setComments(comments: Comment[]): void {
    this.comments = comments;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

  public getAudio(): string {
    return this.audio;
  }

  public setAudio(audio: string): void {
    this.audio = audio;
  }

  public getAllowComments(): boolean {
    return this.allowComments;
  }

  public setAllowComments(allowComments: boolean): void {
    this.allowComments = allowComments;
  }

  public getCreationDate(): Date {
    return this.creationDate;
  }

  public setCreationDate(creationDate: Date): void {
    this.creationDate = creationDate;
  }

  public getChannel(): Channel {
    return this.channel;
  }

  public setChannel(channel: Channel): void {
    this.channel = channel;
  }
}
