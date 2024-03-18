import { PartialType } from '@nestjs/swagger';
import { CreateAudDentalDto } from './create-aud_dental.dto';

export class UpdateAudDentalDto extends PartialType(CreateAudDentalDto) {}
