import { PartialType } from '@nestjs/swagger';
import { CreateSeoRankroverDto } from './create-seo__rankrover.dto';

export class UpdateSeoRankroverDto extends PartialType(CreateSeoRankroverDto) {}
