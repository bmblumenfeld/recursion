// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementList = [];
  var traverseDoc = function(node){
  	if (node.classList.contains(className)){
  	  elementList.push(node)
    } 
  	for (var i = 0; i < node.children.length; i ++){
  	  traverseDoc(node.children[i]);	
    }
  }
  traverseDoc(document.body);
  return elementList;
  
};


// I need to know how to make it work with node.ChildNodes