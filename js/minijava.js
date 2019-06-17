

/*var myData=[];
var term="";
$("#termInp").keyup(function(){
   term=$("#termInp").val();
     getData();
})
    

function getData()
{
   var req= new XMLHttpRequest();
   req.open("get","https://newsapi.org/v2/everything?q="+term+"&from=2019-03-21&sortBy=publishedAt&apiKey=c5d7f46ff09f4da8872fbb2e5deb2c53");
   req.send();
req.onload=function()
{
    if(req.status==200)
        {
            myData=JSON.parse(req.response).articles;
            console.log(myData);
             displayData();    
        } 
}
}
 
function displayData(){
    var temp="";
    for(var i=0; i<myData.length; i++)
        {
            temp+="<div class='col-md-3'><h5>"+myData[i].title+"</h5><p>"+myData[i].description+"</p><img src='"+myData[i].urlToImage+"' class='img-fluid'/></div>";
        }
    document.getElementById("rowData").innerHTML=temp;
}
 */
var term="";
$("#termInp").keyup(function(){
   term=$("#termInp").val();
     done();
})
function done(){
var myData=[];
var er="";
var getData=new Promise(function(resolved,rejected){
    
    var req= new XMLHttpRequest();
   req.open("get","https://newsapi.org/v2/everything?q="+term+"&from=2019-05-17&sortBy=publishedAt&apiKey=c5d7f46ff09f4da8872fbb2e5deb2c53");
   req.send();
req.onload=function()
{
    if(req.status==200)
        {
            myData=JSON.parse(req.response).articles;
            resolved(myData)
        }
    else if(req.status==400)
        {
         er="Bad Request" ;
            rejected(er);
        }
  else if(req.status==401)
        {
          er="page forbidden" ;
            rejected(er);
        }
  
}
})

getData.then(
function(dt){
    myData=dt;
    displayData();
    
}
,
function(er){
    
    document.getElementById("rowData").innerHTML="<h2>"+er+"</h2>"
})


function displayData(){
    var temp="";
    for(var i=0; i<myData.length; i++)
        {
            temp+="<div class='hi'><h5>"+myData[i].title+"</h5><p>"+myData[i].description+"</p><img src='"+myData[i].urlToImage+"' class='img-fluid'/><br><a href="+myData[i].url+">see more</a></div>";
        }
    document.getElementById("rowData").innerHTML=temp;
}
}