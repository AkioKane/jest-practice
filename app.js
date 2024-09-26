function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1); // else "string[0].toUpperCase() + string.slice(1);"
}

function reverseString(string) {
  let result = "";

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return result;
}

class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

function caesarCipher(string, factor) {
  let alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 
    'o', 'p', 'q', 'r', 's', 't', 'u', 
    'v', 'w', 'x', 'y', 'z'];
  
  let alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
    'H', 'I', 'J', 'K', 'L', 'M', 'N', 
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
    'V', 'W', 'X', 'Y', 'Z'];

  const symbols = [
    '?', '.', ',', '!', ';', ':', 
    '-', '_', '+', '=', '@', '#', 
    '$', '%', '^', '&', '*', 
    '(', ')', '{', '}', '[', ']', 
    '<', '>', '/', '\\', '|', 
    '~', '`', '"', "'", " "
  ];
  
  let result = "";
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === symbols[symbols.indexOf(string[i])]) {
      result += string[i];
    } else if (string[i] === string.charAt(i).toUpperCase()) {
      if (alphabetUpper.indexOf(string[i]) + factor >= alphabetUpper.length) {
        let index =
          alphabetUpper.indexOf(string[i]) + factor - alphabetUpper.length;
        result += alphabetUpper[index];
      } else {
        result += alphabetUpper[alphabetUpper.indexOf(string[i]) + factor];
      }
    } else {
      if (alphabetLower.indexOf(string[i]) + factor >= alphabetLower.length) {
        let index =
          alphabetLower.indexOf(string[i]) + factor - alphabetLower.length;
        result += alphabetLower[index];
      } else {
        result += alphabetLower[alphabetLower.indexOf(string[i]) + factor];
      }
    }
  }
  
  return result;
}

function analyzeArray(array) {
  const result = {
    average: null,
    min: array[0],
    max: array[0],
    length: array.length,
  };

  for (let i = 0; i <= array.length; i++) {
    if (result.average === null) {
      result.average = array.reduce((acc, value) => acc + value) / array.length;
    }

    if (result.min > array[i]) {
      result.min = array[i];
    }

    if (result.max < array[i]) {
      result.max = array[i];
    }
  }

  return result;
}

export { capitalize, reverseString, caesarCipher, analyzeArray, Calculator };