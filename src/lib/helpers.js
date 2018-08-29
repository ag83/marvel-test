export function addGetParameters(params) {
  if (typeof params == 'object') {
    const paramStr = Object.keys(params).reduce((str, key) => str + `&${encodeURI(key)}=${encodeURI(params[key])}`, '?');
    return paramStr;
  }
  return '';
}

export function helper() {
  //
}
