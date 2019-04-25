export interface Collaborator {
  'id': number;
  'email': string;
  'full_name': string;
  'timezone': string;
  // The image id for the collaborator’s avatar, which can be used to get an avatar from a specific URL.
  // Specifically the https://dcff1xvirvpfp.cloudfront.net/<image_id>_big.jpg can be used for a big (195x195 pixels) avatar,
  // https://dcff1xvirvpfp.cloudfront.net/<image_id>_medium.jpg for a medium (60x60 pixels) avatar,
  // and https://dcff1xvirvpfp.cloudfront.net/<image_id>_small.jpg for a small (35x35 pixels) avatar
  'image_id': number;
}

export interface CollaboratorState {
  'project_id': number;
  'user_id': number;
  'state': string;
  'is_deleted': boolean;
}

export interface ShareOptions {
  'project_id': number;
  'email': string;
}

export interface DeleteOptions {
  'project_id': number;
  'email': string;
}

export interface AcceptInvitationOptions {
  'invitation_id': number;
  'invitation_secret': string;
}

export interface RejectInvitationOptions {
  'invitation_id': number;
  'invitation_secret': string;
}

export interface DeleteInvitationOptions {
  'invitation_id': number;
}
