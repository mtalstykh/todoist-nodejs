export interface Project {
  'id': number;
  // Project name
  'name': string;
  // Project position in the list of projects/Project order (read-only)
  'order': number;
  // Value from 1 to 4 for the Project indentation level (read-only)
  'indent': number;
  // Number of project comment
  'comment_count': number;
}

export interface CreateOptions {
  'name': string;
}

export interface UpdateOptions {
  'name': string;
}
