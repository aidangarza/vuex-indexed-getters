export const fromKey = (prop, map, list) => {
  return list[map[prop]]
}

export const fromList = (prop, map, list) => {
  return (map[prop] || []).map(index => list[index])
}

export default (type, prop, map, list) => {
  switch (type) {
    case 'key': return fromKey(prop, map, list)
    case 'list': return fromList(prop, map, list)
    default: return list
  }
}
