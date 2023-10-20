import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { kafkaConfig } from './config/kafka.config';
import { EventService } from './services/event.service';
import { KafkaService } from './services/kafka.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StoresModule } from './stores/stores.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([{ name: 'KAFKA_SERVICE', ...kafkaConfig }]),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    StoresModule
  ],
  controllers: [AppController],
  providers: [EventService, KafkaService],
})
export class AppModule {}
