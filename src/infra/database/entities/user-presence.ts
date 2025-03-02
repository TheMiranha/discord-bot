import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserPresence {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  guildId: string;

  @Column('varchar')
  userId: string;

  @Column('int')
  timeInMinutes: number

}