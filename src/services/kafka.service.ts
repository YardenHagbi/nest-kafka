import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from 'kafkajs';
import { EventService } from './event.service';

@Injectable()
export class KafkaService {
  constructor(
    @Inject('KAFKA_SERVICE') private kafkaClient: ClientKafka,
    private eventService: EventService,
  ) {}

  sendMessage(topic: string, message: any) {
    this.kafkaClient.emit(topic, message);
  }

  @EventPattern('yarden-topic')
  async consumeEvents(@Payload() message: KafkaMessage) {
    console.log(new Date().toISOString());
    this.eventService.handleEvent(message.toString());
  }
}
