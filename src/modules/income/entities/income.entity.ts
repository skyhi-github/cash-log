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
