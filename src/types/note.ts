import AttachmentOptions from './attachment';

export interface Note {
  'id': number;
  // The id of the user that posted the note
  'posted_uid': number;
  // The item which the note is part of
  'item_id': number;
  // The project which the note is part of
  'projecr_id': number;
  // The content of the note
  'content': string;
  // A file attached to the note
  'file_attachment': AttachmentOptions;
  // A list of user ids to notify
  'uids_to_notify': {
    [index: number]: number,
  };
  // Whether the note is marked as deleted (where 1 is true and 0 is false)
  'is_deleted': number;
  // Whether the note is marked as archived (where 1 is true and 0 is false)
  'is_archived': number;
  // The date when the note was posted
  'posted': string;
  // TODO Rep;ace reactions type
  // List of emoji reactions and corresponding user ids
  'reactions': object;
}

export interface AddNoteOptions {
  // The item which the note is part of
  'item_id': number;
  // The content of the note
  'content': string;
  // A file attached to the note
  'file_attachment'?: AttachmentOptions;
  // A list of user ids to notify
  'uids_to_notify'?: {
    [index: number]: number,
  };
}

export interface UpdateNoteOptions {
  'id': number;
  // The content of the note
  'content': string;
  // A file attached to the note
  'file_attachment'?: AttachmentOptions;
}

export interface DeleteNoteOptions {
  'id': number;
}
