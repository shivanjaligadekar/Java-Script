document.querySelector("button").
addEventListener("click",function() {
    // alert();
    var xmlHttp=new XMLHttpRequest();
    console.log(xmlHttp);
    console.log(xmlHttp.readyState);
    xmlHttp.onreadystatechange = function() {
        // console.log(xmlHttp.readyState,xmlHttp.status);
        if(xmlHttp.readyState==4 && xmlHttp.status==200){
            console.log(xmlHttp.responseText);
            var ans=JSON.parse(xmlHttp.responseText);
            console.log(ans);
            ans.forEach(function(item) {
                console.log(item);
                var divtag=document.createElement("div");
                console.log(divtag);
                var imgtag=document.createElement("img");
                console.log(imgtag);
                var h2=document.createElement("h2");
                console.log(h2);
                var ptag=document.createElement("ptag");
                console.log(ptag);
                h2.innerText=item.price
                ptag.innerText=item.title
                imgtag.src=item.image
                divtag.className="col-3"
                imgtag.className="img-fluid"

                divtag.append(imgtag)
                divtag.append(h2);
                divtag.append(ptag);
                document.querySelector(".row").append(divtag)
            
            });

        }
    }
    // 0 stands for no request is intialized
    xmlHttp.open("GET","https://fakestoreapi.com/products");//1-request has been setup from server side.
    xmlHttp.send();//2-send stands for request has been sent to server side.
    //3-request it is in process in server side
    //4-request cycle completed.
    

})