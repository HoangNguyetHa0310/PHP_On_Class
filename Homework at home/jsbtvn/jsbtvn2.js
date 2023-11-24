$(document).ready(function(){
    $("#btnOK").click(function(){
        let a = $("#btnA").val();
        let b = $("#btnB").val();
        let c = $("#btnC").val();

        // let sum = parseInt(a) + parseInt(b) + parseInt(c);
        // console.log("sum= " +sum);

        if (a=="" || b=="" || c==""){
            alert("vui long nhap Full cac Box !");
        }else if (isNaN(a) || isNaN(b) || isNaN(b)) {
            alert("Vui long nhap so cho a, b, c !")
        }

        let dental = b*b - 4*a*c;
        let x1 = ((-b+Math.sqrt(dental))/ 2*a).toFixed(2) ;
        let x2 = ((-b-Math.sqrt(dental))/ 2*a).toFixed(2) ;

        if (dental < 0 ){
            alert("Phuong Trinh vo nghiem ! Vui long nhap lai")
            // focus("#btnA");
        }else if (dental == 0 ) {
            $("#result").val(" " + x1);
            // console.log("x1 = " +x1);
        }else {
            $("#result").val("x1= " + x1 +" và "+ "x2= " + x2);

            // console.log("x1= "+x1);
            // console.log("x2= "+x2);

        }


    })
});