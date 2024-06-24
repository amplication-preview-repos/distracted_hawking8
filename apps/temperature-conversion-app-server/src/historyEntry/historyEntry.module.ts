import { Module } from "@nestjs/common";
import { HistoryEntryModuleBase } from "./base/historyEntry.module.base";
import { HistoryEntryService } from "./historyEntry.service";
import { HistoryEntryController } from "./historyEntry.controller";
import { HistoryEntryResolver } from "./historyEntry.resolver";

@Module({
  imports: [HistoryEntryModuleBase],
  controllers: [HistoryEntryController],
  providers: [HistoryEntryService, HistoryEntryResolver],
  exports: [HistoryEntryService],
})
export class HistoryEntryModule {}
