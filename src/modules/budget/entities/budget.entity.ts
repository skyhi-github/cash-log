import { BaseEntity, Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
