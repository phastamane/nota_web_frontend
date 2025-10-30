
  function filterRange(arr, a, b){

    return arr.filter((el) => el >= a || el <= b ? el : false)

  }

camelize("background-color")