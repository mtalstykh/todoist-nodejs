export interface Miscellaneous {
  // The karma delta on the last update
  'karma_last_update': number;
  // Karma trend. Possible values: up or down
  'karma_trend': string;
  //
  // TODO replace type of days_items
  //
  // The last 7 days of completion. Items completed in the last 4 weeks.
  // The objects inside items are composed by an id (project_id) and the number of completed tasks for it.
  'days_items': object;
  // Total completed tasks count
  'completed_count': number;
  // Log of the last karma updates.
  // Numbers regarding the action done to generate them
  // https://developer.todoist.com/sync/v8/?python#get-productivity-stats
  //
  // TODO replace type of karma_update_reasons
  //
  'karma_update_reasons': object;
  // Karma score
  'karma': number;
  //
  // TODO replace type of week_items
  //
  'week_items': object;
  'project_colors': {
    [index: string]: number;
  };
  //
  // TODO replace type of goals
  //
  'goals': object;
}

export interface GetAllCompletedOptions {
  // Filter the tasks by project id
  'project_id'?: number;
  // The number of items to return (where the default is 30, and the maximum is 50)
  'limit'?: number;
  // Can be used for pagination, when more than the limit number of tasks are returned
  'offset'?: number;
  // Return items with a completed date same or older than until (a string value formatted as 2007-4-29T10:13)
  'until'?: string;
  // Return items with a completed date newer than since (a string value formatted as 2007-4-29T10:13)
  'since'?: string;
  // Return notes together with the completed items (a true or false value)
  'annotate_notes'?: boolean;
}

// export interface GetArchivedProjectOptions {

// }

// export interface AddItemOptions {

// }
