import { Controller, Get, Post } from '@nestjs/common';
import { IncomeService } from '../services/income.service';

@Controller('income')
export class IncomeController {
  constructor(private incomeService: IncomeService) {}

  @Get()
  get() {
    return this.incomeService.getIncome();
  }
}
