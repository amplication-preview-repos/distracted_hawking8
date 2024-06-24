import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { HistoryEntryListRelationFilter } from "../historyEntry/HistoryEntryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ConversionWhereInput = {
  conversionType?: "Option1";
  convertedTemperature?: FloatNullableFilter;
  historyEntries?: HistoryEntryListRelationFilter;
  id?: StringFilter;
  initialTemperature?: FloatNullableFilter;
};
