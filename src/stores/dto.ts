import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class StoreDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
