import Model from './generic';

export class ItemModel extends Model{
  update(args: object): void {
    //
    // Updates item
    //
    // TODO
  }

  delete(): void {
    //
    // Deletes item
    //
    // TODO
  }

  move(args: object): void {
    //
    // Moves item to another parent or project
    //
    // TODO
  }

  close():void {
    //
    // Marks item as closed
    //
    // TODO
  }

  complete(dateCompleted: string = null):void {
    //
    // Marks item as completed
    //
    // TODO
  }

  uncomplete():void {
    //
    // Marks item as uncompleted
    //
    // TODO
  }

  archive(): void {
    //
    // Marks item as archived
    //
    // TODO
  }

  unarchive(): void {
    //
    // Marks item as unarchived
    //
    // TODO
  }

  // TODO replace any
  updateDateComplete(any): void {
    //
    // Completes a recurring task
    //
    // TODO
  }
}
