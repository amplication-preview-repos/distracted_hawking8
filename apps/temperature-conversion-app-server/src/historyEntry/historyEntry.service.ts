import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HistoryEntryServiceBase } from "./base/historyEntry.service.base";

@Injectable()
export class HistoryEntryService extends HistoryEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
