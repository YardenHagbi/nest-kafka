import { Injectable } from '@nestjs/common';

@Injectable()
export class EventService {
  constructor() {}

  async handleEvent(event: string) {
    console.log(`starting event ${event}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(`end event ${event}`);
  }
}
