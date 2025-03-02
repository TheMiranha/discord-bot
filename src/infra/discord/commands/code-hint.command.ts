import { Injectable, Logger } from "@nestjs/common";
import { Context, Options, SlashCommand, SlashCommandContext } from "necord";
import { CodeHintUseCase } from "src/app/use-cases/code-hint.use-case";
import { CodeHintCommandDTO } from "./code-hint.command.dto";

@Injectable()
export class CodeHintCommand {

  private readonly logger = new Logger(CodeHintCommand.name)

  public constructor(
    private codeHintUseCase: CodeHintUseCase,
  ) { }

  @SlashCommand({
    name: 'code-hint',
    description: 'Comando de sugestões de código',
  })
  public async onCodeHint(@Context() [interaction]: SlashCommandContext, @Options() { language }: CodeHintCommandDTO) {

    const channel = interaction.channel
    await interaction.reply({ content: 'Pera ae' })
    const response = await this.codeHintUseCase.execute(language)

    this.logger.verbose('[onCodeHint]: command executed')
    await channel.send({ files: [{ attachment: response.image }] })

    for (const message of response.messages) {
      await channel.send({ content: message })
    }

    this.codeHintUseCase.terminate(response.image)
  }

}