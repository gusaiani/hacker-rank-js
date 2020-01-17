/*
 * Adds an entry to the tree, as a child of any branch.
 * Creates an empty array of children, as the add branch is new.
 * Links back to its parent element via parent_id.
 * New element's id is an increment of the maximum found id in the tree.
 *
 * This approach may be replaced by a tree data structure,
 * especially if requirements extend into reordering and other operations to the tree.
 */
function addToTree(tree, entry, id) {
  const {parentHashTable, childrenOrder} = parseTree(tree, id)

  completeNewEntry(entry, id, parentHashTable)

  const evalCommand = buildEvalAddCommand(childrenOrder)
  eval(evalCommand)

  return tree
}

/*
 * Deletes an element from a tree, along with its descendants, at any position.
 */
function deleteFromTree(tree, id) {
  const {childrenOrder} = parseTree(tree, id)

  // Don't delete the root
  if (!childrenOrder.length) return tree

  const evalCommand = buildEvalDeleteCommand(childrenOrder)
  eval(evalCommand)
  return tree
}

/*
 * This function will take a tree and return an object with:
 * 1. a hash table linking element ids and their parent ids (see makeParentHashTable)
 * 2. an array sequencing indexes of elements' children, from the root element to any desired branch (see childrenOrder)
 */
function parseTree(tree, id) {
  const parentHashTable = makeParentHashTable(tree)
  const idPath = buildIdPath(parentHashTable, id)
  const childrenOrder = buildChildrenOrder(tree, Array.from(idPath))
  return {parentHashTable, childrenOrder}
}

/*
 * Completes the entry with data retrieved from the tree and the desired parentId
 */
function completeNewEntry(entry, parentId, parentHashTable) {
  entry.parent_id = parentId
  entry.children = []
  entry.id = getMaxId(parentHashTable) + 1
}

/*
 * Builds an object where the keys are the ids of each tree entry,
 * and the values are their corresponding parent_ids.
 *
 * If we consider the initial, hard-coded team tree in our example,
 * this function will return
 *{ '1': null, '2': 1, '3': 1, '4': 3, '5': 3 }
 */
function makeParentHashTable(branch, hashTable = {}) {
  hashTable[branch.id] = branch.parent_id

  for (var child of branch.children) {
    makeParentHashTable(child, hashTable)
  }

  return hashTable
}

/*
 * Builds an array with the sequence of tree element ids
 * to get from the root of the tree into the branch we will add to or delete.
 * First element will be the root, second element its direct child, third element the latter's direct child and so on.
 *
 * It uses the parentHashTable. If we consider the initial, hard-coded tree in our example,
 * the passed hashTable will be
 * { '1': null, '2': 1, '3': 1, '4': 3, '5': 3 }
 *
 * If we want to find the branch with id 5, it will return
 * [1, 3, 5]
 */
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

/*
 * Returns the current maximum id in the team tree.
 *
 * It uses the parentHashTable. If we consider the initial, hard-coded tree in our example,
 * the passed hashTable will be
 * { '1': null, '2': 1, '3': 1, '4': 3, '5': 3 }
 * In this case, it will return 5.
 */
function getMaxId(hashTable) {
  const keys = Object.keys(hashTable)
  const integerKeys = keys.map(v => parseInt(v))
  return Math.max(...integerKeys)
}

/*
 * Builds an array with the sequence of indexes of children elements in a tree
 * to get from the root of the tree into the branch we will add to or delete.
 *
 * It uses the idPath. If we consider the initial, hard-coded tree in our example,
 * the passed idPath will be
 * [1, 3, 5]
 *
 * As we want to find the branch with id 5,
 * element with id 3 is the second child of element with id 1,
 * and element with id 5 is the second child of element with id 3.
 *
 * So it will return [1, 1]
 */
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

/*
 * As of now we're accessing arbitrary spots in the tree by joining from
 * the index order in the tree's children.
 * This can be replaced by something more idiomatic, especially as use cases expand.
 */
function buildEvalAddCommand(childrenOrder) {
  // In case we are adding a branch to the root
  if (!childrenOrder.length) {
    return "tree['children'].push(entry)"
  }

  const joinedChildrenOrder = childrenOrder.join("]['children'][")
  return `tree['children'][${joinedChildrenOrder}]['children'].push(entry)`
}

function buildEvalDeleteCommand(childrenOrder) {
  if (childrenOrder.length === 1) {
    // In case we are deleting immediate children of the root.
    return `tree['children'].splice(${childrenOrder[0]}, 1)`
  } else {
    // In case we are deleting branches deeper than
    // the immediate children of the root.
    const indexToSplice = childrenOrder.pop()

    const joinedChildrenOrder = childrenOrder.join("]['children'][")
    return `tree['children'][${joinedChildrenOrder}]['children'].splice(${indexToSplice}, 1)`
  }
}

module.exports = {addToTree, deleteFromTree}
