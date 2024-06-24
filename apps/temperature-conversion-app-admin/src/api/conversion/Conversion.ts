import { HistoryEntry } from "../historyEntry/HistoryEntry";

export type Conversion = {
  conversionType?: "Option1" | null;
  convertedTemperature: number | null;
  createdAt: Date;
  historyEntries?: Array<HistoryEntry>;
  id: string;
  initialTemperature: number | null;
  updatedAt: Date;
};
