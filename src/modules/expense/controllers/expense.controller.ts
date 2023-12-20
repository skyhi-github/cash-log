import { Controller, Get, Post } from '@nestjs/common';
import { ExpenseService } from '../services/expense.service';

@Controller('expense')
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {}

  @Get()
  get() {
    return this.expenseService.getExpense();
  }
}
