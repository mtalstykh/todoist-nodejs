export interface Label {
  'id': number;
  'name': string;
  'order': number;
}

export interface GetOptions {
  'id': number;
}

export interface CreateOptions {
  'name': string;
  'order'?: number;
}

export interface UpdateOptions {
  'name'?: string;
  'order'?: number;
}

export interface DeleteOptions {
  'id': number;
}
