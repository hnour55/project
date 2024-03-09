let number1 = document.getElementById('number_cl_stis') ;
let counter= 0 ;
setInterval(() => {
    if (counter == 1000 ) {
        clearInterval() ;
    }else{
        counter += 1;
        number1.innerHTML = `${counter}+`;
    }
}, 20);

let number2 = document.getElementById('number_genial_resultat') ;
let count= 0 ;
setInterval(() => {
    if (count == 950 ) {
        clearInterval() ;
    }else{
        count += 1;
        number2.innerHTML = `${count}+`;
    }
}, 20);

let number3 = document.getElementById('number_str_en_ligne') ;
let cnt= 0 ;
setInterval(() => {
    if (cnt == 500 ) {
        clearInterval() ;
    }else{
        cnt += 1;
        number3.innerHTML = `${cnt}+`;
    }
}, 20);