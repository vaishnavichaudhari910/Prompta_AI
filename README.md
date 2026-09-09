# 🚀 Prompta AI

An AI-powered full-stack SaaS web application that helps users generate content, create and edit images, and perform smart AI-based tasks — all from one dashboard, with a free tier and a premium subscription plan.
🌐 **Live Demo:** https://prompta-ai-eight.vercel.app/
---
<img width="1891" height="863" alt="image" src="https://github.com/user-attachments/assets/c893e71b-88c3-4f69-ad4d-afa807472c50" />

## 🌟 Features

### ✍️ AI Article Writer
Generate complete, well-structured articles on any topic from a simple text prompt. Users can choose the desired article length, and the AI (Google Gemini) writes the full content in seconds. Every generated article is saved to the user's creation history.
<img width="1892" height="862" alt="image" src="https://github.com/user-attachments/assets/af73e03d-2a47-40c5-8be8-7fb6e2829364" />

### 🖼️ Text-to-Image Generation
Turn a text description into a unique AI-generated image using the ClipDrop text-to-image API. Generated images are automatically uploaded and hosted on Cloudinary, and users can optionally publish them to the public Community feed.
<img width="1894" height="869" alt="image" src="https://github.com/user-attachments/assets/9302a45e-0037-4c5e-abdc-f3c53fb23a95" />
### 🧹 AI Background Removal
Upload any image and let AI automatically detect and remove the background — powered by Cloudinary's background-removal transformation. Great for product photos, profile pictures, and clean graphics.
<img width="1893" height="866" alt="image" src="https://github.com/user-attachments/assets/01adf5e4-1f82-4b73-a2bf-a98a84823c11" />
### 🪄 AI Object Removal
Upload an image, describe an unwanted object in it, and the AI intelligently erases that object from the picture using Cloudinary's generative-remove effect — no manual editing required.
<img width="1917" height="876" alt="image" src="https://github.com/user-attachments/assets/db75063a-2a6f-444f-8bb7-6ee8da07a596" />

### 📄 AI Resume Reviewer
Upload a resume in PDF format and receive instant, constructive AI feedback covering strengths, weaknesses, and specific areas for improvement — helpful for job seekers polishing their applications.
<img width="1917" height="868" alt="image" src="https://github.com/user-attachments/assets/d97a7bd1-5f17-437a-8432-e53bbdbcd02b" />

### 🌍 Community Feed
Browse a public gallery of AI-generated images shared by other users. Like or unlike any published creation, encouraging engagement and inspiration across the user base.
<img width="1900" height="867" alt="image" src="https://github.com/user-attachments/assets/192a6e4a-bfe9-4646-9de3-29d96cd5d281" />


### 📊 Personal Dashboard
A private dashboard showing a user's full creation history (articles, blog titles, images, resume reviews) along with their current plan status and usage stats.
<img width="1897" height="852" alt="image" src="https://github.com/user-attachments/assets/2d3426af-e173-4496-85ac-6f8da3bc3cc9" />

### 🔐 Secure Authentication & Account Management
Full sign-up/sign-in flow handled by Clerk, including session management — no custom auth code needed, keeping user credentials secure and the login experience polished.
<img width="1917" height="871" alt="image" src="https://github.com/user-attachments/assets/c46e58b7-9b10-469d-b45b-18f675710ea7" />

### 💳 Free & Premium Subscription Plans
- **Free Plan:** Limited to 10 total AI generations (articles, blog titles, etc.), tracked automatically per user.
- **Premium Plan:** Unlocks unlimited article/blog generation plus access to premium-only tools — image generation, background removal, object removal, and resume review.
- Plan status and usage counts are managed via Clerk's private user metadata and checked on every request through custom authorization middleware.

### ⚡ Fast, Responsive UI
A modern, mobile-friendly interface built with React and Tailwind CSS, enhanced with Framer Motion animations, toast notifications for real-time feedback, and Markdown rendering for AI-generated text.

---

## 🛠️ Tech Stack

### Frontend
- **React 19** + **Vite** — fast, modern SPA setup
- **Tailwind CSS** — utility-first styling
- **React Router v7** — client-side routing
- **Framer Motion** — animations and transitions
- **React Markdown** — renders AI-generated article/review content
- **React Hot Toast** — notification system
- **Lucide React** — icon library
- **Clerk React SDK** — authentication UI and session handling

### Backend
- **Node.js** + **Express 5** — REST API server
- **Clerk (Express SDK)** — auth middleware and user/plan management
- **Multer** — file upload handling (images, resumes)
- **pdf-parse** — extracts text from uploaded PDF resumes
- **Axios** — external API requests

### Database
- **PostgreSQL** via **Neon** (serverless Postgres) — stores all user creations (prompt, content, type, publish status, likes)

### AI & Media Services
- **OpenAI-compatible SDK → Google Gemini API** (`gemini-2.5-flash`) — text generation for articles, blog titles, and resume feedback
- **ClipDrop API** — text-to-image generation
- **Cloudinary** — image hosting, AI background removal, and AI object removal

### Deployment
- **Vercel** — separate deployment configs for client and server

---

## 📂 Project Structure

```
Prompta_AI/
├── client/                 # React frontend
│   └── src/
│       ├── components/     # Navbar, Sidebar, Hero, Testimonial, Plan, etc.
│       ├── pages/          # Dashboard, WriteArticle, GenerateImages,
│       │                   # RemoveBackground, RemoveObject, ReviewResume,
│       │                   # BlogTitles, Community, Home, Layout
│       └── assets/
├── server/                 # Express backend
│   ├── configs/            # db.js, cloudinary.js, multer.js
│   ├── controllers/        # aiController.js, userController.js
│   ├── middlewares/        # auth.js (plan & usage checks)
│   └── routes/             # aiRoutes.js, userRoutes.js
└── README.md
```

---

## 🔄 How It Works

1. User signs in via **Clerk** on the frontend.
2. Every API request carries the Clerk session token; the backend verifies it with `clerkMiddleware()` + `requireAuth()`.
3. A custom **auth middleware** checks the user's subscription plan and free-usage count before allowing access to a tool.
4. The relevant **controller** calls the appropriate AI/media service (Gemini, ClipDrop, or Cloudinary).
5. The result is saved to the **Neon Postgres** `creations` table and returned to the user, instantly viewable in their dashboard or the community feed.

---

## 👩‍💻 Author

**Vaishnavi Jagadish Chaudhari**
GitHub: [vaishnavichaudhari910](https://github.com/vaishnavichaudhari910)

---

## 📜 License

This project is licensed under the MIT License.

---

## 💡 Future Improvements

- Add more AI tools
- Improve UI/UX
- Add payment integration
- Multi-language support

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
