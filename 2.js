var a=new Array();;
a.push("developer");
a.push("tester");
function verifyUser(userName,callback){

        if(userName==="charan")
        callback(userName) 
        else
        callback("unauthorized user");    
}
function getRoles(userName,callback){

        if(userName==="charan")
        callback(a)
        else
        callback("Invalid User");    
}
function checkUserAccess(a,callback){
    for(var i=0;i<a.length;i++)
    {
        if(a[i]==="developer"){
        callback("success");
            break;
        }
        else
        callback("failure")
    }
}
function authenticateUser(userName,pass,callback){
    
        if(userName==="charan" && pass==="12345")
        callback(userName);
        else
        callback("Invalid User");
}

authenticateUser("charan","12345",function(ares){
    verifyUser(ares,function(vres){
        getRoles(vres,function(gres){
            checkUserAccess(gres,function(cres){
                console.log(cres);
            })
        })
        
    })
})