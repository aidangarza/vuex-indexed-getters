// ------------------------------------------------------------- | AMG
// Key By
// ------------------------------------------------------------- |
export const keyBy = (list, prop) => {
  return list.reduce((
    (typeof prop === 'function')
      ? doDynamicKeyBy(prop)
      : doKeyBy(prop)
  ), {})
}

const doKeyBy = (prop) => (map, item, i) => {
  map[item[prop]] = i
  return map
}

const doDynamicKeyBy = (prop) => (map, item, i) => {
  map[prop(item)] = i
  return map
}

// ------------------------------------------------------------- | AMG
// Group By
// ------------------------------------------------------------- |
export const groupBy = (list, prop) => {
  return list.reduce((
    (typeof prop === 'function')
      ? doDynamicGroupBy(prop)
      : doGroupBy(prop)
  ), {})
}

const doGroupBy = (prop) => (map, item, i) => {
  map[item[prop]] = map[item[prop]] || []
  map[item[prop]].push(i)
  return map
}

const doDynamicGroupBy = (prop) => (map, item, i) => {
  const key = prop(item)
  map[key] = map[key] || []
  map[key].push(i)
  return map
}

// ------------------------------------------------------------- | AMG
// Tags By
// ------------------------------------------------------------- |
export const tagBy = (list, prop) => {
  return list.reduce((
    (typeof prop === 'function')
      ? doDynamicTagBy(prop)
      : doTagBy(prop)
  ), {})
}

const doDynamicTagBy = (prop) => (map, item, i) => {
  let dedupe = {}
  const tags = prop(item)
  for (let t = 0; t < tags.length; t++) {
    if (!dedupe[tags[t]]) {
      map[tags[t]] = map[tags[t]] || []
      map[tags[t]].push(i)
      dedupe[tags[t]] = true
    }
  }
  return map
}

const doTagBy = (prop) => (map, item, i) => {
  let dedupe = {}
  const tags = item[prop]
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
