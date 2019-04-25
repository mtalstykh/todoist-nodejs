import Due from './due';

export interface Task {
  'id': number;
  // Task’s project id (read-only)
  'project_id': number;
  // Task content
  'content': string;
  // Flag to mark completed tasks.
  'completed': boolean;
  // Array of label ids, associated with a task
  'label_ids': {
    [index: number]: number;
  };
  // Position in the project (read-only)
  'order': number;
  // Task indentation level from 1 to 5 (read-only)
  'indent': number;
  // Task priority from 1 (normal, default value) to 4 (urgent)
  'priority': number;
  // Read more about due dates at https://developer.todoist.com/sync/v8/?python#due-dates
  'due': Due;
  // URL to access this task in Todoist web interface
  'url': string;
  // Number of task comments
  'comment_count': number;
}

export interface GetAllOptions {
  // Filter tasks by project id
  'project_id'?: number;
  // Filter tasks by label
  'label_id'?: number;
  // Filter by any supported filter https://get.todoist.help/hc/en-us/articles/205248842
  'filter'?: string;
  // 	IETF language tag defining what language filter is written in, if differs from default English
  'lang'?: string;
}

export interface GetOptions {
  'id': number;
}

export interface CreateOptions {
  // Task content
  'content': string;
  // Task project id. If not set, task is put to user’s Inbox
  'project_id'?: number;
  // Non-zero integer value used by clients to sort tasks inside project
  'order'?: number;
  // Ids of labels associated with the task
  'label_ids'?: {
    [index: number]: number;
  };
  // Task priority from 1 (normal, default value) to 4 (urgent)
  'priority'?: number;
  // Human defined task due date (ex.: “next Monday”, “Tomorrow”).
  // https://get.todoist.help/hc/ru/articles/205325931-Dates-and-Times
  // Value is set using local (not UTC) time.
  'due_string'?: string;
  // Specific date in YYYY-MM-DD format relative to user’s timezone
  'due_date'?: string;
  // Specific date and time in RFC3339 format in UTC
  'due_datetime'?: string;
  // 2-letter code specifying language in case due_string is not written in English
  'due_lang'?: string;
}

export interface UpdateOptions {
  // Task content
  'content': string;
  // Task’s project id (read-only)
  'project_id': number;
  // Array of label ids, associated with a task
  'label_ids': {
    [index: number]: number;
  };
  // Task priority from 1 (normal, default value) to 4 (urgent)
  'priority': number;
  // Human defined task due date (ex.: “next Monday”, “Tomorrow”).
  // https://get.todoist.help/hc/ru/articles/205325931-Dates-and-Times
  // Value is set using local (not UTC) time.
  'due_string'?: string;
  // Specific date in YYYY-MM-DD format relative to user’s timezone
  'due_date'?: string;
  // Specific date and time in RFC3339 format in UTC
  'due_datetime'?: string;
  // 2-letter code specifying language in case due_string is not written in English
  'due_lang'?: string;
}

export interface CloseOptions {
  'id': number;
}

export interface ReopenOptions {
  'id': number;
}
export interface DeleteOptions {
  'id': number;
}
