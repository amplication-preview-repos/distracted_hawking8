import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConversionService } from "./conversion.service";
import { ConversionControllerBase } from "./base/conversion.controller.base";

@swagger.ApiTags("conversions")
@common.Controller("conversions")
export class ConversionController extends ConversionControllerBase {
  constructor(protected readonly service: ConversionService) {
    super(service);
  }
}
