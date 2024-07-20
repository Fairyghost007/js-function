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





// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function maxMin (arr){
    let max = arr[0];
    let min = arr[0];
    for(let i in arr){
        if(arr[i]>max){
            max = arr[i];
        }else if(arr[i]<min){
            min = arr[i];
        }
    }
    return ("Min:"+min+"Max:"+max)
}





function arraySum(arr){
    let sum=0;
    for(let i in arr){
        sum+=arr[i];
    }
    return ("Somme:"+sum);
}



// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function factoriel(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
}


function premier(n){
    for(let i=2;i<n/2;i++){
        if(n%i==0){
            return "Non premier";
        }
    }
    return "Premier";
}


// commence par deux nombres fixes:0;1
// chaque nombre suivant est la somme des deux nombres précédents


function fibonaci(n){
    let arr=[0,1];
    for(let i=2;i<=n;i++){
        c=arr[i-1]+arr[i-2]
        arr.push(c)
    }
    return arr
}

fibonaci(3)
