export default interface Due {
  // Read more about due dates at https://developer.todoist.com/sync/v8/?python#due-dates
  'date'?: string;
  'timezone'?: string;
  // Human-readable representation of due date.
  'string'?: string;
  // Lang which has to be used to parse the content of the string attribute.
  // Valid languages are: en, da, pl, zh, ko, de, pt, ja, it, fr, sv, ru, es, nl.
  'lang'?: string;
  // Boolean flag which is set to true is due object represents a recurring due date
  'is_recurring'?: boolean;
}
