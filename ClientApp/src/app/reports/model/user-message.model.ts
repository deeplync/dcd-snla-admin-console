import * as dayjs from "dayjs";

export interface IUserMessage {
    id?: string;
    firstName?: string;
    lastName?: string;
    messageType?: string;
    description?: string;
    createdDateMobile?:dayjs.Dayjs;
}