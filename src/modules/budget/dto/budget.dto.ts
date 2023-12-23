import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBudgetDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  description: string;

  @IsNotEmpty()
  amount: string;
}

export class UpdateBudgetDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  description: string;

  @IsNotEmpty()
  amount: string;
}