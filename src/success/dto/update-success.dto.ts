import { PartialType } from '@nestjs/swagger';
import { CreateSuccessDto } from './create-success.dto';

export class UpdateSuccessDto extends PartialType(CreateSuccessDto) {}
