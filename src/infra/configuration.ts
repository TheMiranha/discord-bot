import * as dotenv from 'dotenv'
import { get } from 'env-var'

dotenv.config()

export class EnvConfig {


  // -------------- SERVICES -------------- //
  public static readonly DISCORD_TOKEN = get('DISCORD_TOKEN').asString();
  public static readonly GEMINI_TOKEN = get('GEMINI_TOKEN').asString();
  public static readonly CODE_IMAGE_GENERATOR_URL = get('CODE_IMAGE_GENERATOR_URL').asUrlString();

  // -------------- DATABASE -------------- //
  public static readonly DATABASE_ADDRESS = get('DATABASE_ADDRESS').asString();
  public static readonly DATABASE_PORT = get('DATABASE_PORT').asPortNumber();
  public static readonly DATABASE_USERNAME = get('DATABASE_USERNAME').asString();
  public static readonly DATABASE_PASSWORD = get('DATABASE_PASSWORD').asString();
  public static readonly DATABASE_DATABASE = get('DATABASE_DATABASE').asString();

}