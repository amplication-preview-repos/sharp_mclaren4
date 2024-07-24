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
import {
  IsString,
  MaxLength,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { DashboardUpdateManyWithoutUsersInput } from "./DashboardUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { AnalyticsUpdateManyWithoutUsersInput } from "./AnalyticsUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  passwordHash?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => DashboardUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DashboardUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DashboardUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  dashboards?: DashboardUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => PostUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PostUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PostUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  posts?: PostUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MessageUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MessageUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MessageUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  messages?: MessageUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => AnalyticsUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AnalyticsUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AnalyticsUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  analyticsItems?: AnalyticsUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };