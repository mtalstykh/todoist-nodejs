import Model from './generic';

export class ProjectModel extends Model {
  update(args: object):void {
    //
    // Updates project
    //
    // TODO
  }

  delete(): void {
    //
    // Deletes project
    //
    // TODO
  }

  archive(): void {
    //
    // Marks project as archived
    //
    // TODO
  }

  unarchive(): void {
    //
    // Marks project as unarchived
    //
    // TODO
  }

  move(parentId: number): void {
    //
    // Moves item to another parent
    //
    // TODO
  }

  share(email: string): void {
    //
    // Shares projects with a user
    //
    // TODO
  }

  take_ownership(): void {
    //
    // Takes ownership of a shared project
    //
    // TODO
  }
}
