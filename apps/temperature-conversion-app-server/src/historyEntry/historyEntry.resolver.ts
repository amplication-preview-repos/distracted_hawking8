import * as graphql from "@nestjs/graphql";
import { HistoryEntryResolverBase } from "./base/historyEntry.resolver.base";
import { HistoryEntry } from "./base/HistoryEntry";
import { HistoryEntryService } from "./historyEntry.service";

@graphql.Resolver(() => HistoryEntry)
export class HistoryEntryResolver extends HistoryEntryResolverBase {
  constructor(protected readonly service: HistoryEntryService) {
    super(service);
  }
}
