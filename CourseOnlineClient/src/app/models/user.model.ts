export class UserPostModel {
  constructor(
    public role: string,
    public name: string,
    public email: string,
    public password: string
  ) { }
}

export class UserLogin {
  constructor(public email: string, public password: string) { }
}

export class User {
    constructor(
    public id: string | null,
    public role: string,
    public name: string,
    public email: string,
    public password: string) { }
}
export const emptyUser = new User('', '', '', '', '');
