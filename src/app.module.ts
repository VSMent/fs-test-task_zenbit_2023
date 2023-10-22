import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DealModule } from './modules/deal/deal.module';

@Module({
  imports: [UserModule, DealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
