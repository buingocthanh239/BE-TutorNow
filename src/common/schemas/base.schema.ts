import { Prop } from '@nestjs/mongoose';

export class BaseSchema {
    @Prop()
    createdBy?: string;

    @Prop()
    updatedBy?: string;

    @Prop()
    deletedBy?: string;

    createdAt: Date;

    updatedAt: Date;

    @Prop()
    deletedAt?: Date;
}
