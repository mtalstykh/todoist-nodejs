export interface Item {
  "id": number;
  // The owner of the task.
  "user_id": number;
  // Project that the task resides in
  "project_id": number;
  // The text of the task
  "content": string;
  // The due date of the task. 
  // See the Due dates section for more details https://developer.todoist.com/sync/v8/?python#due-dates
  "due": Due;
  // The priority of the task (a number between 1 and 4, 4 for very urgent and 1 for natural). 
  // Note: Keep in mind that very urgent is the priority 1 on clients. So, p1 will return 4 in the API.
  "priority": number;
  // The id of the parent task. Set to null for root tasks
  "parent_id": number;
  // The order of task. Defines the position of the task among all the tasks with the same parent_id
  "child_order": number;
  // The order of the task inside the Today or Next 7 days view (a number, where the smallest value would place the task at the top)
  "day_order": number;
  // Whether the task’s sub-tasks are collapsed (where 1 is true and 0 is false)
  "collapsed": number;
  // The tasks labels (a list of label ids such as [2324,2525])
  "labels": Label;
  // The id of the user who assigns the current task. 
  // This makes sense for shared projects only
  "assigned_by_uid": number;
  // The id of user who is responsible for accomplishing the current task.
  // This makes sense for shared projects only
  "responsible_uid": number;
  // Whether the task is marked as completed (where 1 is true and 0 is false)
  "checked": number;
  // Whether the task has been marked as completed and is marked to be moved to history, 
  // because all the child tasks of its parent are also marked as completed (where 1 is true and 0 is false)
  "in_history": number;
  // Whether the task is marked as deleted (where 1 is true and 0 is false)
  "is_deleted": number;
  // Whether the task is marked as archived (where 1 is true and 0 is false)
  "is_archived": number;
  // A special id for shared tasks (a number or null if not set). Used internally and can be ignored
  "sync_id": number;
  // The date when the task was created
  "date_added": string;
}

export interface AddOptions {
  // The text of the task
  "content": string;
  // The id of the project to add the task to (a number or a temp id). 
  // By default the task is added to the user’s Inbox project
  "project_id"?: number;
  // The due date of the task. 
  // See the Due dates section for more details https://developer.todoist.com/sync/v8/?python#due-dates
  "due"?: Due;
  // The priority of the task (a number between 1 and 4, 4 for very urgent and 1 for natural). 
  // Note: Keep in mind that very urgent is the priority 1 on clients. So, p1 will return 4 in the API
  "priority"?: number;
  // The id of the parent task. Set to null for root tasks
  "parent_id"?: number;
  // The order of task. Defines the position of the task among all the tasks with the same parent_id
  "child_order"?: number;
  // The order of the task inside the Today or Next 7 days view (a number, where the smallest value would place the task at the top)
  "day_order"?: number;
  // Whether the task’s sub-tasks are collapsed (where 1 is true and 0 is false)
  "collapsed"?: number;
  // The tasks labels (a list of label ids such as [2324,2525])
  "labels"?: Label;
  // The id of the user who assigns the current task. 
  // This makes sense for shared projects only
  "assigned_by_uid"?: number;
  // The id of user who is responsible for accomplishing the current task.
  // This makes sense for shared projects only
  "responsible_uid"?: number;
  // When this option is enabled, the default reminder will be added to the new item if it has a due date with time set.
  // See also the auto_reminder user option for more info about the default reminder at https://developer.todoist.com/sync/v8/?python#user
  "auto_reminder"?: boolean;
  // When this option is enabled, the labels will be parsed from the task content and added to the task. 
  // In case the label doesn’t exist, a new one will be created
  "auto_parse_labels"?: boolean;
}

export interface UpdateOptions {
  "id": number;
  // The text of the task
  "content"?: string;
  // The due date of the task. 
  // See the Due dates section for more details https://developer.todoist.com/sync/v8/?python#due-dates
  "due"?: Due;
  // The priority of the task (a number between 1 and 4, 4 for very urgent and 1 for natural). 
  // Note: Keep in mind that very urgent is the priority 1 on clients. So, p1 will return 4 in the API
  "priority"?: number;
  // Whether the task’s sub-tasks are collapsed (where 1 is true and 0 is false)
  "collapsed"?: number;
  // The tasks labels (a list of label ids such as [2324,2525])
  "labels"?: Label;
  // The id of the user who assigns the current task. 
  // This makes sense for shared projects only
  "assigned_by_uid"?: number;
  // The id of user who is responsible for accomplishing the current task.
  // This makes sense for shared projects only
  "responsible_uid"?: number;
  // The order of the task inside the Today or Next 7 days view (a number, where the smallest value would place the task at the top)
  "day_order"?: number;
}

export interface MoveOptions {
  "id": number;
  // Id of the destination parent task
  "parent_id"?: number;
  // 	Id of the destination project
  "project_id"?: number;
}

export interface ReorderOptions {
  [index: number]: {
    "id": number;
    // An array of objects to update. 
    // Each object contains two attribute: id of the project to update and child_order, the new order
    "child_order": number;
  }
}

export interface DeleteOptions {
  "id": number;
}

export interface CompleteOptions {
  "id": number;
  // 	RFC3339-formatted date of completion of the task (in UTC). 
  // If not set, the server will set the value to the current timestamp
  "date_completed"?: Date;
  // When enabled the item is moved to history irregardless of whether it’s a sub-task or not 
  // (by default only root tasks are moved to history)
  "force_history"?: boolean;
}

export interface UncompleteOptions {
  "id": number;
}

export interface ArchiveOptions {
  "id": number;
}

export interface UnarchiveOptions {
  "id": number;
}

export interface CompleteRecurringOptions {
  "id": number;
  // The due date of the task. 
  // See the Due dates section for more details https://developer.todoist.com/sync/v8/?python#due-dates
  "due"?: Due;
}

export interface CloseOptions {
  "id": number;
}

export interface UpdateDayOrdersOptions {
  // A dictionary, where an item id is the key, and the day order its value: item_id: day_order
  "ids_to_order": {
    [item_id: number]: number
  };
}

interface Due {
  // Read more about due dates at https://developer.todoist.com/sync/v8/?python#due-dates
  "date"?: string;
  "timezone"?: string;
  // Human-readable representation of due date.
  "string"?: string;
  // Lang which has to be used to parse the content of the string attribute.
  // Valid languages are: en, da, pl, zh, ko, de, pt, ja, it, fr, sv, ru, es, nl.
  "lang"?: string;
  // Boolean flag which is set to true is due object represents a recurring due date
  "is_recurring"?: boolean;
}

interface Label {
  [index: number]: number;
}
