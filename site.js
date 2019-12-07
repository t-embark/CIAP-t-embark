let code = '';
let count = 0;

function AddSign(sign){
    code += sign;
    document.getElementById(`result${count}`).setAttribute("src", `logo${sign}.png`);
    count++;
    if(count === 3){
        CheckResult();
        count = 0;
        code = '';
    }
}

function CheckResult(){
    switch(code){
        case 'abc':
            alert("yeah");
            break;
        default :
            alert("nul");
    }
}

function StartVideo(video){

}