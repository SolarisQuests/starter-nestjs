import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from '../shared/common';


@Injectable()
export class SubscriptionService {
  async create(createSubscriptionDto: CreateSubscriptionDto) {
    const stripe = require('stripe')('sk_test_51MPhppLt5X77RsMiWCL1YY0r8xqVQPiUshlyqrqiI2w6CpjG96bEorhPfQX1UVTOlfJLQ2J5pb5q8atkCukgtLFI00ssmOtkiO');
    const subscription = await stripe.subscriptions.create({
      customer: createSubscriptionDto.customerId,
      items: [
        {
          price: createSubscriptionDto.price,
        },
      ],
    })
    return subscription;
  }

 async findAll()  {
    const stripe = require('stripe')('sk_test_51MPhppLt5X77RsMiWCL1YY0r8xqVQPiUshlyqrqiI2w6CpjG96bEorhPfQX1UVTOlfJLQ2J5pb5q8atkCukgtLFI00ssmOtkiO');
    const subscriptions = await stripe.subscriptions.list({
      limit: 100,
    });
    let response={
      status: "Ok",
      data: subscriptions.data
    }
        return response;
  }

  async  findOne(id: string) {
    const stripe = require('stripe')('sk_test_51MPhppLt5X77RsMiWCL1YY0r8xqVQPiUshlyqrqiI2w6CpjG96bEorhPfQX1UVTOlfJLQ2J5pb5q8atkCukgtLFI00ssmOtkiO');


    const subscriptions = await stripe.subscriptions.list({
      limit: 100,
      customer:id
    });
    
           return subscriptions;
  
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscription`;
  }
}
