import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StoreDto } from './dto';
import { Store } from './stores.model';
import { StoresService } from './stores.service';
import { ObjectId } from 'mongoose';

@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Get()
  async findAll(): Promise<Store[]> {
    return await this.storesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: ObjectId): Promise<Store> {
    return await this.storesService.findById(id);
  }

  @Post()
  async add(@Body() storeDto: StoreDto): Promise<Store> {
    return await this.storesService.add(storeDto);
  }
}
