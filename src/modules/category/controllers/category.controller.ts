import { Controller, Get } from '@nestjs/common';
import { CategoryService } from '../services/category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  get() {
    return this.categoryService.getCategory();
  }
}
