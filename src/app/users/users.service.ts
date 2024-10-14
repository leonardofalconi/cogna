import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { IUser } from 'src/interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany(): Promise<IUser[]> {
    const users = await this.prismaService.user.findMany();

    return users;
  }

  async createMany(users: Array<Omit<IUser, 'id'>>): Promise<number> {
    const usersCreated = await this.prismaService.user.createMany({
      data: users,
    });

    return usersCreated.count;
  }
}
