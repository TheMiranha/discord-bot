import { UserPresenceEntity } from "../entities/user-presence.entity";

export abstract class UserPresenceGateway {

  abstract create(props: UserPresenceEntity): Promise<UserPresenceEntity>

}