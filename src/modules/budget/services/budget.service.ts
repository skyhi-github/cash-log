import { Injectable } from '@nestjs/common';
import { Budget } from '../entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BudgetService {

  constructor (@InjectRepository(Budget) private readonly budgetRepository: Repository<Budget> ) {}

  async createBudget(data){
    return this.budgetRepository.save(data);
  }

  async updateBudget(data){
    return this.budgetRepository.save(data);
  }

}