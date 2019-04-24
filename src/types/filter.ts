export interface Filter {
  'id': number;
  'name': string;
  // The query to search for. Examples of searches can be found in the Todoist help page 
  // https://get.todoist.help/hc/ru/articles/205248842-Filters
  'query': string;
  // The color id of the filter, the value between 30 and 49
  'color': string;
  // Filter’s order in the filter list (where the smallest value should place the filter at the top)
  'item_order': number;
  // Whether the filter is marked as deleted (where 1 is true and 0 is false)
  'is_deleted': number;
  // Whether the filter is favorite (where 1 is true and 0 is false)
  'is_favorite': number;
}

export interface AddOptions {
  'name': string;
  // The query to search for. Examples of searches can be found in the Todoist help page 
  // https://get.todoist.help/hc/ru/articles/205248842-Filters
  'query': string;
  // The color id of the filter, the value between 30 and 49
  'color'?: string;
  // Filter’s order in the filter list (where the smallest value should place the filter at the top)
  'item_order'?: number;
  // Whether the filter is favorite (where 1 is true and 0 is false)
  'is_favorite'?: number;
}

export interface UpdateOptions {
  'id': number;
  'name'?: string;
  // The query to search for. Examples of searches can be found in the Todoist help page 
  // https://get.todoist.help/hc/ru/articles/205248842-Filters
  'query'?: string;
  // The color id of the filter, the value between 30 and 49
  'color'?: string;
  // Filter’s order in the filter list (where the smallest value should place the filter at the top)
  'item_order'?: number;
  // Whether the filter is favorite (where 1 is true and 0 is false)
  'is_favorite'?: number;
}

export interface DeleteOptions {
  'id': number;
}

export interface UpdateMultipleOrdersOptions {
  // 	A dictionary, where a filter id is the key, and the order its value: filter_id: order
  'id_order_mappingr': {
    [filter_id: number]: number,
  };
}
