# How to Create Database in MongoDB

## Method 1: Automatic (Recommended) ✅

**MongoDB creates databases automatically!** When your backend server connects and saves data, it will create the `wanderai` database automatically.

Just start your backend:
```bash
cd backend
npm run dev
```

When a user signs up or submits feedback, MongoDB will:
1. Create the `wanderai` database (if it doesn't exist)
2. Create the `users` collection (if it doesn't exist)
3. Create the `feedbacks` collection (if it doesn't exist)
4. Insert the data

**No manual creation needed!**

---

## Method 2: Manual Creation (Optional)

If you want to create it manually first:

### Step 1: Open MongoDB Shell
```bash
mongosh
```

### Step 2: Create/Use Database
```javascript
use wanderai
```

**Note:** This doesn't actually create the database yet. It just switches to it.

### Step 3: Create Collections (Optional)
```javascript
// Create users collection
db.createCollection("users")

// Create feedbacks collection
db.createCollection("feedbacks")
```

### Step 4: Verify Database Created
```javascript
// Show all databases
show dbs

// Show collections in current database
show collections

// Check if database exists
db.getName()
```

---

## Method 3: Create by Inserting Data

The easiest way - just insert a document:

```javascript
mongosh
use wanderai
db.users.insertOne({ name: "Test", email: "test@test.com" })
```

This will:
- Create the `wanderai` database
- Create the `users` collection
- Insert the document

---

## Verify Your Database

### Check if database exists:
```bash
mongosh
show dbs
```

You should see `wanderai` in the list.

### View collections:
```bash
mongosh
use wanderai
show collections
```

You should see:
- `users`
- `feedbacks`

### View data:
```bash
mongosh
use wanderai
db.users.find()
db.feedbacks.find()
```

---

## Quick Test

1. **Start backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Sign up a user** through your frontend

3. **Check MongoDB:**
   ```bash
   mongosh
   use wanderai
   db.users.find().pretty()
   ```

You'll see your user data! The database was created automatically.

---

## Summary

✅ **You don't need to create the database manually**
✅ MongoDB creates it automatically when data is inserted
✅ Your backend will handle everything
✅ Just start the server and use your app!

