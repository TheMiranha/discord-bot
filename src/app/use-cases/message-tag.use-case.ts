import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class MessageTagUseCase {

  private readonly logger = new Logger(MessageTagUseCase.name)

  execute({ userId }: { userId: string }) {

    if (userId === '705176526546665604') {
      return '🦁'
    }

    if (userId === '364951433570680852') {
      return '🐰'
    }

    if (userId === '330575773645668365') {
      return '🐸'
    }

    if (userId === '524950267536605185') {
      return '🦄'
    }

    if (userId === '301545017661718528') {
      return '🐮'
    }
  }

}