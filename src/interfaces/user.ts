export interface user {
    username: string;
    email: string;
    fullname: string;
    id: string;
    roles: string[];
    accessToken: string;
}

export interface IUser {
    currentUser: user & { accessToken: string }
}
