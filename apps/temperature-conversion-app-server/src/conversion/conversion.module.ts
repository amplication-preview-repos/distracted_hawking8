import { Module } from "@nestjs/common";
import { ConversionModuleBase } from "./base/conversion.module.base";
import { ConversionService } from "./conversion.service";
import { ConversionController } from "./conversion.controller";
import { ConversionResolver } from "./conversion.resolver";

@Module({
  imports: [ConversionModuleBase],
  controllers: [ConversionController],
  providers: [ConversionService, ConversionResolver],
  exports: [ConversionService],
})
export class ConversionModule {}
