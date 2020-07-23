export class ChannelUserDto {
  name: string;
  username: string;
  password: string;

  constructor(name: string, username: string, password: string) {
    this.name = name;
    this.username = username;
    this.password = password;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getUsername(): string {
    return this.username;
  }

  public setUsername(username: string): void {
    this.username = username;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string): void {
    this.password = password;
  }
}