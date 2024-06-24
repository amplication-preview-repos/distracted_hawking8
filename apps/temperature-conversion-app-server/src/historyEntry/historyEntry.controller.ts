import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HistoryEntryService } from "./historyEntry.service";
import { HistoryEntryControllerBase } from "./base/historyEntry.controller.base";

@swagger.ApiTags("historyEntries")
@common.Controller("historyEntries")
export class HistoryEntryController extends HistoryEntryControllerBase {
  constructor(protected readonly service: HistoryEntryService) {
    super(service);
  }
}
