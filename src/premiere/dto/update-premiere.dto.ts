import { PartialType } from '@nestjs/swagger';
import { CreatePremiereDto } from './create-premiere.dto';

export class UpdatePremiereDto extends PartialType(CreatePremiereDto) {}
