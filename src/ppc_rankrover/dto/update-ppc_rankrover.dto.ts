import { PartialType } from '@nestjs/swagger';
import { CreatePpcRankroverDto } from './create-ppc_rankrover.dto';

export class UpdatePpcRankroverDto extends PartialType(CreatePpcRankroverDto) {
    _id: string;  
    updatedBy: string;
    updatedOn: Date;
}
