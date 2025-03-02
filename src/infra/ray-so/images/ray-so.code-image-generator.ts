import { Injectable, Logger } from "@nestjs/common";
import { CodeImageGeneratorGateway } from "src/app/gateways/code-image-generator.gateway";
import { randomUUID } from 'node:crypto'
import * as fs from 'fs'
import { mkdir } from 'fs/promises'
import { finished } from 'stream/promises'
import * as path from 'path'
import { Readable } from 'stream'
import { EnvConfig } from "src/infra/configuration";

const FOLDER_PATH = 'code-image-generator-files'

@Injectable()
export class RaySoCodeImageGenerator implements CodeImageGeneratorGateway {

  private readonly logger = new Logger(RaySoCodeImageGenerator.name)

  async generateImage({ title, code, language }: { title: string, code: string, language: string }): Promise<string> {

    const response = await fetch(EnvConfig.CODE_IMAGE_GENERATOR_URL + 'api?theme=vercel', {
      method: 'POST',
      body: JSON.stringify({
        code,
        theme: 'vercel',
        language,
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(error => {
      this.logger.error(error)
    })

    if (!fs.existsSync(FOLDER_PATH)) await mkdir(FOLDER_PATH);

    const fileName = randomUUID() + '.png'

    const destination = path.resolve(`./${FOLDER_PATH}`, fileName)
    const fileStream = fs.createWriteStream(destination, { flags: 'wx' })
    // @ts-ignore
    await finished(Readable.fromWeb(response.body).pipe(fileStream))

    return `./${FOLDER_PATH}/${fileName}`
  }

  async deleteGeneratedImage(fileName: string) {
    let formattedFileName = fileName.includes(FOLDER_PATH) ? fileName.replace(FOLDER_PATH, '') : fileName
    fs.unlinkSync(`${FOLDER_PATH}/${formattedFileName}`)
  }

}