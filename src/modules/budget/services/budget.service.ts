import { Injectable } from '@nestjs/common';
import { Budget } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class BudgetService {

  constructor( private readonly budgetRepository: Repository<Budget> ) {}

  async createBudget(data){
    return this.budgetRepository.save(data);
  }

  async updateBudget(data){
    return this.budgetRepository.save(data);
  }

}