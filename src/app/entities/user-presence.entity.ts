interface UserPresenceEntityPayload {
  userId: string
  guildId: string
  timeInMinutes: number
}

export class UserPresenceEntity {

  private userId: string
  private guildId: string
  private timeInMinutes: number
  private _id: string

  public constructor(payload: UserPresenceEntityPayload, id: string) {
    Object.assign(this, payload)
    this._id = id;
  }

  public setId(id: string) { this._id = id }
  public setUserId(userId: string) { this.userId = userId }
  public setGuildId(guildId: string) { this.guildId = guildId }
  public setTimeInMinutes(timeInMinutes: number) { this.timeInMinutes = timeInMinutes }

  public getId() { return this._id }
  public getUserId() { return this.userId }
  public getGuildId() { return this.guildId }
  public getTimeInMinutes() { return this.timeInMinutes }

  public getFriendlyObject() {
    return {
      id: this.getId(),
      userId: this.getUserId(),
      guildId: this.getGuildId(),
      timeInMinutes: this.getTimeInMinutes()
    }
  }

}