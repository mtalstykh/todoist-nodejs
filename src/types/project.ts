export interface Project {
  "id": number;
  "name": string;
  // The color id of the filter, the value between 30 and 49
  "color": number;
  // The id of the parent project. Set to null for root projects
  "parent_id": number;
  // The order of project. Defines the position of the task among all the projects with the same parent_id
  "child_order": number;
  // Whether the project’s sub-projects are collapsed (where 1 is true and 0 is false)
  "collapsed": number;
  // Whether the project is shared (a true or false value)
  "shared": boolean;
  // Whether the project is marked as deleted (where 1 is true and 0 is false)
  "is_deleted": number;
  // Whether the project is marked as archived (where 1 is true and 0 is false)
  "is_archived": number;
  // Whether the project is favorite (where 1 is true and 0 is false)
  "is_favorite": number;
  // Whether the project is Inbox (true or otherwise this property is not sent).
  "inbox_project": boolean;
  // Whether the project is TeamInbox (true or otherwise this property is not sent).
  "team_inbox": boolean;
}

export interface AddOptions {
  "name": string;
  // The color id of the filter, the value between 30 and 49
  "color"?: number;
  // The id of the parent project. Set to null for root projects
  "parent_id"?: number;
  // The order of project. Defines the position of the task among all the projects with the same parent_id
  "child_order"?: number;
  // Whether the project is favorite (where 1 is true and 0 is false).
  "is_favorite"?: number;
}

export interface UpdateOptions {
  "id": number;
  "name"?: string;
  // The color id of the filter, the value between 30 and 49
  "color"?: number;
  // Whether the project’s sub-projects are collapsed (where 1 is true and 0 is false)
  "collapsed"?: number;
  // Whether the project is favorite (where 1 is true and 0 is false)
  "is_favorite"?: number;
}

export interface MoveOptions {
  "id": number;
  // The id of the parent project (could be temp id). If set to null, the project will be moved to the root
  "parent_id": number;
}

export interface DeleteOptions {
  "id": number;
}

export interface ArchiveOptions {
  "id": number;
}

export interface UnarchiveOptions {
  "id": number;
}

export interface ReorderOptions {
  [index: number]: {
      "id": number;
    // The order of project. Defines the position of the task among all the projects with the same parent_id
    "child_order": number;
  }
}
