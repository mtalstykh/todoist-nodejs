export interface LabelRest {
  'id': number;
  'name': string;
  'order': number;
}

export interface GetLabelRestOptions {
  'id': number;
}

export interface CreateLabelRestOptions {
  'name': string;
  'order'?: number;
}

export interface UpdateLabelRestOptions {
  'name'?: string;
  'order'?: number;
}

export interface DeleteLabelRestOptions {
  'id': number;
}
