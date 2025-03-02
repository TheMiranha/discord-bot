import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1740894151091 implements MigrationInterface {
    name = 'Migration1740894151091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_presence" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "guildId" bigint NOT NULL, "userId" bigint NOT NULL, "timeInMinutes" bigint NOT NULL, CONSTRAINT "PK_562d693ca2ee27d96b75ff78eda" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_presence"`);
    }

}
