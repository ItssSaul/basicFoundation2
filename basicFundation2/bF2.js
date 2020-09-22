//1
function biggeSize(arr){
    for( var i = 0; i < arr.length;i++){
        if( arr[i] > 0){
            arr[i] = "big"
        }
    }
    return arr;
}
//2 
function printLowReturnHigh (arr){
    var min = arr[0];
    var max = arr[0];
    for(var i = 1; i<arr.length;i++){
        if( arr[i] < min){
            min = arr[i];
        }
        if( arr[i] > max){
            max = arr[i];
        }
    }
    console.log(min);
    return max;
}
//3
function printOneReturnAntoher(arr){
    console.log(arr[arr.length-2])
    for(var i = 0; i < arr.length;i++){
        if( arr[i] % 2 ===1){
        return arr[i];
        }
    }
}
cosnole.log( printOneReturnAntoher() );
//4
function doublevison(arr){
    var newarr = [];
    for(var i = 0; i< arr.length;i++){
        newarr = arr[i]*arr[i];
        newarr.push(newarr);
    }
    return newarr;
}
//5 
function countPositives(arr){
    var sum = 0;
    for(var i = 0; i < arr.length;i++){
        if(arr[i] > 0){
            sum +=arr[i];
        }
    }
    arr.pop();
    arr.push(sum);
    return arr;
}
//6
function evensAndOdds(arr){
var oddCount = 0;
var evenCount = 0;
    for(var i = 0; i < arr.length;i++){
        if(arr[1]% 2 ===1){
            evenCount =0;
            oddCount++;
            if(oddCount ==3){
                console.log("that's odd1")
                oddCount = 0;
        }
    }
        else if(arr[i] % 2 ===0){
            oddCount =0;
            evenCount ++;
            if(evenCount ==3){
                console.log("even more so!");
                evenCount = 0;
            }
        }
    }
    return "done";
}
evensAndOdds(arr);
//7
function incrementSeconds(arr){
    for( var i =0; i<arr.length;i++){
        if(i % 2 ===1){
            arr[i] += 1;
        }
    }
    console.log(arr);
}
incrementSeconds(arr);
//8
function prevriouslengths(arr){
    for(var i = 2; i > 0;i--){
        arr[i] = arr[i-1].length;
        console.log(arr);
    }
    return arr;
}
//9
function add7(arr){
    var newarr = [];
    for(var i = 0; i < arr.length;i++){
        arr[i]+= 7;
        newarr.push(arr[i]);
    }
}
//10 
function reversearray(arr){
    var newarr = arr.reverse();
    console.log(newarr);
}
//11
function returnnegative(arr){
    var newarr = [];
    for( var i = 0; i < arr.length;i++){
        if(arr[i] > 0){
            arr[i] = -arr[i]
        }
    } 
}
//12
function alwaysHungry(arr){
    var count = 0;
    for( var i = 0; i < arr.length; i++){
        if ( are[i] == "food"){
            cosnole.log("yummy")
            count +=1
        }
    }
    if ( count ==0){
        console.log( "I'm Hungry!")
    }
    return "done!"
}
//13
function SwapToward(arr){
    if( arr.length < 2){
        console.log(arr);
    }
    for(var i = 0; i < arr.length  / 2; i +=2){
        var temp = arr[i] 
        arr[i] = arr[arr.length-1-i] 
        arr[arr.length-1-i] = temp
    }
    return arr;
}
//14
function multuplaying (arr, num){
    for( var i =0; i < arr.length; i++){
        arr[i] *= num
    }
    return arr;
}
