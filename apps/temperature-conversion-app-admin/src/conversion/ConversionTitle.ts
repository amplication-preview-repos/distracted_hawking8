import { Conversion as TConversion } from "../api/conversion/Conversion";

export const CONVERSION_TITLE_FIELD = "id";

export const ConversionTitle = (record: TConversion): string => {
  return record.id?.toString() || String(record.id);
};
