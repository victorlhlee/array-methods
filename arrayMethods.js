// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

//push your First and Last name into an empty array
//push() method adds new items to the end of an array and returns the new length
var nameArray = [];
nameArray.push("Sammy", "Jaxson");

//push all the missing numbers up to and including 10 to an already existing array

var genericNumberArray = [1, 2, 3, 4, 5];
genericNumberArray.push(6, 7, 8, 9, 10);

//The pop() method removes the last element of an array and returns that element
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var popResult = colors.pop();

//The reverse() method reverses the order of the elements in an array
var scrambledWords = ['win', 'the', 'for', 'burritos'];
scrambledWords.reverse();

var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
phoneNumber.reverse();

//The shift() method removes the first item of an array
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var nextOrder = orderQueue.shift();

//The sort() method sorts the items of an array
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
mixedNums.sort();

var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
mixedWords.sort();

//The splice() method adds/removes items to/from an arra and returns the removed items
//array.splice(index, howmany items to be removed, item1,....itemX)

//removing elements
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var notFruit = fruitCollection.splice(1, 3);

var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];

gemBox.splice(5,2);
gemBox.splice(6,4);

//inserting elements
var upToTen = [1, 2, 9, 10];
upToTen.splice(2, 0, 3, 4, 5, 6, 7, 8);


var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
brownOnly.splice(1, 5, 'brown', 'brown', 'brown');

//The unshift() method adds new items to the beginning of an array 
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var orderedValuesNewLength = orderedValues.unshift(1, 2, 3);

//The concat() method is used to join two or more strings

var randomThingsArray = genericNumberArray.concat(colors);
var newOrder = [{ takeOut: 'Gin' }, { takeOut: 'donuts'}];
var updatedOrders = orderQueue.concat(newOrder);

//The join() method joins the elements of an array into a string
var sentence = scrambledWords.join(' ');
var myFruits = fruitCollection.join(' + ');

//The slice() method returns the selected elements in an array
//array.slice(start, end)
var favoriteFriends = friends.slice(1,3);
var owesMoney = friends.slice(3,6);

//toString()method converts an array into a string
var monthNameString = monthNames.toString();

//The indexOf() method returns the position of the first occurence of a specified value in a string
//string.indexOf(searchValue, start)
var favoriteColor = colors.indexOf('Red');
var favoriteEvenNumber = mixedNums.indexOf(76);

//The lastIndexOf() method returns the position of the last occurence of a specified value in a string
//string.lastIndexOf(searchvalue, start)
var lastNine = bulkNumbers.lastIndexOf(9);
var lastFive = bulkNumbers.lastIndexOf(5);

// push() adds elements to the END of an array
/*var nameArray = [];
var addName = nameArray.push('first', 'last');

var genericNumberArray = [1, 2, 3, 4, 5];
var addNum = genericNumberArray.push(6, 7, 8, 9, 10);*/

//pop() removes the last element from the END of an array
/*var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var remove = colors.pop();
var popResult = 'Charlie';*/

//reverse() reverses an array in exact opposite order, no return value
/*var scrambledWords = ['win', 'the', 'for', 'burritos'];
var reverseOrder = scrambledWords.reverse();

var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var backwardNum = phoneNumber.reverse();*/

//shift removes the first element from the beginning of an array
/*var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var shiftOrder = orderQueue.shift();
var nextOrder = {takeOut: 'Ice Cream'};
*/
//sort sorts the contents of an array 
/*var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var sortNums = mixedNums.sort();
*/
/*var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var sortWords = mixedWords.sort();
*/
//splice changes the content of an array by removing existing elements and/or adding new elements
/*var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var onlyFruit = fruitCollection.splice(1, 3);
var notFruit = ['Scissors', 'Pug', 'Lady Bug'];

var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var gemOnly = gemBox.splice(5, 2);
var gemOnly = gemBox.splice(6, 4);

var upToTen = [1, 2, 9, 10];
var insertUpToTen = upToTen.splice(2, 0, 3, 4, 5, 6, 7, 8);

var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var theNewBrown = brownOnly.splice(1, 5, 'brown', 'brown', 'brown');
*/
//unshift adds one or more elements to the beginning of array
/*var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var theNewOrder = orderedValues.unshift(1, 2, 3);
var orderedValuesNewLength = orderedValues.length;*/

//concat takes a new array and merges it with the calling array
/*var randomThingsArray = genericNumberArray.concat(colors);

var addOrder = [{takeOut: "pizza"}, {takeOut: 'fries'}];
var updatedOrders = orderQueue.concat(addOrder);
*/
//join joins all elements of an array into a string
/*var sentence = scrambledWords.join(' ');
var myFruits = fruitCollection.join(' + ');
*/
//slice copy a range of elements from an array returns a new array with defined range of elements
/*var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var favoriteFriends = friends.slice(1, 3);
var owesMoney = friends.slice(3, 6);*/

//toString copy a range of elements from an array returns a new string with all element in array
/*var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var monthNameString = monthNames.toString();*/

//indexOf find the index of the element in an array
/*var favoriteColor = colors.indexOf('Red');
var favoriteEvenNumber = mixedNums.indexOf(76);
*/
//lastIndexOf returns a number of the index where element was found
/*var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];
var lastNine = bulkNumbers.lastIndexOf(9);
var lastFive = bulkNumbers.lastIndexOf(5);*/