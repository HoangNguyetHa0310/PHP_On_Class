// $(document).ready(function(){
//     $("#btnLogin").click(function(){
//         let uname = $("#txtUseName").val();
//         let pass = $("#txPassWord").val();
//         if (uname==""||  pass==""){
//             alert("vui long nhap use or pass");
//         }else {
//             alert("thanh cong ");
//         }
//     })
// });

$(document).ready(function(){
    $("#btnok").click(function(){
        let x = $("#txtX").val();
        let y = $("#txtY").val();
        let sum = parseInt(x) + parseInt(y);
        // $("#sum").text("sum: "+sum); 
        // $("#sum").hide();
        if (x == isNaN || y == isNaN || x =="" || y==""){
            alert("vui long nhap lai");
        }else{
            // $("#sum").show();
            $("#sum").text(sum);
        }

    });
}); 

 