$(document).ready(function () {
    $("button").click(function () {
        //alert();
        // $.get("https://restcountries.com/v3.1/all",function(data){
            // console.log(data);
            $.ajax({
                type:"get",
                url:"https://restcountries.com/v3.1/all",
                success:function(data){
                    console.log(data);
                    data.forEach(function (item) {
                        // console.log(item);
                        $(".row").append(`
                        <div class="col-2">
                        <img src="${item.flags.png}"
                        class="img-fluid">
                        <p>${item.name.common}</p>
                        </div>
                        `);
                    })
                        
                }
                
            })
})
    
})
