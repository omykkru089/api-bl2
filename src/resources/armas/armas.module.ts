import { Module } from '@nestjs/common';
import { ArmasService } from './armas.service';
import { ArmasController } from './armas.controller';
import { armasProviders } from './providers/armas.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [ArmasController],
  providers: [...armasProviders,ArmasService],
})
export class ArmasModule {}
