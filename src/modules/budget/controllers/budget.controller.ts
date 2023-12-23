import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { BudgetService } from '../services';
import { CreateBudgetDto, UpdateBudgetDto } from '../dto';

@Controller('budget')
export class BudgetController {
  constructor(private service: BudgetService) {}

  @Post()
  Post(@Body() data: CreateBudgetDto) {
    return this.service.createBudget(data);
  }

  @Put()
  Update(@Body() data: UpdateBudgetDto) {
    return this.service.createBudget(data);
  }
}
