import { PartialType } from '@nestjs/swagger';
import { CreateCancelDto } from './create-cancel.dto';

export class UpdateCancelDto extends PartialType(CreateCancelDto) {}
