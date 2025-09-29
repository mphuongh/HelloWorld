# Hello World MERN Stack Application

A simple MERN stack application that displays "Hello World" with random visual effects. The frontend is built with React + Tailwind CSS, and the backend is a minimal Express.js server.

## Project Structure

```
HelloWorld/
├── frontend/          # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/
│   │   │   └── HelloWorld.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── vercel.json
│   └── .env.example
└── backend/           # Express.js server
    ├── server.js
    ├── package.json
    └── Procfile
```

## Features

- **Frontend**: React app with beautiful UI using Tailwind CSS
- **Backend**: Express.js server with one API route
- **Random Effects**: 8 different animations (bounce, shake, pulse, spin, fade, scale, flip, glow)
- **Responsive Design**: Mobile-friendly interface
- **Error Handling**: Graceful fallback if backend is unavailable

## Local Development

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   
   The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and set:
   ```
   VITE_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   
   The frontend will run on `http://localhost:5173`

## Deployment

### Deploy Backend to Render

1. **Create a Render Account**: Go to [render.com](https://render.com) and sign up

2. **Create a New Web Service**:
   - Connect your GitHub repository
   - Select the `backend` folder as the root directory
   - Set the following:
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Port**: `5000` (Render will set PORT environment variable automatically)

3. **Deploy**: Click "Create Web Service"

4. **Note the URL**: After deployment, copy the Render URL (e.g., `https://your-app.onrender.com`)

### Deploy Frontend to Vercel

1. **Create a Vercel Account**: Go to [vercel.com](https://vercel.com) and sign up

2. **Import Project**:
   - Click "New Project"
   - Import your GitHub repository
   - Set the root directory to `frontend`

3. **Configure Environment Variables**:
   - In Vercel dashboard, go to Settings > Environment Variables
   - Add: `VITE_API_URL` = `https://your-render-backend-url.onrender.com`

4. **Deploy**: Vercel will automatically build and deploy your app

5. **Update CORS** (Important):
   - After frontend deployment, update your backend `server.js`
   - Add your Vercel URL to CORS configuration:
   ```javascript
   app.use(cors({
     origin: ['https://your-vercel-app.vercel.app', 'http://localhost:5173']
   }));
   ```

## API Endpoints

### GET `/api/hello`
Returns a random "Hello World" effect configuration.

**Response:**
```json
{
  "success": true,
  "data": {
    "text": "Hello World",
    "effect": "bounce",
    "color": "text-blue-500"
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### GET `/health`
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Available Effects

- **bounce**: Bouncing animation
- **shake**: Left-right shaking
- **pulse**: Pulsing opacity
- **spin**: 360-degree rotation
- **fade**: Fade in effect
- **scale**: Scale up and down
- **flip**: 3D flip animation
- **glow**: Text shadow glow effect

## Technologies Used

### Frontend
- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Modern ES6+ JavaScript

### Backend
- Node.js
- Express.js
- CORS middleware

### Deployment
- **Frontend**: Vercel
- **Backend**: Render

## Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure your backend CORS configuration includes your frontend domain.

### Environment Variables
Make sure to set `VITE_API_URL` in your Vercel environment variables to point to your Render backend URL.

### Render Cold Starts
Free Render services may have cold starts. The first request might take longer to respond.

## License

This project is open source and available under the [MIT License](LICENSE).