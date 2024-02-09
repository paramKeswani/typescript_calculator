class user{
    private username :string;
    protected email : string;

    constructor(u:string,e:string)
    {
        this.username = u;
        this.email = e;

    }
   public getUserInfo() : string
    {
        return "username : " +this.username +" email : " +this.username ;

    }

}

class Admin extends user
{
    private adminName : string;
    protected adminEmail :string;

    constructor(username : string,email:string,an :string,ae : string)
    { 
        super(username,email);
        this.adminName = an;
        this.adminEmail = ae;
    }
    
    public grantAccess(User:user ) :void
    {
        console.log("admin " +this.adminName +" grants access to user " +User.getUserInfo());

    } 

}

class DataManager
{
   private data: string ;
   constructor(data :string)
   {
    this.data = data;
   }
    getData(admin :Admin) :string
   {

    return "The data is : "+ this.data +" admin is : " +admin.getUserInfo() ;
   }

}


let norm_user = new user("soham","abc@gmail.com");

console.log(norm_user.getUserInfo());

let administrator = new Admin("param","abc@gmail.com","shivam","xyz@gmail.com");
administrator.getUserInfo();
console.log(administrator.grantAccess(norm_user));

let d_m =new DataManager("hello");

console.log(d_m.getData(administrator));