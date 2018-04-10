var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (x,y) => {
  return [y, ...x]
}

var destructivelyAddElementToBeginningOfArray = (x, y) => {
  return x.push(y)
}
