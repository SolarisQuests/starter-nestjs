import { PartialType } from '@nestjs/swagger';
import { CreateAudClientDto } from './create-aud_client.dto';

export class UpdateAudClientDto extends PartialType(CreateAudClientDto) {}
