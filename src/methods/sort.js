// Function to sort data from an array of objects depending on the object key provided
const sort = (arr = [], key) => {
  if (key === 'hdd_capacity') {
    return arr.sort((a, b) => a[key] - b[key]);
  }
  return arr.sort((a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0);
}

export default sort;