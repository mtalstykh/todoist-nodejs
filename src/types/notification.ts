export interface Notification {
  'id': number;
  // Live notification creation date. A number representing a timestamp since epoch
  'created': number;
  // The id of the user who initiated this live notification
  'from_uid': number;
  // Unique notification key
  'notification_key': string;
  // Type of notification. Different notification type define different extra fields which are described below
  'notification_type': string;
  // Notification sequence number
  'seq_no': number;
  // Whether the notification is marked as unread (1) or read (0)
  'is_unread': number;
  //
  // SPECIFIC PROPERTIES
  //
  // User data, useful on share_invitation_sent
  'from_user'?: {
    'email': string;
    'full_name': string;
    'id': string;
    'image_id': string;
  };
  // The project name, useful for share_invitation_* where you may not have the project in the local model
  'project_name'?: string;
  // The invitation id. Useful for accepting/rejecting invitations
  'invitation_id'?: number;
  // The invitation secret key. Useful for accepting/rejecting invitations
  'invitation_secret'?: string;
  // Invitation state. Initially invited, can change the state to accepted or rejected
  'state'?: string;
  // The name of the user removed
  'removed_name'?: string;
  // The uid of the user removed
  'removed_uid'?: string;
  // The number of users under the control of the business account
  'quantity'?: number;
  // Tariff plan name. Valid values are business_monthly and business_yearly
  'plan'?: string;
  // The timestamp when the business account will be disabled.
  // The value may not match the business account subscription end date, as we give some extra days (up to two weeks) to pay the invoice
  'active_until'?: number;
  // Invoice amount. Integer value in 0.01 of currency
  'amont_due'?: number;
  // Number of automatic payment attempts made for this invoice
  'attempt_count'?: number;
  // Currency value. Three-letter ISO currency code representing the currency in which the charge was made
  'currency'?: string;
  // Invoice description
  'description'?: string;
  // Timestamp value
  'next_payment_attempt'?: string;
  // Invitation message
  'invitation_message'?: string;
  // Business account (company) name
  'account_name'?: string;
}

export interface SetLastKnownNotificationOptions {
  'id': number;
}

export interface MarkReadNotificationOptions {
  'id': number;
}

// export interface MarkAllReadOptions {
// }

export interface MarkUnreadNotificationOptions {
  'id': number;
}
