export class QueueService {
  public commands: object[] = [];

  get length():number {
    return this.commands.length;
  }

  push(obj: object): void {
    this.commands.push(obj);
  }
}

export default new QueueService();
