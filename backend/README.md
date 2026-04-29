# Backend — Item Manager API

Express + Mongoose REST API for the MERN Item Manager Lab Test.

## Setup
```bash
npm install
cp .env.example .env
# Edit .env with your MONGO_URI
npm run dev
```

## Environment Variables
```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/itemmanager
```

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/api/items` | List all items |
| GET | `/api/items/:id` | Get single item |
| POST | `/api/items` | Create item |
| PUT | `/api/items/:id` | Update item |
| DELETE | `/api/items/:id` | Delete item |

## Item Schema

| Field | Type | Required |
|---|---|---|
| name | String | ✅ |
| category | String | ✅ |
| price | Number (≥ 0) | ✅ |
| quantity | Number (≥ 0) | ✅ ← New field |
| description | String | ✅ |
| imageUrl | String | ❌ |
