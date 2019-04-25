export interface ProjectRest {
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

export interface CreateProjectRestOptions {
  'name': string;
}

export interface UpdateProjectRestOptions {
  'name': string;
}
