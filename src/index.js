
exports.min = function min (array) {
  if (typeof array === 'undefined' || array.length === 0) return 0;
  return array.reduce((res, value) => res < value ? res : value);
}

exports.max = function max (array) {
    if (typeof array === 'undefined' || array.length === 0) return 0;
    return array.reduce((res, value) => res > value ? res : value);
}

exports.avg = function avg (array) {
    if (typeof array === 'undefined' || array.length === 0) return 0;
    return array.reduce((res, value) => res + value) / array.length;
}
