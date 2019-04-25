import AttachmentOptions from './attachment';

export interface Comment {
  'id': number;
  'task_id': number;
  'project_id': number;
  'posted': string;
  'content': string;
  'attachment': AttachmentOptions;
}

export interface GetAllOptions {
  'project_id'?: number;
  // or
  'task_id'?: number;
}

export interface GetAllOptions {
  // Comment id
  'id': number;
}

export interface CreateOptions {
  'project_id'?: number;
  // or
  'task_id'?: number;
  // Comment content
  'content': string;
  'attachment'?: AttachmentOptions;
}

export interface UpdatesOptions {
  // Comment id
  'id': number;
  'content': string;
}

export interface DeleteOptions {
  // Comment id
  'id': number;
}
