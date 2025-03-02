import { Module } from '@nestjs/common';
import { DiscordModule } from './infra/discord/discord.module';

@Module({
  imports: [
    DiscordModule
  ]
})
export class AppModule { }
