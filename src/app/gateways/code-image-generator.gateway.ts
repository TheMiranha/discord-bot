export abstract class CodeImageGeneratorGateway {

  abstract generateImage(props: { code: string, title: string, language: string }): Promise<string>
  abstract deleteGeneratedImage(fileName: string): Promise<void>

}