export default {
  "articles": [
    {
      "id": 1,
      "title": "Hello world",
      "body": "The content of the article",
      "author": 1
    },
    {
      "id": 2,
      "title": "Hello there",
      "body": "The content of the second article",
      "author": 2
    },
    {
      "id": 3,
      "title": "Howdy",
      "body": "The content of the third article",
      "author": 2
    },
    // {
    //   "id": 3,
    //   "title": "Howdy",
    //   "body": "The content of the third article"
    // }
  ],
  "users": [
    {
      "id": 1,
      "name": "Kristijan",
      "email": "becky@gmail.com",
      "articleIds": [1],
    },
    {
      "id": 2,
      "name": "Becky",
      "email": "becky@gmail.com",
      "articleIds": [2, 3],
    },
    {
      "id": "3",
      "name": "Andrea",
      "email": "andrea@gmail.com",
      "articleIds": [],
    }
  ]
}
