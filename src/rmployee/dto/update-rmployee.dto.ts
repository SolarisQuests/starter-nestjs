import { PartialType } from '@nestjs/swagger';
import { CreateRmployeeDto } from './create-rmployee.dto';

export class UpdateRmployeeDto extends PartialType(CreateRmployeeDto) {
    _id: string;  
    updatedBy: string;
    updatedOn: Date;
}
