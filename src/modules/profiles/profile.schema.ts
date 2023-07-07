import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import * as MongooseDelete from 'mongoose-delete';
import { BaseSchema } from 'src/common/schemas/base.schema';
import { Account } from '../auth/account.schema';
import { Role } from 'src/common/enum/roles.enum';
import { Gender } from 'src/common/enum/base.enum';

export interface Fee {
    _class: string;
    subject: string;
    salary: number;
}

export type ProfileDocument = HydratedDocument<Profile>;

@Schema({ _id: false })
export class AdminDetail {
    @Prop({ type: [String], enum: Role, required: true })
    roles: Role[];
}

@Schema({ _id: false })
export class TutorDetail {
    @Prop({ type: String, unique: true })
    facebookUrl: string;

    @Prop({ type: String })
    position: string;

    @Prop({ type: String })
    agenc: string;

    @Prop({ type: String })
    department: string;

    @Prop({ type: String })
    transport: string;

    @Prop({ type: String })
    introduction: string;

    @Prop({ type: [String] })
    certificates: string[];

    @Prop({ type: [String] })
    scheduleAvailable: string[];

    @Prop({ type: Number, default: 5 })
    rate: number;

    @Prop()
    fees: Fee[];
}

@Schema({ timestamps: true })
export class Profile extends BaseSchema {
    id: ObjectId;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
    })
    accountId: Account;

    @Prop({ type: String })
    name?: string;

    @Prop({ type: String, enum: Gender })
    gender?: Gender;

    @Prop({ type: String }) // sau thêm validation số đt tại đây.
    phone?: string;

    @Prop({ type: Date })
    dob?: Date;

    @Prop({ type: TutorDetail })
    tutorDetail?: TutorDetail;

    @Prop({ type: AdminDetail })
    adminDetail?: AdminDetail;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
ProfileSchema.plugin(MongooseDelete, {
    deletedAt: true,
    deletedBy: true,
    deletedByType: String,
    overrideMethods: 'all',
});
