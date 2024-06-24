/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HistoryEntryWhereInput } from "./HistoryEntryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HistoryEntryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HistoryEntryWhereInput,
  })
  @ValidateNested()
  @Type(() => HistoryEntryWhereInput)
  @IsOptional()
  @Field(() => HistoryEntryWhereInput, {
    nullable: true,
  })
  every?: HistoryEntryWhereInput;

  @ApiProperty({
    required: false,
    type: () => HistoryEntryWhereInput,
  })
  @ValidateNested()
  @Type(() => HistoryEntryWhereInput)
  @IsOptional()
  @Field(() => HistoryEntryWhereInput, {
    nullable: true,
  })
  some?: HistoryEntryWhereInput;

  @ApiProperty({
    required: false,
    type: () => HistoryEntryWhereInput,
  })
  @ValidateNested()
  @Type(() => HistoryEntryWhereInput)
  @IsOptional()
  @Field(() => HistoryEntryWhereInput, {
    nullable: true,
  })
  none?: HistoryEntryWhereInput;
}
export { HistoryEntryListRelationFilter as HistoryEntryListRelationFilter };