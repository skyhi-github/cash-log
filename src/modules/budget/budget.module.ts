import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetController } from './controllers/budget.controller';
import { BudgetService } from './services/budget.service';
import { Budget } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Budget])],
  providers: [BudgetService],
  controllers: [BudgetController],
})
export class BudgetModule {}
