import { Prop } from '@nestjs/mongoose';

export class BaseSchema {
  @Prop({ required: true })
  createdBy: string;

  @Prop({ required: true })
  updatedBy: string;

  @Prop()
  deletedBy?: string;

  createdAt: Date;

  updatedAt: Date;

  @Prop()
  deletedAt?: Date;
}
