# Quick Start Guide

## Step 1: Make sure MongoDB is running
```bash
# Check if MongoDB is running
brew services list | grep mongodb

# If not running, start it:
brew services start mongodb-community
```

## Step 2: Create .env file
Create a `.env` file in the `server` folder with:
```
MONGODB_URI=mongodb://localhost:27017/Chatbot
JWT_SECRET=your_secret_key_change_this
PORT=5000
```

## Step 3: Install dependencies (if not already done)
```bash
cd server
npm install
```

## Step 4: Start the server
```bash
npm run dev
```

You should see:
```
✅ MongoDB Connected: localhost
🚀 Server running on port 5000
📡 API available at http://localhost:5000/api
```

## Step 5: Test the connection
Open browser and go to: http://localhost:5000/api/health

You should see: `{"status":"ok","message":"Server is running"}`

## Troubleshooting "Failed to fetch"

1. **Check if server is running**: Look for the server console output
2. **Check MongoDB**: Make sure MongoDB is running
3. **Check port**: Make sure nothing else is using port 5000
4. **Check .env file**: Make sure it exists in the server folder
5. **Check frontend port**: If your frontend runs on a different port, update CORS in server.js

