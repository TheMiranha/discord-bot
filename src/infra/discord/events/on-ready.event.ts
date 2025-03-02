import { Injectable, Logger } from "@nestjs/common";
import { Context, ContextOf, On } from "necord";

@Injectable()
export class OnReadyEvent {

  private readonly logger = new Logger(OnReadyEvent.name)

  @On('ready')
  public onReady(@Context() [client]: ContextOf<'ready'>) {
    this.logger.log(`Bot logged in as ${client.user.username}`)
  }

}