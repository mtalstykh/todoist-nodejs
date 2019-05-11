import Model from './generic';

class GenericNoteModel extends Model {
  local_manager = null;

  update(args: object): void {
    //
    // Updates note
    //
    // TODO
  }

  delete(): void {
    //
    // Deletes note
    //
    // TODO
  }
}

export class NoteModel extends GenericNoteModel {
  //
  // Implement an item note
  //
  constructor(data: object) {
    super(data);
    // TODO
  }
}

export class ProjectNoteModel extends GenericNoteModel {
  //
  // Implement a project note
  //
  constructor(data: object) {
    super(data);
    // TODO
  }
}
