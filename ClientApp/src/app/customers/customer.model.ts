import * as dayjs from 'dayjs';

export interface ICustomer {
  id?: string;
  firstName?: string;
  scannedCount?: number;
  nationality?: string;
  createdDate?: dayjs.Dayjs;
  lastAccessedDate?: dayjs.Dayjs;
}

export class Customer implements ICustomer {
  constructor(
    public id?: string,
    public firstName?: string,
    public scannedCount?: number,
    public nationality?: string,
    public createdDate?: dayjs.Dayjs,
    public lastAccessedDate?: dayjs.Dayjs
  ) { }
}

export function getWordIdentifier(customer: ICustomer): string | undefined {
  return customer.id;
}
