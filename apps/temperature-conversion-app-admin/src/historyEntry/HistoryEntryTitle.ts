import { HistoryEntry as THistoryEntry } from "../api/historyEntry/HistoryEntry";

export const HISTORYENTRY_TITLE_FIELD = "id";

export const HistoryEntryTitle = (record: THistoryEntry): string => {
  return record.id?.toString() || String(record.id);
};
