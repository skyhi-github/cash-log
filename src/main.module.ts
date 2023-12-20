import { Module } from '@nestjs/common';
import { IncomeModule } from './modules/income/income.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { BudgetModule } from './modules/budget/budget.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [IncomeModule, ExpenseModule, BudgetModule, CategoryModule]
})

export class MainModule {}