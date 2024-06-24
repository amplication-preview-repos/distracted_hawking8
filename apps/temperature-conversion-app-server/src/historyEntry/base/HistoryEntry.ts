/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Conversion } from "../../conversion/base/Conversion";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsDate,
  IsNumber,
  Min,
  Max,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumHistoryEntryConversionType } from "./EnumHistoryEntryConversionType";

@ObjectType()
class HistoryEntry {
  @ApiProperty({
    required: false,
    type: () => Conversion,
  })
  @ValidateNested()
  @Type(() => Conversion)
  @IsOptional()
  conversion?: Conversion | null;

  @ApiProperty({
    required: false,
    enum: EnumHistoryEntryConversionType,
  })
  @IsEnum(EnumHistoryEntryConversionType)
  @IsOptional()
  @Field(() => EnumHistoryEntryConversionType, {
    nullable: true,
  })
  conversionType?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  finalTemperature!: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  initialTemperature!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { HistoryEntry as HistoryEntry };