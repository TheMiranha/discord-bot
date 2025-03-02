import { DataSource } from "typeorm"
import { UserPresence } from "./entities/user-presence"
import { EnvConfig } from "../configuration"

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: EnvConfig.DATABASE_ADDRESS,
  port: EnvConfig.DATABASE_PORT,
  username: EnvConfig.DATABASE_USERNAME,
  password: EnvConfig.DATABASE_PASSWORD,
  database: EnvConfig.DATABASE_DATABASE,
  migrations: ['dist/infra/database/migrations/*{.js,.ts}'],
  entities: [
    UserPresence
  ],
  synchronize: false, // ALWAYS FALSE IN PRODUCTION MODE
  logging: true,
})