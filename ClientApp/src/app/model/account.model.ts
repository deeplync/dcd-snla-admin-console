import * as dayjs from 'dayjs';
export class Account {
    constructor(
      public id?:string,
      public activated?: boolean,
      public authorities?: string[],
      public email?: string,
      public name?: string,
      public firstName?: string | null,
      public lastName?: string | null,
      public imageUrl?: ArrayBuffer | null,
      public createdDateTime?:dayjs.Dayjs
    ) {}
  }