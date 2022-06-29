/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];
//fucnction call And Console
let ProductCount = getUniqueProductCount(listOfProducts);
console.log(ProductCount);
let uniquePrducts = getUniquePrducts(listOfProducts);
console.log(uniquePrducts);

//getUniqueProductCount  function Start
function getUniqueProductCount(listOfProducts){
		let obj = {};

 		listOfProducts.forEach(el => {
    	obj[el.productName] = (obj[el.productName] || 0) + 1;
})


	let display = JSON.stringify(obj);
	document.getElementById("UniqueProductCount").innerHTML = display;
	return obj;
}


 //getUniqueProductCount  function End
 
 
 //getUniquePrducts function Start
function getUniquePrducts(listOfProducts){

let productList = listOfProducts.reduce(function(acc, curr) {
  	let findIndex = acc.findIndex(item => item.productName === curr.productName);
  	if (findIndex === -1) {
    	acc.push(curr)
  	} else {

    	acc[findIndex].quantity += curr.quantity
  	}
  	return acc;
		}, [])


	let List = JSON.stringify(productList);
	document.getElementById("DisplayUniquePrducts").innerHTML = List
	return productList;
}

//getUniquePrducts function End
