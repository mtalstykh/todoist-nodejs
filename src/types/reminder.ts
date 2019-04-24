import Due from './due';

export interface Reminder {
  'id': number;
  // The user id which should be notified of the reminder,
  // typically the current user id creating the reminder.
  'notify_uid': number;
  // The item id for which the reminder is about
  'item_id': number;
  // The way to get notified of the reminder:
  // email for e-mail, mobile for mobile text message, or push for mobile push notification.
  'service': string;
  // The type of the reminder: relative for a time-based reminder specified in minutes from now,
  // absolute for a time-based reminder with a specific time and date in the future,
  // and location for a location-based reminder.
  'type': string;
  // The due date of the reminder.
  // See the Due dates section for more details. https://developer.todoist.com/sync/v8/?python#due-dates
  // Note that reminders only support due dates with time, since full-day reminders don’t make sense.
  'due': Due;
  // The relative time in minutes before the due date of the item,
  // in which the reminder should be triggered.
  // Note that the item should have a due date set in order to add a relative reminder.
  'mm_offset': number;
  // An alias name for the location
  'name': string;
  // The location latitude
  'loc_lat': string;
  // The location longitude
  'loc_long': string;
  // What should trigger the reminder: on_enter for entering the location,
  // or on_leave for leaving the location
  'loc_trigger': string;
  // The radius around the location that is still considered as part of the location (in meters)
  'radius': number;
  // Whether the reminder is marked as deleted (where 1 is true and 0 is false)
  'is_deleted': number;
}

export interface AddOptions {
  // The item id for which the reminder is about
  'item_id': number;
  // The type of the reminder: relative for a time-based reminder specified in minutes from now,
  // absolute for a time-based reminder with a specific time and date in the future,
  // and location for a location-based reminder.
  'type': string;
  // The user id which should be notified of the reminder,
  // typically the current user id creating the reminder.
  'notify_uid'?: number;
  // The way to get notified of the reminder:
  // email for e-mail, mobile for mobile text message, or push for mobile push notification.
  'service'?: string;
  // The due date of the reminder.
  // See the Due dates section for more details. https://developer.todoist.com/sync/v8/?python#due-dates
  // Note that reminders only support due dates with time, since full-day reminders don’t make sense.
  'due'?: Due;
  // The relative time in minutes before the due date of the item,
  // in which the reminder should be triggered.
  // Note that the item should have a due date set in order to add a relative reminder.
  'minute_offset'?: number;
  // An alias name for the location
  'name'?: string;
  // The location latitude
  'loc_lat'?: string;
  // The location longitude
  'loc_long'?: string;
  // What should trigger the reminder: on_enter for entering the location,
  // or on_leave for leaving the location
  'loc_trigger'?: string;
  // The radius around the location that is still considered as part of the location (in meters)
  'radius'?: number;
}

export interface UpdateOptions {
  'id': number;
  // The user id which should be notified of the reminder,
  // typically the current user id creating the reminder.
  'notify_uid'?: number;
  // The way to get notified of the reminder:
  // email for e-mail, mobile for mobile text message, or push for mobile push notification.
  'service'?: string;
  // The type of the reminder: relative for a time-based reminder specified in minutes from now,
  // absolute for a time-based reminder with a specific time and date in the future,
  // and location for a location-based reminder.
  'type'?: string;
  // The due date of the reminder.
  // See the Due dates section for more details. https://developer.todoist.com/sync/v8/?python#due-dates
  // Note that reminders only support due dates with time, since full-day reminders don’t make sense.
  'due'?: Due;
  // The relative time in minutes before the due date of the item,
  // in which the reminder should be triggered.
  // Note that the item should have a due date set in order to add a relative reminder.
  'minute_offset'?: number;
  // An alias name for the location
  'name'?: string;
  // The location latitude
  'loc_lat'?: string;
  // The location longitude
  'loc_long'?: string;
  // What should trigger the reminder: on_enter for entering the location,
  // or on_leave for leaving the location
  'loc_trigger'?: string;
  // The radius around the location that is still considered as part of the location (in meters)
  'radius'?: number;
}

export interface DeleteOptions {
  'id': number;
}

// export interface ClearLocationsOptions {

// }
