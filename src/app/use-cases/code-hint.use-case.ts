import { Injectable, Logger } from "@nestjs/common";
import { CodeImageGeneratorGateway } from "../gateways/code-image-generator.gateway";
import { CodeHintGateway } from "../gateways/code-hint.gateway";

@Injectable()
export class CodeHintUseCase {

  private readonly logger = new Logger(CodeHintUseCase.name)

  public constructor(
    private codeImageGenerator: CodeImageGeneratorGateway,
    private codeHint: CodeHintGateway
  ) { }

  async execute(language: string) {

    this.logger.verbose('Running')

    const codeHintResponse = await this.codeHint.makeCodeHint(language)

    const fileName = await this.codeImageGenerator.generateImage({ title: 'ok', code: codeHintResponse.code, language })

    return { image: fileName, messages: codeHintResponse.messages }
  }

  async terminate(fileName: string) {
    await this.codeImageGenerator.deleteGeneratedImage(fileName)
  }

}