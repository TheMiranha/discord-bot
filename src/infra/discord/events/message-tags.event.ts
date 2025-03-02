import { Injectable, Logger } from "@nestjs/common";
import { Context, ContextOf, On } from "necord";
import { MessageTagUseCase } from "src/app/use-cases/message-tag.use-case";

@Injectable()
export class MessageTagsEvent {

  private readonly logger = new Logger(MessageTagsEvent.name)

  public constructor(private messageTag: MessageTagUseCase) { }

  @On('messageCreate')
  public onMessageCreate(@Context() [event]: ContextOf<'messageCreate'>) {

    this.logger.verbose('onMessageCreate', event)

    const response = this.messageTag.execute({ userId: event.author.id })

    if (!response) return

    event.react(response)
  }
}