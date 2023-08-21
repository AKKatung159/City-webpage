function btAdd() {
    var x = document.getElementById("b");
    var y = document.getElementById("c");
    if (x.style.display === "none") {
      x.style.display = "block";
      idk();
    }
    else if (y.style.display === "none"&& x.style.display==="block") {
        y.style.display = "block";
        idk();
      }
  }
  function btMinus() {
    var x = document.getElementById("b");
    var y = document.getElementById("c");
    if (x.style.display === "block"&& y.style.display==="none") {
      x.style.display = "none";
      x.value=0;
      idk();
    }
    else if (y.style.display === "block") {
        y.style.display = "none";
        y.value=0;
        idk();
      }
  }
  function idk(){
    var x=document.getElementById("1");
    var y=document.getElementById("2");
    var z=document.getElementById("3");
    var total=Number(document.getElementById("a").value)+Number(document.getElementById("b").value)+Number(document.getElementById("c").value);
    var tax;
    x.value =total;
    if (total>5000000) {
        tax=35;
    }
    else if (total>2000000) {
        tax=30;
    } else if(total>1000000){
        tax=25;
    }else if (total>750000) {
        tax=20;
    } else if(total>500000){
        tax=15;
    }else if (total>300000) {
        tax=10;
    } else if(total>150000){
        tax=5;
    }else {
        tax=0;
    }
    y.value=tax
    z.value=tax/100*total;
}