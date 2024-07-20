function factoriel(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
}

//nombre premier:nombre qui a 2 diviseur 1 et lui mm

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
