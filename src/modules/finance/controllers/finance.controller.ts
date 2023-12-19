import { Controller, Get } from '@nestjs/common';
import { FinanceService } from '../services/finance.service';

@Controller('expense')
export class FinanceController {
  constructor(private financeService: FinanceService) {}

  @Get()
  get() {
    return this.financeService.getMoney();
  }
}
