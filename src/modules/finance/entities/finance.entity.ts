import { BaseEntity, Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('income')
export class Income extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column({ type: 'decimal', nullable: false })
  amount!: number;

  @Index()
  @Column({ type: 'varchar', length: 255, nullable: false })
  source!: string;
  
  @Index()
  @Column({ type: 'varchar', length: 255, nullable: false })
  month!: string;

  @Index()
  @Column({ type: 'varchar', length: 255, nullable: false })
  year!: string;
}

@Entity('expense')
export class Expense extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column({ type: 'varchar', length: 255, nullable: false })
  name!: string;

  @Index()
  @Column({ type: 'decimal', nullable: false })
  amount!: number;
  
  @Index()
  @Column({ type: 'varchar', length: 255, nullable: false })
  categoryId!: string;

  @Index()
  @Column({ type: 'varchar', length: 255, nullable: false })
  budgetId!: string;

  @Index()
  @Column({ type: 'date' })
  date!: Date | string;

  @Index()
  @Column({ type: 'timestamp' })
  time?: Date | string;

}

@Entity('budget')
export class Budget extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column({ type: 'varchar', length: 255, nullable: false })
  name!: string;

  @Index()
  @Column({ type: 'decimal', nullable: false })
  amount!: number;
  
  @Index()
  @Column({ type: 'varchar', length: 255, nullable: false })
  categoryId!: string;

  @Index()
  @Column({ type: 'varchar', length: 255, nullable: false })
  incomeId!: string;

  @Index()
  @Column({ type: 'varchar', length: 255, nullable: false })
  expenseId!: string;
}

@Entity('category')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column({ type: 'varchar', length: 255, nullable: false })
  name!: string;
}
