import { Module } from "@nestjs/common";
import { CodeImageGeneratorGateway } from "src/app/gateways/code-image-generator.gateway";
import { RaySoCodeImageGenerator } from "./images/ray-so.code-image-generator";

@Module({
  providers: [
    {
      provide: CodeImageGeneratorGateway,
      useClass: RaySoCodeImageGenerator
    }
  ],
  exports: [
    CodeImageGeneratorGateway
  ]
})
export class RaySoModule { }