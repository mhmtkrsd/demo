import { IUserModel } from './IUserModel';

export interface IAuthResponse {
    data: IUserModel;
    token: string;
    humanReadableMessage: string;
}
