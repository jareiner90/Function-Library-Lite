function myEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
      const element = arr[i]
      callback(element)
    }
  }
  
  
  
  function myMap(array, callback) {
    returnedArray = []
    for (let i = 0; i < array.length; i++) {
      const element = array[i]
      returnedArray.push(callback(element))
      
    }
    console.log(returnedArray)
  }
  
  
  
  function myFilter(array, callback) {
    returnedArray = []
    for (let i = 0; i < array.length; i++) {
      const element = array[i]
      if (callback(element) === element) {
        returnedArray.push(callback(element))
      }
    }
    return returnedArray
  }
  
  
  function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i]
      if (callback(element) === element) {
        return element
      }
    }
  }
  
  test = [1,2,3,4]
  
  
  myFind(test, function timesThree(num){
    if (num % 2 === 0) {
      return num
    }
  })
  
  function myReduce(array, callback(accumulator,currentValue), aggregator = 0) {
    accumulator = 0
    for (let i = 0; i < array.length; i++) {
      const element = array[i]
      callback(accumulator,currentValue) += element
    }
  }
  