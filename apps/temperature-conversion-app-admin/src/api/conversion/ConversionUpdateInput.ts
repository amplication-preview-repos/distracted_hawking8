import { HistoryEntryUpdateManyWithoutConversionsInput } from "./HistoryEntryUpdateManyWithoutConversionsInput";

export type ConversionUpdateInput = {
  conversionType?: "Option1" | null;
  convertedTemperature?: number | null;
  historyEntries?: HistoryEntryUpdateManyWithoutConversionsInput;
  initialTemperature?: number | null;
};
