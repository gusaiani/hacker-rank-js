const {addToTree, deleteFromTree} = require('../addToTree')

const getTree = function() {
  return {
    id: 1,
    name: 'Entry 1',
    parent_id: null,
    children: [
      {
        id: 2,
        name: 'Entry 2',
        parent_id: 1,
        children: [],
      },
      {
        id: 3,
        name: 'Entry 3',
        parent_id: 1,
        children: [
          {
            id: 4,
            name: 'Entry 4',
            parent_id: 3,
            children: [],
          },
          {
            id: 5,
            name: 'Entry 5',
            parent_id: 3,
            children: [
              {
                id: 6,
                name: 'Entry 6',
                parent_id: 5,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  }
}

test('Add to id 5', () => {
  const tree = getTree()
  const newEntry = {name: 'Entry 7'}

  const newTree = {
    id: 1,
    name: 'Entry 1',
    parent_id: null,
    children: [
      {
        id: 2,
        name: 'Entry 2',
        parent_id: 1,
        children: [],
      },
      {
        id: 3,
        name: 'Entry 3',
        parent_id: 1,
        children: [
          {
            id: 4,
            name: 'Entry 4',
            parent_id: 3,
            children: [],
          },
          {
            id: 5,
            name: 'Entry 5',
            parent_id: 3,
            children: [
              {
                id: 6,
                name: 'Entry 6',
                parent_id: 5,
                children: [],
              },
              {
                id: 7,
                name: 'Entry 7',
                parent_id: 5,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  }

  expect(addToTree(tree, newEntry, 5)).toEqual(newTree)
})

test('Add to id 3', () => {
  const tree = getTree()
  const newEntry = {name: 'Entry 7'}

  const newTree = {
    id: 1,
    name: 'Entry 1',
    parent_id: null,
    children: [
      {
        id: 2,
        name: 'Entry 2',
        parent_id: 1,
        children: [],
      },
      {
        id: 3,
        name: 'Entry 3',
        parent_id: 1,
        children: [
          {
            id: 4,
            name: 'Entry 4',
            parent_id: 3,
            children: [],
          },
          {
            id: 5,
            name: 'Entry 5',
            parent_id: 3,
            children: [
              {
                id: 6,
                name: 'Entry 6',
                parent_id: 5,
                children: [],
              },
            ],
          },
          {
            id: 7,
            name: 'Entry 7',
            parent_id: 3,
            children: [],
          },
        ],
      },
    ],
  }

  expect(addToTree(tree, newEntry, 3)).toEqual(newTree)
})

test('Add to id 1', () => {
  const tree = getTree()
  const newEntry = {name: 'Entry 7'}

  const newTree = {
    id: 1,
    name: 'Entry 1',
    parent_id: null,
    children: [
      {
        id: 2,
        name: 'Entry 2',
        parent_id: 1,
        children: [],
      },
      {
        id: 3,
        name: 'Entry 3',
        parent_id: 1,
        children: [
          {
            id: 4,
            name: 'Entry 4',
            parent_id: 3,
            children: [],
          },
          {
            id: 5,
            name: 'Entry 5',
            parent_id: 3,
            children: [
              {
                id: 6,
                name: 'Entry 6',
                parent_id: 5,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 7,
        name: 'Entry 7',
        parent_id: 1,
        children: [],
      },
    ],
  }

  expect(addToTree(tree, newEntry, 1)).toEqual(newTree)
})

test('delete at id 5', () => {
  const tree = getTree()

  const newTree = {
    id: 1,
    name: 'Entry 1',
    parent_id: null,
    children: [
      {
        id: 2,
        name: 'Entry 2',
        parent_id: 1,
        children: [],
      },
      {
        id: 3,
        name: 'Entry 3',
        parent_id: 1,
        children: [
          {
            id: 4,
            name: 'Entry 4',
            parent_id: 3,
            children: [],
          },
        ],
      },
    ],
  }

  expect(deleteFromTree(tree, 5)).toEqual(newTree)
})

test('delete at id 3', () => {
  const tree = getTree()

  const newTree = {
    id: 1,
    name: 'Entry 1',
    parent_id: null,
    children: [
      {
        id: 2,
        name: 'Entry 2',
        parent_id: 1,
        children: [],
      },
    ],
  }

  expect(deleteFromTree(tree, 3)).toEqual(newTree)
})

test('delete at id 1', () => {
  const tree = getTree()

  expect(deleteFromTree(tree, 1)).toEqual(tree)
})
