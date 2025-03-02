export abstract class CodeHintGateway {

  abstract makeCodeHint(language: string): Promise<{ code: string, messages: string[] }>

}