function addToTree(tree, entry, id) {
  const parentHashTable = makeParentHashTable(tree)
  const idPath = buildIdPath(parentHashTable, id)
  const maxId = getMaxId(parentHashTable)
  entry['parent_id'] = idPath[idPath.length - 1]
  entry['children'] = []
  entry['id'] = maxId + 1
  const childrenOrder = buildChildrenOrder(tree, idPath)
  // tree['children'][1]['children']['1']
  const evalCommand = buildEvalCommand(childrenOrder)
  eval(evalCommand)
  return tree
}

function buildEvalCommand(childrenOrder) {
  if (!childrenOrder.length) {
    return "tree['children'].push(entry)"
  }

  const joinedChildrenOrder = childrenOrder.join("]['children'][")
  return `tree['children'][${joinedChildrenOrder}]['children'].push(entry)`
}

function makeParentHashTable(branch, hashTable = {}) {
  hashTable[branch.id] = branch.parent_id

  for (var child of branch.children) {
    makeParentHashTable(child, hashTable)
  }
  return hashTable
}

function buildIdPath(hashTable, id) {
  let idPath = [id]
  let isParentIdNull = false

  while (!isParentIdNull) {
    if (hashTable[id] === null) {
      isParentIdNull = true
    } else {
      idPath.push(hashTable[id])
      id = hashTable[id]
    }
  }

  return idPath.reverse()
}

function getMaxId(hashTable) {
  const keys = Object.keys(hashTable)
  const integerKeys = keys.map(v => parseInt(v))
  return Math.max(...integerKeys)
}

function buildChildrenOrder(tree, idPath) {
  let order = []
  idPath.shift()
  let id = idPath.shift()
  let branches = tree.children
  // console.log({tree, branches, id, idPath})

  while (id) {
    for (let i = 0; i < branches.length; i++) {
      if (branches[i].id === id) {
        order.push(i)
        id = idPath.shift()
        branches = branches[i].children
        continue
      }
    }
  }

  return order
}

module.exports = addToTree
