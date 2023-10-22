import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.users({});
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.user({ id: Number(id) });
  }

  @Post()
  async signupUser(
    @Body() userData: { email: string, password: string },
  ): Promise<User> {
    return this.userService.createUser(userData);
  }

}
