function Questions(){
  alert("Добро пожаловать на мой скромный сайт");
  alert("Здесь вы можете сгенерировать рандомное число, вариант события или пароль");
}
//Внешний вид

//Применяем к документу
with (document) {
//HTMLкод
writeln('<br><form name="pass_form" style="width: 420px; margin: 0 auto; height: 540px; margin-top: 150px; border-radius: 20px 20px 20px 20px;' +
'border: 4px solid #000000; font-size: 24px; z-index: 1;"><div style="text-align:center; margin-top: -175px;"><b><big><br><br><br><br><br>При генерации использовать:</big></b></div>' +
'<div style="margin-left: 8px; margin-top: 0px; font-style: Calibri;"><input name="upper" type="checkbox" checked>Заглавные буквы<br>' +
'<input name="lower" type="checkbox">Маленькие буквы ' +
'<input name="digit" type="checkbox">Цифры<br>' +
'<input name="other" type="checkbox">Другие символы<br><br>Длина пароля: ' +
'<select name="numbers"><option value="4" selected>4</option>');
for (j=5; j<=30; j++) { writeln('<option value='+j+'>'+j+'</option>'); }
writeln('</select><br>Количество паролей: <select name="passwords">' +
'<option value="1" selected>1</option>');
for (j=2; j<=16; j++) { writeln('<option value='+j+'>'+j+'</option>'); }
writeln('</select><br>');
writeln('<div align="center"><input type="button" value="Сгенерировать" onClick="generate()" style="font-size: 18px;"></div>' +
'Сгенерированные пароли:<br>' +
'<textarea name="getback" style="margin-left: 12px; width: 320px; height: 124px; resize: none; font-size: 18px;" readonly></textarea></div></form><br><br><br><br><br><div align="center"><h1 style="font-family: cursive; color: purple;"></h1></div>');
}

//Создаем массив
upp = new Array('','A','B','C','D','E','F','G','H','I','J','K','L',
    'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
low = new Array('','a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z');
dig = new Array('','0','1','2','3','4','5','6','7','8','9');
other = new Array('','!','@','#','$','%','&','*','>','<','?');

function rnd(x,y,z) {
var num;
do {
    num = parseInt(Math.random()*z);
    if (num >= x && num <= y) break;
} while (true);
return(num);
}

function gen_pass() {
var pswrd = '';
var znak, s;
var k = 0;
var n = document.pass_form.numbers.value;
var pass = new Array();
var w = rnd(30,80,100);
for (var r = 0; r < w; r++) {
    if (pass_form.upper.checked) { znak = rnd(1,26,100); pass[k] = upp[znak]; k++; }
    if (pass_form.lower.checked) { znak = rnd(1,26,100); pass[k] = low[znak]; k++; }
    if (pass_form.digit.checked) { znak = rnd(1,10,100); pass[k] = dig[znak]; k++; }
    if (pass_form.other.checked) { znak = rnd(1,10,100); pass[k] = other[znak]; k++; }
}
for (var i = 0; i < n; i++) {
    s = rnd(1,k-1,100);
    pswrd += pass[s];
}
document.pass_form.getback.value += pswrd + '\n';
}


//Когда нажимаем на кнопку выполняеться функция
function generate() {
if (pass_form.upper.checked||pass_form.lower.checked||pass_form.digit.checked) {
    //Если где-то стоит галочка выполняеться этот код
    document.pass_form.getback.value = '';
    for (i=1; i<=document.pass_form.passwords.value; i++) gen_pass();
}
//Иначе
else {
    //Выведет сообщение "Выберите тип символов!"
    alert('Выберите тип символов!');
    //Установит галочку
    pass_form.upper.checked = true;
}
}
