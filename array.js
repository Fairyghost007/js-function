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