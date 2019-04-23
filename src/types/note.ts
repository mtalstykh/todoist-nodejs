export interface Note {
  "id": number;
  // The id of the user that posted the note
  "posted_uid": number;
  // The item which the note is part of
  "item_id": number;
  // The project which the note is part of
  "projecr_id": number;
  // The content of the note
  "content": string;
  // A file attached to the note
  "file_attachment": FileAttachment;
  // A list of user ids to notify
  "uids_to_notify": {
    [index: number]: number
  };
  // Whether the note is marked as deleted (where 1 is true and 0 is false)
  "is_deleted": number;
  // Whether the note is marked as archived (where 1 is true and 0 is false)
  "is_archived": number;
  // The date when the note was posted
  "posted": string;
  // TODO Rep;ace reactions type
  // List of emoji reactions and corresponding user ids
  "reactions": object;
}

export interface AddOptions {
  // The item which the note is part of
  "item_id": number;
  // The content of the note
  "content": string;
  // A file attached to the note
  "file_attachment"?: FileAttachment;
  // A list of user ids to notify
  "uids_to_notify"?: {
    [index: number]: number
  };
}

export interface UpdateOptions {
  "id": number;
  // The content of the note
  "content": string;
  // A file attached to the note
  "file_attachment"?: FileAttachment;
}

export interface DeleteOptions {
  "id": number;
}



export interface FileAttachment {
  "file_name": string;
  // The size of the file in bytes
  "file_size": number;
  // MIME type (for example text/plain or image/png)
  "file_type": string;
  // The URL where the file is located. 
  // Note that todoist donsn’t cache the remote content on our servers and stream or expose files directly from third party resources
  "file_url": string;
  // Upload completion state (for example pending or completed)
  "upload_state": string;

  //IMAGE FILE PROPERTIES
  //
  // If you upload an image, you may provide thumbnail paths to ensure Todoist handles them appropriately. 
  // Valid thumbnail information is a JSON array with URL, width in pixels, height in pixels. Ex.: [“http://example.com/img.jpg”,400,300].
  // “Canonical” thumbnails (ones we create by uploads/add API call) have the following sizes: 96x96, 288x288, 528x528
  "tn_l"?: any;
  "tn_m"?: any;
  "tn_s"?: any;

  //AUDIO FILE PROPERTIES
  //
  // In the web interface the file is rendered with a <audio> tag, so you should make sure it’s supported in current web browsers. 
  // See supported media formats for the reference https://developer.mozilla.org/en-US/docs/HTML/Supported_media_formats
  "file_duration"?: number;
}
