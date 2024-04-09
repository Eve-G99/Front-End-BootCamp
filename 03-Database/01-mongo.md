# MongoDB Notes

## Starting MongoDB

- Use `brew services list` to check if MongoDB is running.
- Use `mongosh` to start the mongo shell.
- Syntax is JavaScript syntax.

## Basic Commands

- `show dbs` to show all databases.
- `use <db_name>` to switch to a database; if it doesn't exist, it will be created. However, this db won't appear in `show dbs` until at least one data is added.
- `db` to see the current database you're in.
- `show collections` to show all collections in the database.
- Collection is a group of data in database. Instead of put all data into a single database, we use several collections to store different entities or groups

## CRUD Operations

### Create/Insert

- `db.dogs.insert({name: "Kale", age: 3},{name:"Yomi", age:2})` to insert documents into the "dogs" collection.
- 该指令可加一可加多
- MongoDB automatically adds a `_id` primary key. 我们一般会在代码中用这个id进行标记和查找等操作。

### Read/Find

- `db.dogs.find()` or `db.dogs.find({})` to see all data in "dogs" collection.
- `db.dogs.find({age: 5})` to find all data with age of 5. return的是cursor，a reference to the result set.
- `db.dogs.findOne({age: 5})` to find the first data with age of 5. return的是object {}.

### Update

- `db.dogs.updateOne({name: "Kale"}, {$set: {age: 4}})` to update the first document with name "Kale" to age of 4.
- 如果$set的是原本数据中不存在的key，会自动往原document中加入这个key value pair
- `db.dogs.updateMany({age: 5}, {$set: {age: 10}})` to update **all data** with age of 5 to 10.
- 对多个property进行update:

  ```javascript
  db.dogs.updateOne(
      { isAdopted: false },
      { 
          $set: { isAdopted: true}, // Most commonly used
          $currentDate: { lastModified: true } // Time here is UTC
      }
  )

### Delete

- `db.dogs.deleteOne({name: "Kale"})` to delete the first data with the name "Kale".
- `db.dogs.deleteMany({age: 6, isAdopted: true})` to delete all data with age of 6 that are already adopted.
- `db.dogs.deleteMany({})` to delete **all data** in the "dogs" collection.

## Other Operators

- To search for a property within a nested document, use dot notation: `db.dogs.find({"owner.name": "Eve"})`.
- `$gt` for greater than => db.dogs.find({age: {$gt: 3}})
- `$lt` for less than, `$gte` for greater than **or** equal to.
- `$in` finds data in an array: `db.dogs.find({age: {$in: [1,3,5]}})`.
- `$or` finds data that meets one of multiple conditions: `db.dogs.find({$or: [{'age': {$lte:2}}, {'catFriendly': true}]})` to find dogs either aged 2 or less, or that are cat-friendly.
