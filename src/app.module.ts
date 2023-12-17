import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { HealthCheckModule } from './resources/health-check/health-check.module';
import { ArmasModule } from './resources/armas/armas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.prod.env', '.test.env', '.env'        
      ]
    }),
    DatabaseModule,
    HealthCheckModule,
    ArmasModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
