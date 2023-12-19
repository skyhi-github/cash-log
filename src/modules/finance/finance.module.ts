import { Module } from '@nestjs/common';
import { FinanceController } from './controllers/finance.controller';
import { FinanceService } from './services/finance.service';

@Module({
//   imports: [TypeOrmModule.forFeature([ContactRepository])],
  providers: [FinanceService],
  controllers: [FinanceController]
})
export class FinanceModule {}