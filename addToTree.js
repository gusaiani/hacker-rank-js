function addToTree(tree, entry, id) {
  const {parentHashTable, idPath, childrenOrder} = parseTree(tree, id)
  const maxId = getMaxId(parentHashTable)
  completeNewEntry(entry, idPath, maxId)
  const evalCommand = buildEvalAddCommand(childrenOrder)
  eval(evalCommand)
  return tree
}

function deleteFromTree(tree, id) {
  const {childrenOrder} = parseTree(tree, id)

  // Don't delete the root
  if (!childrenOrder.length) return tree

  const evalCommand = buildEvalDeleteCommand(childrenOrder)
  eval(evalCommand)
  return tree
}

function parseTree(tree, id) {
  const parentHashTable = makeParentHashTable(tree)
  const idPath = buildIdPath(parentHashTable, id)
  const childrenOrder = buildChildrenOrder(tree, Array.from(idPath))
  return {parentHashTable, idPath, childrenOrder}
}

function completeNewEntry(entry, idPath, maxId) {
  entry.parent_id = idPath[idPath.length - 1]
  entry.children = []
  entry.id = maxId + 1
}

function buildEvalAddCommand(childrenOrder) {
  if (!childrenOrder.length) {
    return "tree['children'].push(entry)"
  }

  const joinedChildrenOrder = childrenOrder.join("]['children'][")
  return `tree['children'][${joinedChildrenOrder}]['children'].push(entry)`
}

function buildEvalDeleteCommand(childrenOrder) {
  if (childrenOrder.length === 1) {
    return `tree['children'].splice(${childrenOrder[0]}, 1)`
  } else {
    const indexToSplice = childrenOrder.pop()

    const joinedChildrenOrder = childrenOrder.join("]['children'][")
    return `tree['children'][${joinedChildrenOrder}]['children'].splice(${indexToSplice}, 1)`
  }
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

module.exports = {addToTree, deleteFromTree}
