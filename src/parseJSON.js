// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var jsonToPars = json;
  var a = 0;
  var c = jsonToPars[0] ;
  return dataType(); 
};

var nextCharacter = function() {
  a +=1;
  c = jsonToPars[a];
  return c;
}
var dataType = function(c) {
  if (c === '{') {
    return traverseObj();	
  } else if (c === '[') {
      return traverseArray();
    } else if (c.match(/-|[0-9]|\./) !== null) {
        return traverseNumber();
      } else if ((c === 't') || (c=== 'f') || (c === 'n')) {
          return traverseBool();
        } else if (c === '\"') {
          return traverseString();	
          } else { 
          	  return syntaxError('Nope. Not correct JSON grammer');
            }
}
var syntaxError = function (message) {
  throw new syntaxError(message);
} 
var traverseString = function() {
  var escapes = {
  'b': '\b',
  'n': '\n',
  't': '\t',
  'r': '\r',
  'f': '\f',
  '\"': '\"',
  '\\': '\\'    	
  } 
  var string = ''
  nextCharacter();
  while(c) {
  if (c === '\\') {
    nextCharacter();
    if(escapes.hasOwnProperty(c)){
      string += c;	
      nextCharacter();
    } else {
        sring += c;
        nextCharacter();
      }	
  } else if (c.match(/\s/) !== null){
      nextCharacter();
    } else if (c!= '\"') {
        string += c;
        nextCharacter();	
      } else if (c === '\"') {
          nextCharacter();
          return string;
        }
  }
}  

var traverseNumber = function() {
  var number = ''
  while (c.match(/-|[0-9]|\./) !== null) {
    if (c.match(/\s/)!== null){
      nextCharacter(); 
    } else {
        number += c;
        nextCharacter();	
       }
  }
    nextCharacter();
    return Number(number);
}

var traverseBool = function (){
  var bool = ''
  if (c === 'f') {
    for (var i = 0; i <= 4; i++){
      bool += c;
      nextCharacter();	
    }
  } else if (c === 't') {
  	  for (var i = 0; i <= 3; i++) {
        bool += c;
        nextCharacter();	
      }
    } else if (c === 'n') {
        for (var i = 0; i <= 3; i++) {
          bool += c;
          nextCharacter();	
        }
      }
  if ((bool !== 'false')||(bool !== 'true')(bool !== 'null')) {
    return syntaxError('revise value')	
  } else {
      return bool;
    }
}

var traverseArray = function() {
  var array = [];
  while (c) {
    if (c.match(/\s/) !== null) {
      nextCharacter();	
    } else if (c === ','){
        nextCharacter();
      } else if (c === ']') {
      	  nextCharacter();
          return array;
        } else {
          array.push(dataType())	
        }
  }
}

var traverseObj = function () {
  var obj = {}
  while (c) {
    if (c.match(/\s/) !== null) {
      nextCharacter();	
    } else if(c === '}'){
        nextCharacter();
        return obj;
      } else if(c === ':'){
        nextCharacter();
        var value = dataType() 	
      }
  var key = traverseString();
  object[key] = value;

  }

}

