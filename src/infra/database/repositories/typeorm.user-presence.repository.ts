import { UserPresenceEntity } from "src/app/entities/user-presence.entity";
import { UserPresenceGateway } from "src/app/gateways/user-presence.gateway";
import { Repository } from "typeorm";
import { UserPresence } from "../entities/user-presence";
import { UserPresenceMapper } from "../mappers/user-presence.mapper";

export class TypeormUserPresenceRepository implements UserPresenceGateway {

  public constructor(
    private userPresenceRepository: Repository<UserPresence>
  ) { }

  async create(props: UserPresenceEntity): Promise<UserPresenceEntity> {
    const createdUser = await this.userPresenceRepository.save(UserPresenceMapper.toPersistence(props))

    return UserPresenceMapper.toEntity(createdUser)
  }

}