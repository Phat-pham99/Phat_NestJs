import * as path from 'path';
import { Module } from '@nestjs/common';
import { UsersController } from './users/controllers/user.controller';
import { UsersService } from './users/services/user.service';
// import { CacheModule } from '@nestjs/cache-manager';
import { TypeOrmModule, } from '@nestjs/typeorm';
// import { DataSource } from 'typeorm';
import { User } from './users/user.entity';


@Module({
  imports: [
      TypeOrmModule.forRoot()
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {
  
}
