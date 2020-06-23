//business logic
export const inputInvalid = function(number){
  if(!number || number < 1 || number > 3999){
    return true;
  }
}

export const reverseNumber = function(number){
  let result=[];
  while(number > 0){
    let remainder = number%10;
    result.push(remainder); //= result*10 + remainder;
    number = Math.floor(number/10);
  }
  return result;
}

export const convertOnes = function(number){
  if(number === 1){
    return "I";
  } else if(number === 2){
    return "II";
  } else if(number === 3){
    return "III";
  } else if(number === 4){
    return "IV";
  } else if(number === 5){
    return "V";
  } else if(number === 6){
    return "VI";
  } else if(number === 7){
    return "VII";
  } else if(number === 8){
    return "VIII";
  } else if(number === 9){
    return "IX";
  }
}

export const convertTens = function(number){
  if(number === 1){
    return "X";
  } else if(number === 2){
    return "XX"
  } else if(number === 3){
    return "XXX"
  } else if(number === 4){
    return "XL"
  } else if(number === 5){
    return "L"
  } else if(number === 6){
    return "LX"
  } else if(number === 7){
    return "LXX"
  } else if(number === 8){
    return "LXXX"
  } else if(number === 9){
    return "XC"
  }
}

export const convertHundreds = function(number){
  if(number === 1){
    return "C";
  } else if(number === 2){
    return "CC";
  } else if(number === 3){
    return "CCC";
  } else if(number === 4){
    return "CD";
  } else if(number === 5){
    return "D";
  } else if(number === 6){
    return "DC";
  } else if(number === 7){
    return "DCC";
  } else if(number === 8){
    return "DCCC";
  } else if(number === 9){
    return "CM";
  }
}

export const convertThousands = function(number){
  if(number === 1){
    return "M";
  } else if(number === 2){
    return "MM"
  } else if(number === 3){
    return "MMM"
  } 
}

export const convertNumbersToRoman = function(number){
  const arrayOfNumbers = reverseNumber(number); //[6, 0, 1]
  let arrayOfRoman =[];
  for(let index = 0; index < arrayOfNumbers.length; index++){
    if(arrayOfNumbers[index] !== 0){
      if(index === 0){
        arrayOfRoman.push(convertOnes(arrayOfNumbers[index]));
      }else if(index === 1){
        arrayOfRoman.push(convertTens(arrayOfNumbers[index]));
      }else if(index === 2){
        arrayOfRoman.push(convertHundreds(arrayOfNumbers[index]));
      }else if(index === 3){
        arrayOfRoman.push(convertThousands(arrayOfNumbers[index]));
      }
    }
  }
  return arrayOfRoman;
}

export const createRomanNumeralsString = function(romanArray){
  let answer = "";
  for (let index = romanArray.length-1; index >=0; index--){
    answer += romanArray[index];
  }
  return answer;
}