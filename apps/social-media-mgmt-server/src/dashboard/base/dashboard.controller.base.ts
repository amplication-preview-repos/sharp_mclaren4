/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DashboardService } from "../dashboard.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DashboardCreateInput } from "./DashboardCreateInput";
import { Dashboard } from "./Dashboard";
import { Post } from "../../post/base/Post";
import { DashboardFindManyArgs } from "./DashboardFindManyArgs";
import { DashboardWhereUniqueInput } from "./DashboardWhereUniqueInput";
import { DashboardUpdateInput } from "./DashboardUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DashboardControllerBase {
  constructor(
    protected readonly service: DashboardService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Dashboard })
  @nestAccessControl.UseRoles({
    resource: "Dashboard",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDashboard(
    @common.Body() data: DashboardCreateInput
  ): Promise<Dashboard> {
    return await this.service.createDashboard({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        socialMediaAccounts: true,
        engagementRates: true,
        postPerformance: true,
        followerGrowth: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Dashboard] })
  @ApiNestedQuery(DashboardFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Dashboard",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async dashboards(@common.Req() request: Request): Promise<Dashboard[]> {
    const args = plainToClass(DashboardFindManyArgs, request.query);
    return this.service.dashboards({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        socialMediaAccounts: true,
        engagementRates: true,
        postPerformance: true,
        followerGrowth: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Dashboard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Dashboard",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async dashboard(
    @common.Param() params: DashboardWhereUniqueInput
  ): Promise<Dashboard | null> {
    const result = await this.service.dashboard({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        socialMediaAccounts: true,
        engagementRates: true,
        postPerformance: true,
        followerGrowth: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Dashboard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Dashboard",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDashboard(
    @common.Param() params: DashboardWhereUniqueInput,
    @common.Body() data: DashboardUpdateInput
  ): Promise<Dashboard | null> {
    try {
      return await this.service.updateDashboard({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          socialMediaAccounts: true,
          engagementRates: true,
          postPerformance: true,
          followerGrowth: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Dashboard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Dashboard",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDashboard(
    @common.Param() params: DashboardWhereUniqueInput
  ): Promise<Dashboard | null> {
    try {
      return await this.service.deleteDashboard({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          socialMediaAccounts: true,
          engagementRates: true,
          postPerformance: true,
          followerGrowth: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/dashboard/:dashboardId/analytics")
  @swagger.ApiOkResponse({
    type: Dashboard,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetAnalyticsDataForDashboard(
    @common.Body()
    body: string
  ): Promise<Dashboard> {
    return this.service.GetAnalyticsDataForDashboard(body);
  }

  @common.Get("/dashboard/user/:userId")
  @swagger.ApiOkResponse({
    type: Dashboard,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetDashboardForUser(
    @common.Body()
    body: string
  ): Promise<Dashboard> {
    return this.service.GetDashboardForUser(body);
  }
}
