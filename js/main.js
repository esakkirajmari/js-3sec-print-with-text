var b=1;
let stop=setInterval(function(time){
    b++;
    if(b>10){
        clearInterval(stop);
    }
    document.write(new Date().toLocaleTimeString()+" Welcome");
    document.write("<br>")
},3000
)

