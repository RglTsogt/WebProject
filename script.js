let isplus = false;
let isminus = false;
let isdivide = false;
let ismultiple = false; 
let justanumber = 0;
let ans = NaN;
let issolvedcurrentprob = false;
document.getElementById("plusb").addEventListener("click", function(){
    if(isplus == false){
        document.getElementById("plusb").style.backgroundColor = "green";
        isplus = true;
    }else{
        document.getElementById("plusb").style.backgroundColor = "lightgreen";
        isplus = false;
    }
})
document.getElementById("minusb").addEventListener("click", function(){
    if(isminus == false){
        document.getElementById("minusb").style.backgroundColor = "green";
        isminus= true;
    }else{
        document.getElementById("minusb").style.backgroundColor = "lightgreen";
        isminus = false;
    }
})
document.getElementById("divideb").addEventListener("click", function(){
    if(isdivide == false){
        document.getElementById("divideb").style.backgroundColor = "green";
        isdivide = true;
    }else{
        document.getElementById("divideb").style.backgroundColor = "lightgreen";
        isdivide = false;
    }
})
document.getElementById("multipleb").addEventListener("click", function(){
    if(ismultiple == false){
        document.getElementById("multipleb").style.backgroundColor = "green";
        ismultiple = true;
    }else{
        document.getElementById("multipleb").style.backgroundColor = "lightgreen";
        ismultiple = false;
    }
})
function getprob(){
    if(issolvedcurrentprob == false){
        justanumber = 0;
        document.getElementById("streakcounter").innerHTML = justanumber;
    }

    if(isplus == false && isminus == false && isdivide == false && ismultiple == false){
        alert("you must have atleast 1 chosen");
        return;
    }
    if(document.getElementById("numb").value == ""){
        alert("you must enter number of values");
        return;
    }
    if(document.getElementById("numb").value > 20){
        alert("Number of values mustn't exceed 20");
        return;
    }
    if(document.getElementById("numb").value < 1){
        alert("Number of values mustn't be lower than 1");
        return;
    }
    if(document.getElementById("max").value == ""){
        alert("please enter max value");
        return;
    }
    if(document.getElementById("max").value > 200){
        alert("max value mustn't exceed 200");
        return;
    }
    issolvedcurrentprob = false;
    let s = "";
    let maxval = document.getElementById("max").value;
    let numval = document.getElementById("numb").value;
    let moves = [];
    if(isplus){
        moves.push("+");
    }
    if(isminus){
        moves.push("-");
    }
    if(isdivide){
        moves.push("÷");
    }
    if(ismultiple){
        moves.push("×");
    }
    let nextval = Math.floor((Math.random() * maxval) + 1);
    ans = nextval;
    s += ans.toString();
    for(let i = 1; i <= numval; i++){
        let nextmove =  moves[Math.floor(Math.random() * moves.length)];
        
        s += nextmove.toString();
        if(nextmove == "÷"){
            let possibledivideables = [];
            for(let j = 1; (j <= maxval && j <= maxval); j++){
                if(ans % j == 0){
                    possibledivideables.push(j);
                }
            }
            nextval = possibledivideables[Math.floor(Math.random() * possibledivideables.length)];
            s += nextval.toString();
        }
        else{
            nextval =  Math.floor((Math.random() * maxval) + 1);
            s += nextval.toString();   
        }

        if(nextmove == "÷"){
            ans = ans / nextval;
        }
        if(nextmove == "×"){
            ans = ans * nextval;
        }
        if(nextmove == "+"){
            ans = ans + nextval;
        }
        if(nextmove == "-"){
            ans = ans - nextval;
        }
    }
    document.getElementById("problem").innerHTML = s;
}

document.getElementById("check").addEventListener("click", function(){
    if(issolvedcurrentprob == true){
        alert("you have already solved this problem");
        return;
    }
    let givenans = document.getElementById("answer").value;
    if(givenans == ans){
        issolvedcurrentprob = true;
        justanumber = justanumber + 1;
        document.getElementById("answer").value = "";
        getprob();
    }else{
        alert("your answer is wrong");
        justanumber = 0;
    }
    document.getElementById("streakcounter").innerHTML = justanumber;
    
})