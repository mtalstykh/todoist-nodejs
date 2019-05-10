export class QueueService {
  public queue: object[] = [];

  push(obj: object): void {
    this.queue.push(obj);
  }
}

export default new QueueService();
