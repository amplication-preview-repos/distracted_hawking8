/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Conversion } from "./Conversion";
import { ConversionCountArgs } from "./ConversionCountArgs";
import { ConversionFindManyArgs } from "./ConversionFindManyArgs";
import { ConversionFindUniqueArgs } from "./ConversionFindUniqueArgs";
import { CreateConversionArgs } from "./CreateConversionArgs";
import { UpdateConversionArgs } from "./UpdateConversionArgs";
import { DeleteConversionArgs } from "./DeleteConversionArgs";
import { HistoryEntryFindManyArgs } from "../../historyEntry/base/HistoryEntryFindManyArgs";
import { HistoryEntry } from "../../historyEntry/base/HistoryEntry";
import { ConversionService } from "../conversion.service";
@graphql.Resolver(() => Conversion)
export class ConversionResolverBase {
  constructor(protected readonly service: ConversionService) {}

  async _conversionsMeta(
    @graphql.Args() args: ConversionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Conversion])
  async conversions(
    @graphql.Args() args: ConversionFindManyArgs
  ): Promise<Conversion[]> {
    return this.service.conversions(args);
  }

  @graphql.Query(() => Conversion, { nullable: true })
  async conversion(
    @graphql.Args() args: ConversionFindUniqueArgs
  ): Promise<Conversion | null> {
    const result = await this.service.conversion(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Conversion)
  async createConversion(
    @graphql.Args() args: CreateConversionArgs
  ): Promise<Conversion> {
    return await this.service.createConversion({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Conversion)
  async updateConversion(
    @graphql.Args() args: UpdateConversionArgs
  ): Promise<Conversion | null> {
    try {
      return await this.service.updateConversion({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Conversion)
  async deleteConversion(
    @graphql.Args() args: DeleteConversionArgs
  ): Promise<Conversion | null> {
    try {
      return await this.service.deleteConversion(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [HistoryEntry], { name: "historyEntries" })
  async findHistoryEntries(
    @graphql.Parent() parent: Conversion,
    @graphql.Args() args: HistoryEntryFindManyArgs
  ): Promise<HistoryEntry[]> {
    const results = await this.service.findHistoryEntries(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}