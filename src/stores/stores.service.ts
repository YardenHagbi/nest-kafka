import { Injectable, NotFoundException } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { StoreDto } from './dto';
import { Store, storesRepository } from './stores.model';

@Injectable()
export class StoresService {
  async findAll(): Promise<Store[]> {
    return await storesRepository.find();
  }

  async findById(id: ObjectId): Promise<Store> {
    const store = storesRepository.findById(id);
    if (!store) throw new NotFoundException();
    return store;
  }

  async add(storeDto: StoreDto): Promise<Store> {
    const store = {
      name: storeDto.name,
      userId: storeDto.userId,
    };
    return await storesRepository.create(store);
  }
}
