function reverseString (str){
    return  str.split('').reverse().join('');
}




function countCaracter(str){
    let cpt =0;
    for(let i in str){
        cpt++;
    }
    return cpt;
}





function majFirstLettrer(str){
    let newStr=str.split(' ');
    for(let i in newStr){
        let word =newStr[i].split(''); 
        word[0] = word[0].toUpperCase();
        newStr[i] = word.join('');
    }
    return newStr.join(' ');
}





