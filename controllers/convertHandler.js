/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var regex = /[a-zA-Z]/
    var index = input.search(regex);
    var result
    
    if (index === -1){
      result = 'invalid number'
    } else if (index == ""){
      result = 1
    } else {
      result = input.split("").splice(0, index).join("")
    }

    result = eval(result).toFixed(5)
    return result;
  };
  
  this.getUnit = function(input) {
    var regex = /[a-zA-Z]/
    var index = input.search(regex);
    var result = input.split("").splice(index, input.length).join("")
    
    if (index === -1){
      result = 'invalid unit'
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    if (initUnit == 'gal'){
      result = initNum * galToL
      result = result.toFixed(5)
    } else if (initUnit == 'lbs'){
      result = initNum * lbsToKg
      result = result.toFixed(5)
    } else if (initUnit == 'mi'){
      result = initNum * miToKm
      result = result.toFixed(5)
    } else if (initUnit == 'L'){
      result = initNum / galToL
      result = result.toFixed(5)
    } else if (initUnit == 'Kg'){
      result = initNum / lbsToKg
      result = result.toFixed(5)
    }else if (initUnit == 'Km'){
      result = initNum / miToKm   
      result = result.toFixed(5)
    } else {
      result = 'invalid unit'
    }

    return result;
  };  
  
  this.getReturnUnit = function(initUnit) {
    var result;
    if (initUnit == 'gal'){
      result = 'L'
    } else if (initUnit == 'lbs'){
      result = 'Kg'
    } else if (initUnit == 'mi'){
      result = 'Km'
    } else if (initUnit == 'L'){
      result = 'gal'
    } else if (initUnit == 'Kg'){
      result = 'lbs'
    }else {
      result = 'mi'
    } 
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  

  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + initUnit + " converts to " + returnNum +  " " + returnUnit
    
    if (initNum == 'invalid number' && initUnit == 'invalid unit'){
      result = 'invalid number and unit'  
    } else if (initNum == 'invalid number'){
      result = 'invalid number'
    } else if (initUnit == 'invalid unit'){
      result = 'invalid unit'
    } else if (initUnit == 'invalid unit'){
      result = 'invalid unit'
    } 
    return result;
  };
  
}

module.exports = ConvertHandler;


