import { Injectable } from '@nestjs/common';

@Injectable()
export class IncomeService {

  getIncome(){
    return 'income....'
  };
}