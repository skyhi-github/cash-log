import { Module } from '@nestjs/common';
import { BudgetController } from './controllers/budget.controller';
import { BudgetService } from './services/budget.service';

@Module({
  //   imports: [TypeOrmModule.forFeature([ContactRepository])],
  providers: [BudgetService],
  controllers: [BudgetController],
})
export class BudgetModule {}
