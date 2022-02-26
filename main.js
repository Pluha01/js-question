var defoult = 'Чему равно';
var question = 'Правильный ответ - ';
var answer = ' | ваш ответ - ';


console.log( 'Ваше имя - ' + prompt('Как вас зовут?')); 

console.log( 'Ваш возраст - ' + prompt('сколько вам лет?')); 

console.log(question + 12 + answer + prompt(defoult + ' 4 + 8 = ')); 

console.log(question + 24 + answer + prompt(defoult + ' 42 - 18 = ')); 

console.log(question + 210 + answer + prompt(defoult + ' 6 * 35 = ')); 

console.log(question + 18 + answer + prompt(defoult + ' 90 / 5 = ')); 

console.log(question + 10 + answer + prompt('посчитайте остаток' + ' 130 / 30 = ')); 

console.log(alert(' Спасибо за решение примеров, а теперь при помощи F12 откройте консоль браузера и удостоверьтесь в правильности ответов, если вы решали данный тест на телефоне то проверить себя к сожалению не получится, приносим свои извинения'));