let code = '';
let count = 0;
let equivalents = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

function addSign(sign) {
    code += equivalents[sign-1];
    console.log(code);
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
        case 'aci':
            document.location.href="fleur.html";
            break;
        case 'hbi':
            document.location.href="ulfe.html";
            break;
        case 'cdi':
            document.location.href="marie.html";
            break;
        case 'afi':
            document.location.href="sandrine.html";
            break;
        case 'efi':
            document.location.href="homme.html";
            break;
        default :
            document.location.href="code.html";
            alert("Non, essaie encore");
    }
}
