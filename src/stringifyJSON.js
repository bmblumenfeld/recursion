// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'function'){
    return undefined;
  } else if (((typeof obj === 'number')||(typeof obj === 'boolean'))) {
      return obj + '';
    } else if(typeof obj === 'string'){
        return '"' + obj + '"'
      }else if(typeof obj === 'undefined'){
          return undefined;
        } else if (obj === null) {
            return null + '';
          } else if (Array.isArray(obj)) {
          	  if (obj.length === 0){
                  return ('['+']')	
              }
              var arrayStringy = obj.reduce(function(acc, element, index){
                acc.push(stringifyJSON(element));
                return acc;
              },[])
              return '[' + arrayStringy.join(',') + ']'
            } else {
            	if (obj.length === 0){
            	  return '{' + '}'	
            	} 
            	var values = Object.values(obj)
            	var hasFuncOrUnd = false
            	values.forEach(function (element){
                  if ((typeof element === 'function')||(typeof element === 'function')){
                    hasFuncOrUnd = true	
                  }
            	})
            	if (hasFuncOrUnd){
            	  return '{'+'}'	
            	}
                var keys = Object.keys(obj);
                var stringy = keys.reduce(function (acc,element,index){
                  if ((typeof obj[element] === 'function')||(typeof obj[element] === 'function')){

                  } else {
                      acc.push (stringifyJSON(element) + ':' + stringifyJSON(obj[element]));
                    }
                   return acc;
                },[]);
                return '{' + stringy.join(',') + '}';
              }
};


// var traverseArray = function(arr){
//  var stringy = arr.reduce(function (acc, element, index){
//    if (((typeof obj[key] === 'number')||(typeof obj[key] === 'boolean')||(typeof obj[key] === 'string'))) {
//       acc.push('"' + element + '"') 
//   	}
//   },[])
//   return '[' + stringy.join(',') + ']'
// }

// var stringy = keys.reduce(function (acc,element,index){
           
//             	if (((typeof obj[element] === 'number')||(typeof obj[element] === 'boolean')||(typeof obj[element] === 'string'))) {
//                 acc.push('"' + element + '"' + ':' + obj[element]) 
//             	} else if (Array.isArray(obj[element])){
//               //code if array maybe just loop through and create strings of each thing. orr maybe create a scenario that handles all data types in the array
//                 acc.push('"' + element + '"' + ':'  + traverseArray(element))
//                 } else if(typeof key === 'object'){
//                     //I think this will handle a box of an object
//                     acc.push(stringifyJSON (key));
//                   }	
//             },[]);
//             return '{' + stringy.join(',') + '}';
//           }
// ////////////
// var stringifyJSON = function(obj) {
//   var keys = Object.keys(obj);
//   var step = -1
//   step ++
//   var key = keys[step]
//   var value = obj[keys[step]]
// // base case
//   if (step === keys.length) {
//     return;	
//   } else if (((typeof obj[key] === 'number')||(typeof obj[key] === 'boolean')||(typeof obj[key] === 'string'))&& index !== keys.length) {
//       return '""' + key + '":"' + value + '","' + stringifyJSON
//   	}

// };

































