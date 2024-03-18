import { PartialType } from '@nestjs/swagger';
import { CreateCreateStripeDto } from './create-create_stripe.dto';

export class UpdateCreateStripeDto extends PartialType(CreateCreateStripeDto) {}
