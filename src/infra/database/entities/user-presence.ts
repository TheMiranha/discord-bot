import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserPresence {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('bigint')
  guildId: string;

  @Column('bigint')
  userId: string;

  @Column('bigint')
  timeInMinutes: number

}