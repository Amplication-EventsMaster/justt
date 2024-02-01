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
import { AppModel } from "./AppModel";
import { AppModelCountArgs } from "./AppModelCountArgs";
import { AppModelFindManyArgs } from "./AppModelFindManyArgs";
import { AppModelFindUniqueArgs } from "./AppModelFindUniqueArgs";
import { CreateAppModelArgs } from "./CreateAppModelArgs";
import { UpdateAppModelArgs } from "./UpdateAppModelArgs";
import { DeleteAppModelArgs } from "./DeleteAppModelArgs";
import { ApiKeyFindManyArgs } from "../../apiKey/base/ApiKeyFindManyArgs";
import { ApiKey } from "../../apiKey/base/ApiKey";
import { CredentialFindManyArgs } from "../../credential/base/CredentialFindManyArgs";
import { Credential } from "../../credential/base/Credential";
import { WebhookFindManyArgs } from "../../webhook/base/WebhookFindManyArgs";
import { Webhook } from "../../webhook/base/Webhook";
import { AppModelService } from "../appModel.service";
@graphql.Resolver(() => AppModel)
export class AppModelResolverBase {
  constructor(protected readonly service: AppModelService) {}

  async _appModelsMeta(
    @graphql.Args() args: AppModelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AppModel])
  async appModels(
    @graphql.Args() args: AppModelFindManyArgs
  ): Promise<AppModel[]> {
    return this.service.appModels(args);
  }

  @graphql.Query(() => AppModel, { nullable: true })
  async appModel(
    @graphql.Args() args: AppModelFindUniqueArgs
  ): Promise<AppModel | null> {
    const result = await this.service.appModel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AppModel)
  async createAppModel(
    @graphql.Args() args: CreateAppModelArgs
  ): Promise<AppModel> {
    return await this.service.createAppModel({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AppModel)
  async updateAppModel(
    @graphql.Args() args: UpdateAppModelArgs
  ): Promise<AppModel | null> {
    try {
      return await this.service.updateAppModel({
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

  @graphql.Mutation(() => AppModel)
  async deleteAppModel(
    @graphql.Args() args: DeleteAppModelArgs
  ): Promise<AppModel | null> {
    try {
      return await this.service.deleteAppModel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [ApiKey], { name: "apiKey" })
  async findApiKey(
    @graphql.Parent() parent: AppModel,
    @graphql.Args() args: ApiKeyFindManyArgs
  ): Promise<ApiKey[]> {
    const results = await this.service.findApiKey(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Credential], { name: "credentials" })
  async findCredentials(
    @graphql.Parent() parent: AppModel,
    @graphql.Args() args: CredentialFindManyArgs
  ): Promise<Credential[]> {
    const results = await this.service.findCredentials(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Webhook], { name: "webhook" })
  async findWebhook(
    @graphql.Parent() parent: AppModel,
    @graphql.Args() args: WebhookFindManyArgs
  ): Promise<Webhook[]> {
    const results = await this.service.findWebhook(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
