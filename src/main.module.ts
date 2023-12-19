import { Module } from '@nestjs/common';

import { FinanceModule } from './modules/finance/finance.module';

@Module({
  imports: [FinanceModule]
})

export class MainModule {}