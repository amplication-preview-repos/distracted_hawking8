import { ConversionWhereInput } from "./ConversionWhereInput";
import { ConversionOrderByInput } from "./ConversionOrderByInput";

export type ConversionFindManyArgs = {
  where?: ConversionWhereInput;
  orderBy?: Array<ConversionOrderByInput>;
  skip?: number;
  take?: number;
};
