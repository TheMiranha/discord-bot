import { StringOption } from "necord";

export class CodeHintCommandDTO {

  @StringOption({
    name: 'linguagem',
    description: 'Escolha a linguagem que você quer',
    required: true
  })
  language: string

}