export interface UserList {
    data: User[];
    limit: number;
    page: number;
    total: number;
}

export interface User {
    firstName: string;
    id: string;
    lastName: string,
    picture: string,
    title: string,
    email?: string
}