import { HistoryEntryCreateNestedManyWithoutConversionsInput } from "./HistoryEntryCreateNestedManyWithoutConversionsInput";

export type ConversionCreateInput = {
  conversionType?: "Option1" | null;
  convertedTemperature?: number | null;
  historyEntries?: HistoryEntryCreateNestedManyWithoutConversionsInput;
  initialTemperature?: number | null;
};
