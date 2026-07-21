# Project 2: Task Dashboard with Full-Stack API Integration

Welcome to **Project 2** of the DecodeLabs Full Stack Development training program! This project introduces you to building a complete full-stack application with a **Node.js/Express backend** and a **vanilla JavaScript frontend** communicating via RESTful API.

## 📋 Project Overview

**Project 2: Task Dashboard with Full-Stack API Integration** teaches developers how to create a modern web application that separates concerns between frontend and backend. You'll learn to build a RESTful API server and consume it from a frontend client application.

### Key Objectives
- ✅ Build a RESTful API backend using Express.js and Node.js
- ✅ Understand HTTP methods (GET, POST) and API responses
- ✅ Implement frontend-backend communication with fetch API
- ✅ Work with JSON data formats and validation
- ✅ Enable Cross-Origin Resource Sharing (CORS)
- ✅ Store and manage data with in-memory storage
- ✅ Handle asynchronous operations with async/await

---

## 🏗️ Project Structure

```
Project2/
├── index.html          # HTML frontend interface
├── style.css          # Frontend styling
├── script.js          # Frontend JavaScript (fetch API calls)
├── server.js          # Express backend server
├── package.json       # NPM dependencies and scripts
├── package-lock.json  # Dependency lock file
└── README.md          # This file
```

### File Details

#### Frontend Files

##### `index.html`
The main HTML interface containing:
- **Page Title**: "Task Dashboard"
- **Form Input**: Task title input field
- **Status Dropdown**: Select between "Pending", "In-Progress", "Completed"
- **Submit Button**: Trigger POST request to create new task
- **Items List**: Dynamic container for displaying fetched tasks (ul#itemList)

**Dependencies:**
- Linked to `style.css` for styling
- Loads `script.js` for frontend logic

##### `style.css`
Frontend styling including:
- **Body Layout**: Flexbox centered layout with light gray background
- **Container**: White card with shadow and rounded corners (max-width: 500px)
- **Form Elements**: Consistent padding and styling for inputs, selects, buttons
- **Button Styling**: Blue primary button (#007BFF) with hover effect
- **List Items**: Styled with left border, flex layout for title and status
- **Status Badge**: Small uppercase label with background styling

**Color Palette:**
- Primary: `#007BFF` (Blue)
- Background: `#f4f4f9` (Light Gray)
- Text: `#333` (Dark)
- Secondary: `#e2e8f0` (Light Blue-Gray)

##### `script.js`
Frontend JavaScript functionality:
- **API Configuration**: Base URL pointing to backend (http://localhost:5000/api/items)
- **Fetch Items**: GET request to retrieve all tasks from backend
- **Display Items**: Dynamically render task list with title and status
- **Form Submission**: Handle POST request to create new tasks
- **Error Handling**: Display server offline message on connection failure
- **Auto-Refresh**: Automatically reload task list after adding new item

#### Backend Files

##### `server.js`
Express.js backend server containing:
- **Express Setup**: Initialize Express app with middleware
- **CORS Configuration**: Enable cross-origin requests from frontend
- **Port Configuration**: Runs on port 5000 (configurable via environment variable)
- **In-Memory Storage**: Array of items for data persistence (in current session)
- **GET Endpoint**: `/api/items` - Retrieve all stored items
- **POST Endpoint**: `/api/items` - Create new items with validation
- **Input Validation**: Check for valid title (non-empty string)
- **JSON Responses**: Structured response with success flag and data

**API Response Format:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    { "id": 1, "title": "First Task", "status": "completed" },
    { "id": 2, "title": "Second Task", "status": "pending" }
  ]
}
```

##### `package.json`
NPM configuration file with:
- **Project Metadata**: Name, version, description
- **Main Entry**: Points to script.js
- **Scripts**: 
  - `npm start` - Starts the server (node server.js)
  - `npm test` - Test placeholder
- **Dependencies**:
  - `express@^5.2.1` - Web framework
  - `cors@^2.8.6` - CORS middleware

---

## 🎯 Key Features

### 1. **RESTful API Backend**
- Implements REST principles with proper HTTP methods
- GET endpoint for retrieving data
- POST endpoint for creating new resources
- Structured JSON responses with metadata
- Input validation on server side

### 2. **Frontend-Backend Communication**
- Fetch API for making HTTP requests
- Async/await syntax for handling asynchronous operations
- Error handling for network failures
- Real-time data synchronization between client and server

### 3. **CORS Support**
- Enables frontend running on port 3000+ to communicate with backend on port 5000
- Middleware automatically handles preflight requests

### 4. **Data Management**
- In-memory storage with auto-incrementing IDs
- Task status tracking (Pending, In-Progress, Completed)
- Persistent data during server session

### 5. **User Interface**
- Clean, centered dashboard design
- Form validation for task creation
- Status badges for visual task identification
- Responsive container layout

### 6. **Error Handling**
- Try-catch blocks on both frontend and backend
- Validation error messages
- Server offline detection
- User-friendly error display

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Terminal/Command line access

### Installation

#### 1. Navigate to Project2 Directory
```bash
cd Project2
```

#### 2. Install Dependencies
```bash
npm install
```
This installs Express.js and CORS from `package.json`

#### 3. Start Backend Server
```bash
npm start
```
Or directly:
```bash
node server.js
```

You should see:
```
Server is running on http://localhost:5000
```

#### 4. Open Frontend
In a new terminal window/tab, serve the frontend:

**Option A: Using Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option B: Using Node.js**
```bash
npx serve
```

**Option C: Direct Browser**
Simply open `index.html` directly in your browser (limited CORS support)

#### 5. Access Application
- Navigate to: `http://localhost:8000` (or your server URL)
- Backend API: `http://localhost:5000/api/items`

---

## 📡 API Documentation

### GET /api/items
**Description**: Retrieve all tasks from the server

**Request**:
```javascript
fetch('http://localhost:5000/api/items')
  .then(response => response.json())
  .then(data => console.log(data));
```

**Response** (200 OK):
```json
{
  "success": true,
  "count": 2,
  "data": [
    { "id": 1, "title": "First Task", "status": "completed" },
    { "id": 2, "title": "Second Task", "status": "pending" }
  ]
}
```

---

### POST /api/items
**Description**: Create a new task on the server

**Request**:
```javascript
fetch('http://localhost:5000/api/items', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: "Learn Express.js",
    status: "in-progress"
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

**Success Response** (201 Created):
```json
{
  "success": true,
  "message": "Item successfully created",
  "data": {
    "id": 3,
    "title": "Learn Express.js",
    "status": "in-progress"
  }
}
```

**Error Response** (400 Bad Request):
```json
{
  "success": false,
  "error": "Validation failed: A valid \"title\" field is required."
}
```

---

## 💡 Code Highlights

### Backend: Express Setup with CORS
```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable frontend to communicate with backend
app.use(express.json()); // Parse JSON request bodies

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
```

### Backend: GET Endpoint
```javascript
app.get('/api/items', (req, res) => {
  res.status(200).json({
    success: true,
    count: items.length,
    data: items
  });
});
```

### Backend: POST with Validation
```javascript
app.post('/api/items', (req, res) => {
  const { title, status } = req.body;
  
  // Validation: Ensure title is valid
  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({
      success: false,
      error: 'Validation failed: A valid "title" field is required.'
    });
  }
  
  // Create new item
  const newItem = {
    id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
    title: title.trim(),
    status: status || 'pending'
  };
  
  items.push(newItem);
  res.status(201).json({
    success: true,
    message: 'Item successfully created',
    data: newItem
  });
});
```

### Frontend: Fetch Items (GET Request)
```javascript
async function fetchItems() {
  try {
    const response = await fetch('http://localhost:5000/api/items');
    const result = await response.json();
    
    if (result.success && result.data.length > 0) {
      const itemList = document.getElementById('itemList');
      itemList.innerHTML = '';
      
      result.data.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${item.title}</span>
          <span class="status">${item.status}</span>
        `;
        itemList.appendChild(li);
      });
    }
  } catch (error) {
    console.error('Error fetching items:', error);
    document.getElementById('itemList').innerHTML = 
      '<li style="border-left-color: #e53e3e;">Server offline</li>';
  }
}
```

### Frontend: Create Item (POST Request)
```javascript
document.getElementById('itemForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const title = document.getElementById('titleInput').value;
  const status = document.getElementById('statusInput').value;
  
  try {
    const response = await fetch('http://localhost:5000/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, status })
    });
    
    const result = await response.json();
    
    if (result.success) {
      document.getElementById('titleInput').value = '';
      fetchItems(); // Refresh the list
    }
  } catch (error) {
    console.error('Error creating item:', error);
  }
});
```

---

## 🔄 Data Flow Diagram

```
Frontend (Port 8000)              Backend (Port 5000)
┌─────────────────┐              ┌──────────────────┐
│  index.html     │              │   server.js      │
│  script.js      │              │   (Express)      │
│  style.css      │              │                  │
└────────┬────────┘              └──────────────────┘
         │                               ▲
         │                               │
         │──── GET /api/items ──────────→│
         │                               │
         │←──── JSON Response ───────────│
         │                               │
         │──── POST /api/items ─────────→│
         │    (title, status)            │
         │                               │
         │←──── Created Item JSON ───────│
         │                               │
         │──── Render in DOM ────→│
```

---

## 🐛 Troubleshooting

### "Server offline or unreachable" Error
**Issue**: Frontend cannot connect to backend

**Solutions**:
1. Ensure backend is running: `npm start`
2. Check port 5000 is available and not blocked
3. Verify CORS is enabled in `server.js`
4. Check browser console for detailed error messages

### CORS Error in Browser Console
**Error**: "Access to XMLHttpRequest... has been blocked by CORS policy"

**Solution**: Ensure `cors()` middleware is added to `server.js`:
```javascript
const cors = require('cors');
app.use(cors());
```

### "Cannot find module 'express'" Error
**Issue**: Dependencies not installed

**Solution**:
```bash
npm install
```

### Port Already in Use
**Issue**: Port 5000 already occupied

**Solution**:
```bash
PORT=3001 npm start
# Then update API_URL in script.js to http://localhost:3001/api/items
```

---

## 📝 Customization Guide

### Change Backend Port
Edit `server.js`:
```javascript
const PORT = process.env.PORT || 3001; // Change from 5000 to 3001
```

### Update Frontend API URL
Edit `script.js` line 2:
```javascript
const API_URL = 'http://localhost:3001/api/items'; // Update port
```

### Add More Task Statuses
Edit form options in `index.html`:
```html
<select id="statusInput">
  <option value="pending">Pending</option>
  <option value="in-progress">In-Progress</option>
  <option value="completed">Completed</option>
  <option value="on-hold">On Hold</option>
  <option value="cancelled">Cancelled</option>
</select>
```

### Customize Colors
Edit `style.css`:
```css
button {
  background-color: #28a745; /* Change primary color */
}

li {
  border-left: 4px solid #28a745;
}
```

---

## 🎓 Learning Outcomes

By completing this project, you will understand:
- ✅ How to set up a Node.js/Express server
- ✅ Difference between frontend and backend
- ✅ RESTful API principles and structure
- ✅ HTTP methods (GET, POST) and status codes
- ✅ JSON data format and parsing
- ✅ Fetch API for client-server communication
- ✅ Async/await for handling asynchronous operations
- ✅ CORS and why it's necessary
- ✅ Input validation on the server side
- ✅ Error handling in both frontend and backend

---

## 🔐 Security Considerations

### Current Limitations
- **No authentication**: Any client can access the API
- **No database**: Data is lost on server restart
- **No rate limiting**: No protection against abuse
- **In-memory storage**: Limited to server uptime

### Future Enhancements
- [ ] Add JWT authentication
- [ ] Implement MongoDB/PostgreSQL database
- [ ] Add request rate limiting
- [ ] Validate and sanitize all inputs
- [ ] Add HTTPS/TLS support
- [ ] Implement role-based access control (RBAC)
- [ ] Add logging and monitoring
- [ ] Set up automated testing

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.2.1 | Web framework for Node.js |
| cors | ^2.8.6 | Enable cross-origin requests |

---

## 🔗 Resources & References

- [Express.js Documentation](https://expressjs.com/)
- [CORS Explained](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Fetch API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [RESTful API Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [Node.js Guide](https://nodejs.org/en/docs/)
- [JSON Format](https://www.json.org/json-en.html)

---

## 📋 Project Checklist

- [ ] Install Node.js and npm
- [ ] Navigate to Project2 directory
- [ ] Run `npm install` to install dependencies
- [ ] Start backend server with `npm start`
- [ ] Serve frontend files (Python/Node/Browser)
- [ ] Open frontend in browser on port 8000
- [ ] Test adding a new task through the form
- [ ] Verify task appears in the list
- [ ] Check backend server logs
- [ ] Test creating multiple tasks
- [ ] Refresh page and verify tasks persist
- [ ] Test with server offline to see error handling

---

## 📞 Support

For questions or issues with this project:
- Review the troubleshooting section above
- Check the browser console for detailed error messages
- Verify both frontend and backend are running
- Ensure correct port numbers are configured

---

## 👨‍💻 Author

**DecodeLabs Industrial Training Kit - Batch 2026**

Full Stack Development Foundation Course

---

**Happy Coding! 🚀**
