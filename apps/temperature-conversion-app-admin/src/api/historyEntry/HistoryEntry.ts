import { Conversion } from "../conversion/Conversion";

export type HistoryEntry = {
  conversion?: Conversion | null;
  conversionType?: "Option1" | null;
  createdAt: Date;
  finalTemperature: number | null;
  id: string;
  initialTemperature: number | null;
  updatedAt: Date;
};
