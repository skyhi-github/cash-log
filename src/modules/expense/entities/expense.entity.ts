import { BaseEntity, Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
