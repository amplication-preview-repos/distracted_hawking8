import { ConversionWhereUniqueInput } from "../conversion/ConversionWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HistoryEntryWhereInput = {
  conversion?: ConversionWhereUniqueInput;
  conversionType?: "Option1";
  finalTemperature?: FloatNullableFilter;
  id?: StringFilter;
  initialTemperature?: FloatNullableFilter;
};
