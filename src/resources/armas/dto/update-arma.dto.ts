import { PartialType } from '@nestjs/swagger';
import { CreateArmaDto } from './create-arma.dto';

export class UpdateArmaDto extends PartialType(CreateArmaDto) {}
