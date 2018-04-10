var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (x,y) => {
  return [y, ...x]
}

var destructivelyAddElementToBeginningOfArray = (x, y) => {
  return x.unshift(y)
}

var addElementToEndOfArray = (x, y) => {
  return [...x, y]
}

var destructivelyAddElementToEndOfArray = (x, y) => {
  return x.push(y)
}

var accessElementInArray = (x, y) => {
  return x[y]
}

var destructivelyRemoveElementFromBeginningOfArray = x => {
  return x.shift()
}

var removeElementFromBeginningOfArray = x => {
  return x.slice(1)
}
