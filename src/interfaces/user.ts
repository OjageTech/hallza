export interface user {
    username: string;
    email: string;
    fullname: string;
    _id: string;
    password: string;
}

export interface IUser {
    currentUser: user & { accessToken: string }
}
