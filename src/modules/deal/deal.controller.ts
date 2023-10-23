import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Deal } from '@prisma/client';
import { DealService } from './deal.service';

@Controller('deals')
export class DealController {
  constructor(
    private readonly dealService: DealService,
  ) {}

  @Get()
  async getDeals(): Promise<Deal[]> {
    return this.dealService.deals({});
  }

  @Get('/:id')
  async getDealById(@Param('id') id: string): Promise<Deal> {
    return this.dealService.deal({ id: Number(id) });
  }

  @Get('open')
  async getOpenDeals(): Promise<Deal[]> {
    return this.dealService.deals({ where: { available: true } });
  }

  @Post()
  async createDeal(
    @Body() dealData: {
      name: string,
      price: number,
      count: number,
      yield: number,
      soldCount: number,
      endDate: string,
      image: string,
      available: boolean,
    },
  ): Promise<Deal> {
    return this.dealService.createDeal({ ...dealData, endDate: new Date(dealData.endDate) });
  }

}
