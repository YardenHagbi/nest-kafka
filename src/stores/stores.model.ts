import { Schema, Types, model } from 'mongoose';

export interface Store {
  _id: Types.ObjectId;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema<Store>(
  {
    _id: Types.ObjectId,
    name: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date,
  },
  { versionKey: false },
);

schema.pre('save', function (this: Store, next) {
  if (!this.createdAt) this.createdAt = new Date();
  this.updatedAt = new Date();
  next();
});

export const storesRepository = model<Store>('stores', schema);
