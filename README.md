# Item Manager — MERN Stack Project

A full-stack **MERN** (MongoDB, Express, React, Node.js) inventory management application built for the WMT Lab Test.

## Features
- View all inventory items in a responsive card grid
- Add new items with name, category, price, quantity, description, and image
- Edit existing items
- Delete items with confirmation
- Stock badge indicator (In Stock / Out of Stock)

## Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, React Router v6, Axios |
| Backend | Node.js, Express 4 |
| Database | MongoDB (Mongoose ODM) |
| Styling | Vanilla CSS with Inter font |

## Project Structure
```
WMT_LabTest_Project/
├── backend/
│   ├── controllers/itemController.js   # CRUD logic
│   ├── models/Item.js                  # Mongoose schema (incl. quantity)
│   ├── routes/itemRoutes.js            # REST API routes
│   ├── server.js                       # Express app entry point
│   └── .env                           # Environment variables (not committed)
└── frontend/
    ├── src/
    │   ├── api/itemApi.js              # Axios API calls
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── ItemCard.jsx            # Displays item + stock badge
    │   │   └── ItemForm.jsx            # Add/Edit form (incl. quantity)
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   ├── AddItemPage.jsx
    │   │   └── EditItemPage.jsx
    │   └── styles.css
    └── index.html
```

## Item Data Model
| Field | Type | Required | Notes |
|---|---|---|---|
| `name` | String | ✅ | Item name |
| `category` | String | ✅ | e.g. Electronics, Clothing |
| `price` | Number | ✅ | Min 0 |
| `quantity` | Number | ✅ | **New field** — stock count, min 0 |
| `description` | String | ✅ | Item description |
| `imageUrl` | String | ❌ | Optional image URL |

## API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/items` | Get all items |
| GET | `/api/items/:id` | Get item by ID |
| POST | `/api/items` | Create new item |
| PUT | `/api/items/:id` | Update item |
| DELETE | `/api/items/:id` | Delete item |

## Setup & Run

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### Backend
```bash
cd backend
npm install
# Edit .env with your MONGO_URI
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

- Backend runs on: http://localhost:5000
- Frontend runs on: http://localhost:5173

## Environment Variables

Create `backend/.env`:
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/itemmanager?retryWrites=true&w=majority
```

## License
MIT
