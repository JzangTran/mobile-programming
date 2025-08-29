export class Account {
    readonly id: string;
    public username: string;
    private password: string;

    constructor(id: string, username: string, password: string) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

}