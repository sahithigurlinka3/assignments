/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var result=[]
  for(var i=0;i<transactions.length;i++)
  {
    const index=result.findIndex(result=> result.category==transactions[i].category)
    if(index!=-1)
    {
      result[index].totalSpent+=transactions[i].price;
    }
    else{
      ex={};
      ex.category=transactions[i].category;
      ex.totalSpent=transactions[i].price;
      result.push(ex);
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
