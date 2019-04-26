export interface Stats {
  // The karma delta on the last update
  'karma_last_update'?: number;
  // Karma trend. Possible values: up or down
  'karma_trend'?: string;
  //
  // TODO replace type of days_items
  //
  // The last 7 days of completion. Items completed in the last 4 weeks.
  // The objects inside items are composed by an id (project_id) and the number of completed tasks for it.
  'days_items'?: object;
  // Total completed tasks count
  'completed_count'?: number;
  // Log of the last karma updates.
  // Numbers regarding the action done to generate them
  // https://developer.todoist.com/sync/v8/?python#get-productivity-stats
  //
  // TODO replace type of karma_update_reasons
  //
  'karma_update_reasons'?: object;
  // Karma score
  'karma'?: number;
  //
  // TODO replace type of week_items
  //
  'week_items'?: object;
  'project_colors'?: {
    [index: string]: number;
  };
  //
  // TODO replace type of goals
  //
  'goals'?: object;
}

// export interface GetArchivedProjectOptions {

// }

// export interface AddItemOptions {

// }
