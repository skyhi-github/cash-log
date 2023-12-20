import { Module } from '@nestjs/common';
import { ExpenseController } from './controllers/expense.controller';
import { ExpenseService } from './services/expense.service';

@Module({
  //   imports: [TypeOrmModule.forFeature([ContactRepository])],
  providers: [ExpenseService],
  controllers: [ExpenseController],
})
export class ExpenseModule {}
