import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { IQuery } from '../interfaces';

export enum SORT_ORDER {
  DESC = 'desc',
  ASC = 'asc',
}

export class BaseQueryDto implements IQuery {
  @IsNumber()
  @Min(1)
  @IsOptional()
  @Transform((v) => +v.value)
  page = 1;

  @Transform((v) => +v.value)
  @Min(1)
  @IsNumber()
  @IsOptional()
  limit = 10;

  @IsString()
  @IsOptional()
  orderBy = 'updatedAt';

  @IsEnum(SORT_ORDER)
  @IsOptional()
  orderDirection = SORT_ORDER.ASC;

  get skip() {
    return (this.page - 1) * this.limit;
  }

  get limited() {
    return this.limit;
  }
}

export class FilterQueryDto extends BaseQueryDto {
  @IsString()
  @IsOptional()
  keyword?: string;
}
