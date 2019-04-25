export interface ActivityLogItem {
  'id': number;
  // The type of object, one of item, note or project
  'object_type': string;
  // The id of the object
  'object_id': number;
  // The type of event, one of added, updated, deleted, completed, uncompleted, archived, unarchived, shared, left
  'event_type': string;
  // The date and time when the event took place
  'event_date': string;
  // The id of the item’s or note’s parent project, otherwise null
  'parent_project_id': number;
  // The id of the note’s parent item, otherwise null
  'parent_item_id': number;
  // The id of the user who is responsible for the event, which only makes sense in shared projects,
  // items and notes, and is null for non-shared objects
  'initiator_id': number;
  'extra_data': {
    'name'?: string;
    'content'?: string;
    'last_name'?: string;
    'last_content'?: string;
    'due_date'?: string;
    'last_due_date'?: string;
    'responsible_uid'?: number;
    'last_responsible_uid'?: number;
    'client'?: string;
  };
}

export interface GetActivityLogOptions {
  // The type of object, one of item, note or project
  'object_type'?: string;
  // The id of the object
  'object_id'?: number;
  // The type of event, one of added, updated, deleted, completed, uncompleted, archived, unarchived, shared, left
  'event_type'?: string;
  // An alternative way to filter by multiple object and event types.
  // This takes a list of strings of the form [object_type]:[event_type]
  // (where either object_type part or the event_type part can be omitted), such as for example ["item:", "note:added"]
  'object_event_types'?: {
    [index: number]: string;
  };
  // The id of the item’s or note’s parent project, otherwise null
  'parent_project_id'?: number;
  // The id of the note’s parent item, otherwise null
  'parent_item_id'?: number;
  // The id of the user who is responsible for the event, which only makes sense in shared projects,
  // items and notes, and is null for non-shared objects
  'initiator_id'?: number;
  // The page number, used to iterate over the list of events. Events are split in pages by weeks.
  // Page 0 corresponds to events of the current week. Page 1 is for events of the previous week, etc
  'page'?: number;
  // The number of events to return, where the default is 30, and the maximum is 100
  'limit'?: number;
  // The number of events to skip, which can be used for pagination in order to get more events than those returned by the previous call.
  'offset'?: number;
}

export interface FettActivityResponceOptions {
  // The activity log events
  'events'?: {
    [index: number]: ActivityLogItem;
  };
  // The total count of events with the specified parameters, irregardless of the limit and offset parameters
  'count'?: number;
}
