export default class User {
    private  name!: string;
    private  socialNumber!: number;
    private  balance!: number;

   // constructor(name: string, socialNumber: number, balance: number){
   //     this.name = name;
   //     this.socialNumber = socialNumber;
   //     this.balance = balance;
   // }

    public getName(){
        return this.name;
    }

    public setName(name: string){
        this.name = name;
    }


    public getSocialNumber(){
        return this.socialNumber;
    }

    public setSocialNumber(socialNumber: number){
        this.socialNumber = socialNumber;
    }


    public getBalance(){
        return this.balance;
    }

    public setBalance(balance: number){
        this.balance = balance;
    }
}