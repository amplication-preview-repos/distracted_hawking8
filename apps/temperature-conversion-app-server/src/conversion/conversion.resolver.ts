import * as graphql from "@nestjs/graphql";
import { ConversionResolverBase } from "./base/conversion.resolver.base";
import { Conversion } from "./base/Conversion";
import { ConversionService } from "./conversion.service";

@graphql.Resolver(() => Conversion)
export class ConversionResolver extends ConversionResolverBase {
  constructor(protected readonly service: ConversionService) {
    super(service);
  }
}
