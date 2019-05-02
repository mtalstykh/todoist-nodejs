export class QueueService {
  state: object[] = [];

  get length():number {
    return this.state.length;
  }

  push(obj: object): void {
    this.state.push(obj);
  }
}

export default new QueueService();
