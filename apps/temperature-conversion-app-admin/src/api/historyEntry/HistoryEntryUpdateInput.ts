import { ConversionWhereUniqueInput } from "../conversion/ConversionWhereUniqueInput";

export type HistoryEntryUpdateInput = {
  conversion?: ConversionWhereUniqueInput | null;
  conversionType?: "Option1" | null;
  finalTemperature?: number | null;
  initialTemperature?: number | null;
};
