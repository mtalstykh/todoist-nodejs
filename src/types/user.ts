export interface User {
  'id': number;
  // The user’s token that should be used to call the other API methods
  'token': string;
  'email': string;
  // The user’s real name formatted as Firstname Lastname
  'full_name': string;
  // The id of the user’s Inbox project
  'inbox_project': number;
  'tz_info': {
    'timezone': string;
    'minutes': number;
    'hours': number;
    'is_dst': number;
    'gmt_string': string;
  };
  // Array of integers representing user’s days off (between 1 and 7, where 1 is Monday and 7 is Sunday)
  'days_off': {
    [index: number]: number;
  };
  // The user’s default view on Todoist. The start page can be one of the following:
  // _info_page for the info page, _blank for a blank page,
  // _project_<PROJECT_ID> for project with id <PROJECT_ID>, and <ANY_QUERY> to query after anything
  'start_page': string;
  // The first day of the week (between 1 and 7, where 1 is Monday and 7 is Sunday)
  'start_day': number;
  // The day of the next week, that tasks will be postponed to (between 1 and 7, where 1 is Monday and 7 is Sunday)
  'next_week': number;
  // Whether to use a 24h format such as 13:00 (if set to 0) when displaying time, or a 12h format such as 1:00pm (if set to 1)
  'time_format': number;
  // Whether to use the DD-MM-YYYY date format (if set to 0), or the MM-DD-YYYY format (if set to 1)
  'date_format': number;
  // Whether to show projects in an oldest dates first order (if set to 0, or a oldest dates last order (if set to 1)
  'sort_order': number;
  // The default reminder for the user. Reminders are only possible for Premium users
  'default_reminder': string;
  // The default time in minutes for the automatic reminders set, whenever a due date has been specified for a task
  'auto_reminder': number;
  // The user’s mobile number (null if not set)
  'mobile_number': string;
  // The user’s mobile host (null if not set)
  'mobile_host': string;
  // The total number of completed tasks
  'completed_count': number;
  // The number of completed tasks for today
  'completed_today': number;
  // The user’s karma score
  'karma': number;
  // The user’s karma trend (for example up)
  'karma_trend': string;
  // Whether the user has a Premium subscription (a true or false value)
  'is_premium': string;
  // The date when the user’s Premium subscription ends (null if not a Premium user)
  'premium_until': string;
  // Whether the user is a business account administrator (a true or false value)
  'is_biz_admin': string;
  // The id of the user’s business account
  'business_account_id': number;
  // The id of the user’s avatar.
  'image_id': string;
  // 35x35
  'avatar_small': string;
  // 60x60
  'avatar_medium': string;
  // 195x195
  'avatar_big': string;
  // 640x640
  'avatar_s640': string;
  // The currently selected Todoist theme (a number between 0 and 10)
  'theme': number;
  'features': {
    'beta': number;
    'restriction': number;
    'has_push_reminders': boolean;
  };
  // The date when the user joined Todoist
  'join_date': string;
}

export interface RegisterOptions {
  'email': string;
  // The user’s real name formatted as Firstname Lastname
  'full_name': string;
  'password': string;
  // The user’s language, which can take one of the following values:
  // de, fr, ja, pl, pt_BR, zh_CN, es, hi, ko, pt, ru, zh_TW
  'lang'?: string;
  // The user’s timezone (a string value such as UTC, Europe/Lisbon, US/Eastern, Asian/Taipei).
  // By default we use the user’s IP address to determine the timezone
  'timezone'?: string;
}

export interface DeleteOptions {
  'current_password': string;
  'reason_for_delete'?: string;
}

export interface UpdateOptions {
  'email'?: string;
  // The user’s real name formatted as Firstname Lastname
  'full_name'?: string;
  'password'?: string;
  'timezone'?: string;
  // The user’s default view on Todoist. The start page can be one of the following:
  // _info_page for the info page, _blank for a blank page,
  // _project_<PROJECT_ID> for project with id <PROJECT_ID>, and <ANY_QUERY> to query after anything
  'start_page'?: string;
  // The first day of the week (between 1 and 7, where 1 is Monday and 7 is Sunday)
  'start_day'?: number;
  // The day of the next week, that tasks will be postponed to (between 1 and 7, where 1 is Monday and 7 is Sunday)
  'next_week'?: number;
  // Whether to use a 24h format such as 13:00 (if set to 0) when displaying time, or a 12h format such as 1:00pm (if set to 1)
  'time_format'?: number;
  // Whether to use the DD-MM-YYYY date format (if set to 0), or the MM-DD-YYYY format (if set to 1)
  'date_format'?: number;
  // Whether to show projects in an oldest dates first order (if set to 0, or a oldest dates last order (if set to 1)
  'sort_order'?: number;
  // The default reminder for the user. Reminders are only possible for Premium users
  'default_reminder'?: string;
  'auto_reminder'?: number;
  // The user’s mobile number (null if not set)
  'mobile_number'?: string;
  // The user’s mobile host (null if not set)
  'mobile_host'?: string;
  // The currently selected Todoist theme (a number between 0 and 10)
  'theme'?: number;
}

export interface UpdateKarmaGoalsOptions {
  'daily_goal'?: number;
  'weekly_goal'?: number;
  // A list with the days of the week to ignore (1 for Monday and 7 for Sunday)
  'ignore_days'?: number;
  // Marks the user as being on vacation (where 1 is true and 0 is false)
  'vacation_mode'?: number;
  // Whether to disable the karma and goals measuring altogether (where 1 is true and 0 is false)
  'karma_disabled'?: number;
}

export interface UpdateNotificationOptions {
  // The notification type. For a list of notifications have a look at the Live Notifications section
  'notification_type': string;
  // The service type, which can take the values: email or push
  'service': string;
  // Whether notifications of this service should be notified (1 to not notify, and 0 to notify)
  'dont_notify': string;
}

export interface UpdateSettingsOptions {
  'reminder_push': boolean;
  'reminder_sms': boolean;
  'reminder_desktop': boolean;
  'reminder_email': boolean;
}
