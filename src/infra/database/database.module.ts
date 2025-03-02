import { Module } from "@nestjs/common";
import { UserPresenceGateway } from "src/app/gateways/user-presence.gateway";
import { TypeormUserPresenceRepository } from "./repositories/typeorm.user-presence.repository";
import { AppDataSource } from "./data-source";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserPresence } from "./entities/user-presence";

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forFeature([UserPresence]),
  ],
  providers: [
    {
      provide: UserPresenceGateway,
      useClass: TypeormUserPresenceRepository
    }
  ],
  exports: [
    UserPresenceGateway
  ]
})
export class DatabaseModule { }