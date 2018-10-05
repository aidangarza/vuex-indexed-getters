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

const doKeyBy = (prop) => (map, item, i) => ({
  ...map,
  [item[prop]]: i
})

const doDynamicKeyBy = (prop) => (map, item, i) => ({
  ...map,
  [prop(item)]: i
})

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

const doGroupBy = (prop) => (map, item, i) => ({
  ...map,
  [item[prop]]: [...(map[item[prop]] || []), i]
})

const doDynamicGroupBy = (prop) => (map, item, i) => {
  const key = prop(item)
  return {
    ...map,
    [key]: [...(map[key] || []), i]
  }
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

const doDynamicTagBy = (prop) => (map, item, i) => ({
  ...map,
  ...prop(item).reduce((tmap, tag) => ({
    ...tmap,
    [tag]: [...(map[tag] || []), i]
  }), {})
})

const doTagBy = (prop) => (map, item, i) => ({
  ...map,
  ...item[prop].reduce((tmap, tag) => ({
    ...tmap,
    [tag]: [...(map[tag] || []), i]
  }), {})
})

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
