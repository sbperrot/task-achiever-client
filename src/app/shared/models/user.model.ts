import { UserInterface } from '../interfaces';

export class User {
    constructor(_args : UserInterface) {
        Object.assign(this, _args);
    }
}
