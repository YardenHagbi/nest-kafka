import { INestApplication } from '@nestjs/common';
import { KafkaOptions, MicroserviceOptions, Transport } from '@nestjs/microservices';

export const kafkaConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'my-group-id',
    },
  },
};

export const setupKafka = (app: INestApplication) => {
  app.connectMicroservice<MicroserviceOptions>(kafkaConfig);
};
