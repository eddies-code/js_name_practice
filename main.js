// You are going on a trip to Hawaii with 4 friends. Richard, Tim, Josh, Dom, and including yourself. 

// Start with an array ["richard", "eddy", "tim", "dom", "josh"]

// Q1. Create a function that accepts an array of names and  capitilizes each name
  // Output: ["Richard", "Eddy", "Tim", "Dom", "Josh"]

// Q2. Create a function that returns an array with the names that have more than 3 letters
  // Output: ["Richard, "Eddy", "Josh"]

// Q3. Create a function that takes in two arguments. One is the array and second is that name you're looking for. Return true if the name is in the array and return false if the name is not in the array.
  // BONUS POINT = If you can have the function return true regardless if the name is capitalized or not.
    // So if I pass into my function the second argument "Richard" then it should return true because the array has "richard", "EDDY" === "eddy", "TiM" === "tim"

// Q4. Create a function that adds our last names to our first names
  // Output: ["Richard Li", "Eddy Rosa", "Tim Torres", "Dom Vinas", "Josh Valette"]


  //first problem 
  const friends = ["richard", "eddy", "tim", "dom", "josh"];

  const capFirstName = (names) => {
     const newName = [];
    for (let i = 0; i < names.length; i++) {
        newName.push(names[i].charAt(0).toUpperCase() + names[i].slice(1));
    }
    return newName;
  }

  capFirstName(friends);

//second problem 
  const longNameFriends = (friend) => {
    const longNames = [];
    for(let i = 0; i < friend.length; i++) {
      longNames.push(friend[i])
        if(friend.length > 3) {
            return friend;
        };
    }
    return longNames
  }

  //third problem
  const findName = (arr, name) => {
    // name.toLowerCase()
    for (let i =0; i < arr.length; i++) {
      if (name === arr[i]) {
        return true
      }
    }
        return false
  }

  console.log(findName(friends, "eddy"))

  
//fourth problem 
const lastNames =(friend) => {
  const last = [];
  for (let i = 0; i < friend.length; i++) {
    last.push(friend[i][0])
  } 
}

  