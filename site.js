let code = '';
let count = 0;
let equivalents = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

function addSign(sign) {
    code += equivalents[sign-1];
    count++;
    document.getElementById(`result${count}`).setAttribute("src", `img/logo${sign}.png`);
    if (count === 3) {
        checkResult();
        count = 0;
        code = '';
    }
}

function checkResult() {
  console.log(code);
    switch(code) {
        case 'abc':
            alert("yeah");
            break;
        default :
            alert("nul");
    }
}

function startVideo(video) {

}
