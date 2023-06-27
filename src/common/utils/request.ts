import { ClassConstructor, plainToInstance } from 'class-transformer';
import {
    IErrorResponse,
    IHttpError,
    ISuccessListResponse,
    ISuccessResponse,
} from '../interfaces';

export function transformObjectToResponse<T>(cls: ClassConstructor<T>) {
    return function (data): ISuccessResponse<T> {
        return {
            message: 'Success',
            data: plainToInstance(cls, data, {
                excludeExtraneousValues: true,
            }) as unknown as T,
        };
    };
}

export function transformArrayToResponse<T>(cls: ClassConstructor<T>) {
    return function (data, totalItems: number): ISuccessListResponse<T> {
        return {
            message: 'Success',
            data: {
                items: data.map((item) =>
                    plainToInstance(cls, item, {
                        excludeExtraneousValues: true,
                    }),
                ) as unknown as T[],
                totalItems,
            },
        };
    };
}

export function errorToResponse(
    errors: IHttpError[],
    message: string,
): IErrorResponse {
    return {
        message,
        errors,
    };
}
