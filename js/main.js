var a=1;
let stop=setInterval(function(time){
    a++;
    if(a>10){
        clearInterval(stop);
    }
    document.write(new Date().toLocaleTimeString()+" Welcome");
    document.write("<br>")
},3000
)

