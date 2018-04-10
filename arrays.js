var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (x,y) => {
  return [y, ...x]
}

var destructivelyAddElementToBeginningOfArray = (x, y) => {
  x.unshift(y)
  return x
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

var destructivelyRemoveElementFromBeginningOfArray = (x) => {
  return x.shift()
}

var removeElementFromBeginningOfArray = (x) => {
  return x.slice(1)
}

var destructivelyRemoveElementFromEndOfArray = (x) => {
  x.pop()

}

var removeElementFromEndOfArray = (x) => {
  x.slice(0, x.length - 1)
}
