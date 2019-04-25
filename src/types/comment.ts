import AttachmentOptions from './attachment';

export interface Comment {
  'id': number;
  'task_id': number;
  'project_id': number;
  'posted': string;
  'content': string;
  'attachment': AttachmentOptions;
}

export interface GetAllCommentsOptions {
  'project_id'?: number;
  // or
  'task_id'?: number;
}

export interface GetCommentOptions {
  // Comment id
  'id': number;
}

export interface CreateCommentOptions {
  'project_id'?: number;
  // or
  'task_id'?: number;
  // Comment content
  'content': string;
  'attachment'?: AttachmentOptions;
}

export interface UpdateCommentOptions {
  // Comment id
  'id': number;
  'content': string;
}

export interface DeleteCommentOptions {
  // Comment id
  'id': number;
}
