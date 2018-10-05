// ------------------------------------------------------------- | AMG
// From Key
// ------------------------------------------------------------- |
/*
  When the 'key' type is used, the `map` should be an object where the keys
  are possible values of `prop` and the values are a single integers representing
  the index of an item in the `list` represented by the `prop`. The function
  returns the item at that index in the `list`.
*/
export const fromKey = (prop, map, list) => {
  return list[map[prop]]
}

// ------------------------------------------------------------- | AMG
// From Key
// ------------------------------------------------------------- |
/*
  When the 'list' type is used, the `map` should be an object where the keys
  are possible values of `prop` and the values are arrays of integers representing
  the indexes of items in the `list` represented by the `prop`. The function
  returns an array the items at those indexes in the `list`.
*/
export const fromList = (prop, map, list) => {
  return (map[prop] || []).map(index => list[index])
}

// ------------------------------------------------------------- | AMG
// Expandify
// ------------------------------------------------------------- |
export default (type, prop, map, list) => {
  switch (type) {
    case 'key': return fromKey(prop, map, list)
    case 'list': return fromList(prop, map, list)
    default: return list
  }
}
