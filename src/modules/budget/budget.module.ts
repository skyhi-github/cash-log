import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetController } from './controllers/budget.controller';
import { BudgetService } from './services/budget.service';
import { BudgetRepository } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetRepository])],
  providers: [BudgetService],
  controllers: [BudgetController],
})
export class BudgetModule {}
