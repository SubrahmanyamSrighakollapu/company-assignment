# Brewex Website

This is a full-stack web application for Brewex Company that includes a marketing landing page and a simple CMS (Content Management System) to manage heading content using business-ready AI services.

---

## 🔧 Tech Stack

- **Frontend**: React, Bootstrap 5
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Deployment**: Render (for both frontend and backend)

---

## 📁 Folder Structure
abc-company-website/
├── client/ # React frontend
│ ├── public/
│ │ └── _redirects # SPA routing support on Render
│ ├── src/
│ │ ├── components/
│ │ └── pages/
│ └── .env # React env vars (not pushed to GitHub)
├── server/ # Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── .env # Backend env vars (not pushed to GitHub)


---

## 🚀 Deployment

### 🌐 Frontend (Render - Static Site)

1. Go to [Render.com](https://render.com) → Create new **Static Site**
2. Connect your GitHub repo
3. **Build Command**:  
client/ $ npm install && npm run build
4. **Publish Directory**:  
client/build
5. Add `_redirects` file inside `client/public` with this content:

/* /index.html 200
> ⚠️ Important: This allows React Router to handle client-side routing (e.g., `/cms`).

---

### 🖥️ Backend (Render - Web Service)

1. Create a new **Web Service**
2. Choose `server/` folder as root
3. Add environment variables:
- `MONGODB_URI=your_mongo_db_url`
- Any other keys needed (e.g., API base path)
4. Start command:
```bash
node server.js

# Clone the repo
git clone https://github.com/your-username/abc-company-website.git
cd abc-company-website

# Install backend dependencies
cd server
npm install

# Start backend server
npm run dev

# Open new terminal tab for frontend
cd ../client
npm install
npm start

🔐 Environment Variables
client/.env
REACT_APP_API_URL=https://your-backend-url.onrender.com/api

server/.env
MONGODB_URI=your-mongodb-url
PORT=5000
These .env files should not be pushed to GitHub. Add them to .gitignore.

🔗 Live Links
🌐 Frontend: https://company-assignment-1-8s0p.onrender.com

🔌 Backend: https://company-assignment-retw.onrender.com/api




