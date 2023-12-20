import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';

@Module({
  //   imports: [TypeOrmModule.forFeature([ContactRepository])],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
