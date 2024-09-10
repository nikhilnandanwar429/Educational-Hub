import { Client, Account, ID } from "appwrite";


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
            .setProject(import.meta.env.APPWRITE_PROJECT_ID);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const account = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (account) {
                return this.login({email, password});
            } else {
                
                return account;
            }
        }
        catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
            const account = await this.account.createEmailSession(email, password);
            return account;
        }
        catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            const account = await this.account.get();
            return account;
        }
        catch(error){
            throw error;
        }
    }

    async logout(){
        try{
            const account = await this.account.deleteSession("current");
            return account;
        }
        catch(error){
            throw error;
        }
    }
    
}

const authService = new AuthService();
export default authService