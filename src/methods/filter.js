const filter = (arr=[], key, value) => {
  return arr.filter(elm => elm[key] === value);
}

export default filter;