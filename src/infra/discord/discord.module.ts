import { Module } from "@nestjs/common";
import { NecordModule } from "necord";
import { EnvConfig } from "../configuration";
import { IntentsBitField } from "discord.js";
import { OnReadyEvent } from "./events/on-ready.event";
import { RaySoModule } from "../ray-so/ray-so.module";
import { CodeHintUseCase } from "src/app/use-cases/code-hint.use-case";
import { CodeHintCommand } from "./commands/code-hint.command";
import { GeminiModule } from "../gemini/gemini.module";
import { DatabaseModule } from "../database/database.module";
import { MessageTagsEvent } from "./events/message-tags.event";
import { MessageTagUseCase } from "src/app/use-cases/message-tag.use-case";

@Module({
  imports: [
    NecordModule.forRoot({
      token: EnvConfig.DISCORD_TOKEN,
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.GuildVoiceStates,
        IntentsBitField.Flags.GuildMessageReactions
      ],
    }),
    RaySoModule,
    GeminiModule,
    DatabaseModule
  ],
  providers: [
    CodeHintUseCase,
    MessageTagUseCase,
    OnReadyEvent,
    MessageTagsEvent,
    CodeHintCommand
  ],
})
export class DiscordModule { }