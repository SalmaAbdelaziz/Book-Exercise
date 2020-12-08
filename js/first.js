
/* API*/ 
var allData = [];
var httpReq = new XMLHttpRequest();
var type = "names"; 
getData(type);

var links = document.querySelectorAll(".nav-link");

for(var i= 0 ; i < links.length ; i++)
{
    links[i].addEventListener("click" , function(e){
        type =  e.target.text;
        getData(type);

    })
}


function getData(type)
{

    httpReq.open("GET",  "https://api.nytimes.com/svc/books/v3/lists/"+type+".json&apiKey=AZ0CVRUpzAADoe719vXd634UGa7C7mgA" ) 
    httpReq.send(); 
    httpReq.onreadystatechange = function()
    {
        if(httpReq.readyState == 4 && httpReq.status == 200)
        {
    
            allData =  JSON.parse( httpReq.response).results; 
            displayData();
        }
    }
    

}


function displayData()
{
    var temp = ``;

    for(var i = 0 ; i <allData.length ; i++)
    {
        temp +=`
        <div class="col-md-3">
          <div class="item">
          
            <h5>`+allData[i].list_name+`</h5>
            <p>`+allData[i].display_name+`</p>
            <p>`+allData[i].updated+`</p>
          </div>
        </div>`;
    }

    document.getElementById("rowData").innerHTML = temp;
}

/*end of code api */

/*function for count down char in message in form (contact section) */
$(function(){
    
    let max =100;
    
    $("textarea").keyup(function(){
        
        let length=$(this).val().length;
        let character = max - length;
        
        if(character<=0)
            {
                 $("#char").text("your available character finished");
                
            }
        else{
        
        $("#char").text(character);
        }
        
    });

    
});

$("#btnUp").click(function(){
    $("body ,html").animate({scrollTop:'0'},2000)
})



