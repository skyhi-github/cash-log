import { Controller, Get, Post } from '@nestjs/common';
import { BudgetService } from '../services/budget.service';

@Controller('budget')
export class BudgetController {
  constructor(private budgetService: BudgetService ) {}

  @Get()
  Get() {
    return this.budgetService.getBudget();
  }
}
