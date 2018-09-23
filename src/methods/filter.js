// Function to filter data from an array of objects depending on the object key provided
const filter = (arr=[], key, value) => {
  return arr.filter(elm => elm[key] === value);
}

export default filter;