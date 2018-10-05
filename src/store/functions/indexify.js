// ------------------------------------------------------------- | AMG
// Key By
// ------------------------------------------------------------- |
/*
  When the 'key' type is used, the list is converted into an object
  with key value pairs where the key is `item[prop]` or `prop(item)`
  and the value is the index of `item` in the list. `prop` value of
  each item is expected to be a simple data type (string, number, boolean)
  and should be unique to each object in the list. Otherwise, only the
  last item in the list with that `prop` value will be indexed.
*/
export const keyBy = (list, prop) => {
  return list.reduce((
    (typeof prop === 'function')
      ? doDynamicKeyBy(prop)
      : doKeyBy(prop)
  ), {})
}

const doKeyBy = (prop) => (map, item, i) => innerKeyBy(map, item[prop], i)

const doDynamicKeyBy = (prop) => (map, item, i) => innerKeyBy(map, prop(item), i)

const innerKeyBy = (map, key, i) => {
  map[key] = i
  return map
}

// ------------------------------------------------------------- | AMG
// Group By
// ------------------------------------------------------------- |
/*
  When the 'group' type is used, the list is converted into an object
  with key value pairs where the key is `item[prop]` or `prop(item)` and
  the value is an array of indexes for each `item` in the list with that
  `prop` value. `prop` value of each item is expected to be a simple data
  type (string, number, boolean).
*/
export const groupBy = (list, prop) => {
  return list.reduce((
    (typeof prop === 'function')
      ? doDynamicGroupBy(prop)
      : doGroupBy(prop)
  ), {})
}

const doGroupBy = (prop) => (map, item, i) => innerGroupBy(map, item[prop], i)

const doDynamicGroupBy = (prop) => (map, item, i) => innerGroupBy(map, prop(item), i)

const innerGroupBy = (map, key, i) => {
  map[key] = map[key] || []
  map[key].push(i)
  return map
}

// ------------------------------------------------------------- | AMG
// Tag By
// ------------------------------------------------------------- |
/*
  When the 'tag' type is used, the list is converted into an object
  with key value pairs where the key is a value in an array found at
  `item[prop]` or `prop(item)` and the value is an array of indexes
  for each `item` in the list with that value in its `prop` value.
  `prop` value of each item is expected to be an array of simple data
  types (string, number, boolean).
*/
export const tagBy = (list, prop) => {
  return list.reduce((
    (typeof prop === 'function')
      ? doDynamicTagBy(prop)
      : doTagBy(prop)
  ), {})
}

const doTagBy = (prop) => (map, item, i) => innerTagBy(map, item[prop], i)

const doDynamicTagBy = (prop) => (map, item, i) => innerTagBy(map, prop(item), i)

const innerTagBy = (map, tags = [], i) => {
  let dedupe = {}
  for (let t = 0; t < tags.length; t++) {
    if (!dedupe[tags[t]]) {
      map[tags[t]] = map[tags[t]] || []
      map[tags[t]].push(i)
      dedupe[tags[t]] = true
    }
  }
  return map
}

// ------------------------------------------------------------- | AMG
// Indexify
// ------------------------------------------------------------- |
export default (type, list, prop) => {
  switch (type) {
    case 'key': return keyBy(list, prop)
    case 'group': return groupBy(list, prop)
    case 'tag': return tagBy(list, prop)
    default: return {}
  }
}
