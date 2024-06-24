import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConversionServiceBase } from "./base/conversion.service.base";

@Injectable()
export class ConversionService extends ConversionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
