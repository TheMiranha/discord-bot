import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class MessageTagUseCase {

  private readonly logger = new Logger(MessageTagUseCase.name)

  execute({ userId }: { userId: string }) {

    this.logger.verbose('executed', { userId })

    if (userId === '705176526546665604') {
      return '🦁'
    }
  }

}