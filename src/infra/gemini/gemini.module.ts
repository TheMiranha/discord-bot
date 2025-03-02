import { Module } from "@nestjs/common";
import { CodeHintGateway } from "src/app/gateways/code-hint.gateway";
import { GeminiCodeHint } from "./code-generations/gemini.code-hint";

@Module({
  providers: [
    {
      provide: CodeHintGateway,
      useClass: GeminiCodeHint
    }
  ],
  exports: [
    CodeHintGateway
  ]
})
export class GeminiModule { }