import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupKafka } from './config/kafka.config';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    //kafka
    setupKafka(app);

    await app.startAllMicroservices();
    await app.listen(3000);
  } catch (error) {
    console.error('Error bootstrapping the app:', error);
    process.exit(1);
  }
}

bootstrap();
