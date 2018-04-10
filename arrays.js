var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (x,y) => {
  [y, ...x]
}

var destructivelyAddElementToBeginningOfArray = (x, y) => {
  x.push(y)
}
