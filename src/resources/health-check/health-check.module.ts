import { Module } from '@nestjs/common';
import { HealthCheckController } from './health-check.controller';
import { HealthCheckService } from './health-check.service';
import { DatabaseModule } from 'src/database/database.module';
import { databaseProviders } from './providers/database.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [HealthCheckController],
    providers: [...databaseProviders, HealthCheckService]
})
export class HealthCheckModule {}
