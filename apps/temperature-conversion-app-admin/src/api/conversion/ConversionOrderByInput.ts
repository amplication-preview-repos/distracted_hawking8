import { SortOrder } from "../../util/SortOrder";

export type ConversionOrderByInput = {
  conversionType?: SortOrder;
  convertedTemperature?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  initialTemperature?: SortOrder;
  updatedAt?: SortOrder;
};
