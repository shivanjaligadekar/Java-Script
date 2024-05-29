$("document").ready(function () {
    function updateChart(data1, data2, data3) {
        myPieChart.data.datasets[0].data = [data1, data2, data3];
        myPieChart.update();
    }

    $("button").click(function () {
        var data1 = $("#x1").val();
        var data2 = $("#x2").val();
        var data3 = $("#x3").val();
        console.log(data1, data2, data3);
        if (data1 === "" || data2 === "" || data3 === "") {
            alert("All Values are required");
        }
        else if (isNaN(data1) || isNaN(data2) || isNaN(data3)) {
            alert("Only numbers are required");
        }
        else if(data1<35 ||data2<35||data3<35){
            $("#p1").text("Fail")
        }
        else{
            data1=Number(data1)
            data2=Number(data2)
            data3=Number(data3)
            var total = data1+data2+data3;
            var per = (total/300)*100;
            console.log(per,total);
            $("#p1").text("total : "+total)
            $("#p2").text("Percentage : "+Math.round(per,2)+"%")
            $("#p3").text("Pass")
            
            updateChart(data1, data2, data3);
        }
    });

    var ctx = document.getElementById('myPieChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Marks 1', 'Marks 2', 'Marks 3'],
            datasets: [{
                label: 'Marks Distribution',
                data: [], // Initial empty data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false
        }
    });

});
