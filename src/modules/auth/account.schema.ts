import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
import * as MongooseDelete from 'mongoose-delete';
import { UserTypes } from 'src/common/enum/base.enum';
import { BaseSchema } from 'src/common/schemas/base.schema';

export type AccountDocument = HydratedDocument<Account>;

@Schema({ timestamps: true })
export class Account extends BaseSchema {
    id: ObjectId;

    @Prop({ type: String, required: true, unique: true })
    email: string;

    @Prop({ type: String, required: true })
    password: string;

    @Prop({ type: String, required: true, unique: true })
    username: string;

    @Prop({ type: String })
    avatar: string;

    @Prop({ type: String, enum: UserTypes, required: true })
    type: UserTypes;

    @Prop({ type: Boolean, default: false })
    isValidEmail: boolean;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
AccountSchema.plugin(MongooseDelete, {
    deletedAt: true,
    deletedBy: true,
    deletedByType: String,
    overrideMethods: 'all',
});
