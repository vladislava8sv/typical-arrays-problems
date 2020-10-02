
exports.min = function min (array) {
  if (array==undefined|| array.length == 0) {
    return 0;
  }
  else {
  var arr_min = array[0];
  for (i = 1; i < array.length; i++) {
     if (array[i] <= arr_min) {
        arr_min = array[i];   
     }
  }
  return arr_min;
}
}

exports.max = function max (array) {
  if (array==undefined|| array.length == 0) {
    return 0;
  }
  var arr_max = array[0];
  for (i = 1; i < array.length; i++) {
     if (array[i] >= arr_max) {
        arr_max = array[i];   
     }
  }
  return arr_max;
}

exports.avg = function avg (array) {
  if (array==undefined|| array.length == 0) {
    return 0;
  }
  var arr_avg = array[0];
  for (i = 1; i < array.length; i++) {
        arr_avg += array[i];   
  }
  return arr_avg/array.length;
}
