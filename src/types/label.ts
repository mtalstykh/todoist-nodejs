export interface Label {
  'id': number;
  'name': string;
  // The color id of the label, the value between 30 and 49
  'color': number;
  // Label’s order in the label list (a number, where the smallest value should place the label at the top)
  'item_order': number;
  // Whether the label is marked as deleted (where 1 is true and 0 is false)
  'is_deleted': number;
  // Whether the label is favorite (where 1 is true and 0 is false)
  'is_favorite': number;
}

export interface AddOptions {
  'name': string;
  // The color id of the label, the value between 30 and 49
  'color'?: number;
  // Label’s order in the label list (a number, where the smallest value should place the label at the top)
  'item_order'?: number;
  // Whether the label is favorite (where 1 is true and 0 is false)
  'is_favorite'?: number;
}

export interface UpdateOptions {
  'id': number;
  'name'?: string;
  // The color id of the label, the value between 30 and 49
  'color'?: number;
  // Label’s order in the label list (a number, where the smallest value should place the label at the top)
  'item_order'?: number;
  // Whether the label is favorite (where 1 is true and 0 is false)
  'is_favorite'?: number;
}

export interface DeleteOptions {
  'id': number;
}

export interface UpdateMultipleOrdersOptions {
  // 	A dictionary, where a label id is the key, and the order its value: label_id: order
  'id_order_mappingr': {
    [label_id: number]: number,
  };
}
