import { SortOrder } from "../../util/SortOrder";

export type HistoryEntryOrderByInput = {
  conversionId?: SortOrder;
  conversionType?: SortOrder;
  createdAt?: SortOrder;
  finalTemperature?: SortOrder;
  id?: SortOrder;
  initialTemperature?: SortOrder;
  updatedAt?: SortOrder;
};
