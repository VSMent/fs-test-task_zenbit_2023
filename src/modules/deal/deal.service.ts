import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { Deal, Prisma } from '@prisma/client';

@Injectable()
export class DealService {
  constructor(private prisma: PrismaService) {}

  async deal(
    dealWhereUniqueInput: Prisma.DealWhereUniqueInput,
  ): Promise<Deal | null> {
    return this.prisma.deal.findUnique({
      where: dealWhereUniqueInput,
    });
  }

  async deals(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DealWhereUniqueInput;
    where?: Prisma.DealWhereInput;
    orderBy?: Prisma.DealOrderByWithRelationInput;
  }): Promise<Deal[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.deal.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createDeal(data: Prisma.DealCreateInput): Promise<Deal> {
    return this.prisma.deal.create({
      data,
    });
  }

  async updateDeal(params: {
    where: Prisma.DealWhereUniqueInput;
    data: Prisma.DealUpdateInput;
  }): Promise<Deal> {
    const { where, data } = params;
    return this.prisma.deal.update({
      data,
      where,
    });
  }

  async deleteDeal(where: Prisma.DealWhereUniqueInput): Promise<Deal> {
    return this.prisma.deal.delete({
      where,
    });
  }
}
