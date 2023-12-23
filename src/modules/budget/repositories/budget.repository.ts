import { EntityRepository, Repository } from 'typeorm';
import { Budget } from '../entities';

@EntityRepository(Budget)
export class BudgetRepository extends Repository<Budget> {}
