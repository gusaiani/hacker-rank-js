const addToTree = require('../addToTree')

const tree = {
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

test('Add to id 5', () => {
  const originalTree = JSON.parse(JSON.stringify(tree))
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

  expect(addToTree(originalTree, newEntry, 5)).toEqual(newTree)
})

test('Add to id 3', () => {
  const originalTree = JSON.parse(JSON.stringify(tree))
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

  expect(addToTree(originalTree, newEntry, 3)).toEqual(newTree)
})

test('Add to id 1', () => {
  const originalTree = JSON.parse(JSON.stringify(tree))
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

  expect(addToTree(originalTree, newEntry, 1)).toEqual(newTree)
})
