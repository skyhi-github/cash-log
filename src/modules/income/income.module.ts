import { Module } from '@nestjs/common';
import { IncomeController } from './controllers/income.controller';
import { IncomeService } from './services/income.service';

@Module({
  //   imports: [TypeOrmModule.forFeature([ContactRepository])],
  providers: [IncomeService],
  controllers: [IncomeController],
})
export class IncomeModule {}
