import { Channel } from '../models/Channel';
export class PodcastDto {
  tags: string[];
  title: string;
  description: string;
  status: string;
  allowComments: boolean;
  channelId: number;

  constructor(
    tags: string[],
    title: string,
    description: string,
    status: string,
    allowComments: boolean,
    channelId: number
  ) {
    this.tags = tags;
    this.title = title;
    this.description = description;
    this.status = status;
    this.allowComments = allowComments;
    this.channelId = channelId;
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

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

  public allowsComments(): boolean {
    return this.allowComments;
  }

  public setAllowComments(allowComments: boolean): void {
    this.allowComments = allowComments;
  }

  public getChannel(): number {
    return this.channelId;
  }

  public setChannel(channelId: number): void {
    this.channelId = channelId;
  }
}
