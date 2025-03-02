import { Injectable } from "@nestjs/common";
import { CodeHintGateway } from "src/app/gateways/code-hint.gateway";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'
import { EnvConfig } from "src/infra/configuration";

const genAI = new GoogleGenerativeAI(EnvConfig.GEMINI_TOKEN);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: "Você é um modelo de IA que o usuário pede uma dica de código, pode ser em qualquer categoria, ele te manda a linguagem apenas. Você deve retornar um código e algumas explicações sobre, mande no seguinte formato: {code: \"console.log('HelloWorld'\",  messages: [\"Este é um código simples\", \"Ele faz isso isso e isso\"]}. Tente sempre mandar códigos úteis e legais ou até mesmo bibliotecas que possam ser úteis e interessantes. Sempre coloque os comentários e mensagens que for mandar em português. Tente não repetir algoritmos e bibliotecas já mostradas",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

@Injectable()
export class GeminiCodeHint implements CodeHintGateway {

  private history = []

  async makeCodeHint(language: string): Promise<{ code: string; messages: string[]; }> {

    const chatSession = model.startChat({
      generationConfig,
      history: this.history
    })

    const result = await chatSession.sendMessage(language)
    this.history.push({
      role: 'user',
      parts: [
        { text: language }
      ]
    })

    this.history.push({
      role: 'model',
      parts: [
        { text: result.response.text() }
      ]
    })

    return JSON.parse(result.response.text())
  }

}