import { UserPresenceEntity } from "src/app/entities/user-presence.entity";
import { UserPresence } from "../entities/user-presence";

export class UserPresenceMapper {

  static toEntity({ guildId, timeInMinutes, userId, id }: UserPresence) {
    return new UserPresenceEntity({
      guildId,
      timeInMinutes,
      userId
    }, id)
  }

  static toPersistence(userPresenseEntity: UserPresenceEntity) {
    const mappedEntity = new UserPresence()
    mappedEntity.guildId = userPresenseEntity.getUserId()
    mappedEntity.id = userPresenseEntity.getId()
    mappedEntity.timeInMinutes = userPresenseEntity.getTimeInMinutes()
    mappedEntity.userId = userPresenseEntity.getUserId()

    return mappedEntity
  }

}