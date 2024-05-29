const PASSWORD=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\-]).{4,8}$/;
const EMAIL=/^(([a-zA-Z0-9]([a-zA-Z0-9\-]+)?[a-zA-Z0-9]))@(([a-zA-Z0-9]([a-zA-Z0-9\-]+)?[a-zA-Z0-9])\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)$/

$(document).ready(function () {
    $("span").hide();
    $("button").click(function(){
    // console.log("button click") {
        var data1=$("#x1").val();
        var data2=$("#x2").val();
        console.log(data1);
        console.log(data2);
        var result1=EMAIL.test(data1);
        var result2=PASSWORD.test(data2);
        console.log(result1);
        console.log(result2);
        result1 ? "":($("#x1").next().fadeIn(1000))
        result1 ? "":($("#x2").next().fadeIn(1000))
        (result1 && result2)?($("button").after("<p>valid</p>")) :"";
    
    })
})
