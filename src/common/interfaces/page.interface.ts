import { HttpStatus } from '@nestjs/common';

export type IQuery = {
  page: number;
  limit: number;
} & Record<string, any>;

export interface ISuccessResponse<T> {
  message: string; // by default = "Success"
  data: T;
  path?: string;
  statusCode?: HttpStatus;
  traceId?: string;
}

export interface IListData<T> {
  items: T[];
  totalItems: number;
}

export type ISuccessListResponse<T> = ISuccessResponse<IListData<T>>;

export interface IHttpError {
  key: string;
  errorCode: HttpStatus;
  message: string;
}

export interface IErrorResponse {
  message: string; // ex: "Bad request"
  errors: IHttpError[];
  path?: string;
  statusCode?: HttpStatus;
  traceId?: string;
}
