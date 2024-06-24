import { HistoryEntryWhereInput } from "./HistoryEntryWhereInput";
import { HistoryEntryOrderByInput } from "./HistoryEntryOrderByInput";

export type HistoryEntryFindManyArgs = {
  where?: HistoryEntryWhereInput;
  orderBy?: Array<HistoryEntryOrderByInput>;
  skip?: number;
  take?: number;
};
