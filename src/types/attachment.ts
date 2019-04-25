export default interface AttachmentOptions {
  'file_name': string;
  // The size of the file in bytes
  'file_size': number;
  // MIME type (for example text/plain or image/png)
  'file_type': string;
  // The URL where the file is located.
  // Note that todoist donsn’t cache the remote content on our servers and stream or expose files directly from third party resources
  'file_url': string;
  // Upload completion state (for example pending or completed)
  'upload_state': string;

  // IMAGE FILE PROPERTIES
  //
  // If you upload an image, you may provide thumbnail paths to ensure Todoist handles them appropriately.
  // Valid thumbnail information is a JSON array with URL, width in pixels, height in pixels. Ex.: [“http://example.com/img.jpg”,400,300].
  // “Canonical” thumbnails (ones we create by uploads/add API call) have the following sizes: 96x96, 288x288, 528x528
  'tn_l'?: any;
  'tn_m'?: any;
  'tn_s'?: any;

  // AUDIO FILE PROPERTIES
  //
  // In the web interface the file is rendered with a <audio> tag, so you should make sure it’s supported in current web browsers.
  // See supported media formats for the reference https://developer.mozilla.org/en-US/docs/HTML/Supported_media_formats
  'file_duration'?: number;
}

export interface GetAttachmentOptions {
  // The number of items to return (a number, where the default is 30, and the maximum is 50)
  'limit': number;
  // Can be used for pagination. This should be the minimum upload id you’ve fetched so far.
  // All results will be listed before that id
  'last_id': number;
}

export interface DeleteAttachmentOptions {
  'file_url': string;
}
