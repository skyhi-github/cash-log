import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpenseService {

  getExpense(){
    return 'hello'
  };
}