var a=new Array();
a.push("developer");
a.push("tester");
function verifyUser(userName)
{
	
 var p= new Promise(function (resolve,reject)
	{
	if(userName==="charan")
		resolve(userName);
	else 
	{
		reject("unauthorized user");
	}
	
	 });
	 return p;
}
function getRoles(userName){
	return new Promise(function(resolve,reject){
	 if(userName==="charan")
	 {

	   resolve(a)
	 }
	 else
	 {
		 reject("Invalid User");
	 }
	 
 })
}
function checkUserAcess(a){
    return new Promise(function(resolve,reject){
        var i ;
        for (i=0;i<a.length;i++)
        {
            if(a[i]==='developer')
            resolve("success");
            else
            reject("Invalid User");
        }
    })
}
function authenticateUser(userName,pass)
{
    return new Promise(function(resolve,reject){
        if(userName==="charan" && pass==="12345")
        resolve(userName);
        else
        reject("Authentication Failed")
    })
}
async function output(){
try{
var a=await authenticateUser("charan","12345");
var b=await verifyUser(a);
var c=await getRoles(b);
var d=await checkUserAcess(c);
    console.log(d);
}
catch(err){
    console.log("error occured",err);
}
}
output();