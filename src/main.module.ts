import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { BudgetModule } from './modules/budget/budget.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'manozaga0',
      database: 'cash-log',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: false,
    }),
    BudgetModule,
  ],
})

export class MainModule {}
