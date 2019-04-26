import { Filter } from './filter';
import { LabelSync } from './label_sync';
import { User, UserSettings } from './user';
import { ProjectSync } from './project_sync';
import { Collaborator, CollaboratorState } from './sharing';
import { Stats } from './miscellaneous';
import { Item } from './item_sync';
import { Reminder } from './reminder';
import { Note } from './note';
import { LiveNotification } from './notification';

export interface State {
  'tooltip': {
    // TODO replace scheduled type
    'scheduled': any[];
    'seen': string[];
  };
  'filters': Filter[];
  // TODO replace temp_id_mapping type
  'temp_id_mapping': any;
  'labels': LabelSync[];
  // TODO replace locations type
  'locations': any[];
  // TODO replace project_notes type
  'project_notes': any[];
  'user': User;
  'full_sync': boolean;
  'sync_token': string;
  'day_orders': {
    [index: string]: number;
  };
  'projects': ProjectSync[];
  'collaborators': Collaborator[];
  'stats': Stats;
  'day_orders_timestamp': string;
  'live_notifications_last_read_id': number;
  'items': Item[];
  // TODO replace project_notes type
  'incomplete_item_ids': any[];
  'reminders': Reminder[];
  'user_settings': UserSettings;
  'incomplete_project_ids': number[];
  'notes': Note[];
  'live_notifications': LiveNotification[];
  // TODO replace project_notes type
  'sections': any[];
  'collaborator_states': CollaboratorState[];
  // TODO replace project_notes type
  'due_exceptions': any[];
}
