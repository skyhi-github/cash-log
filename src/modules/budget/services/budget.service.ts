import { Injectable } from '@nestjs/common';

@Injectable()
export class BudgetService {

  getBudget(){
    return 'getting budget...'
  };

}