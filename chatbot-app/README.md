# 🤖 Chinmayee AI – Personal Portfolio Assistant

An AI-powered portfolio website that enables visitors to explore my professional profile through an interactive chatbot. Instead of manually browsing different sections, users can ask questions in natural language to learn about my education, technical skills, projects, experience, resume, and contact information.

---

# 🎯 Who Is It For?

This project is designed for:

- Recruiters
- Hiring managers
- Internship reviewers
- Professors and mentors
- Developers interested in my work

The chatbot provides a faster and more engaging way to understand my portfolio compared to a traditional static website.

---

# 🚀 Features

- AI-powered portfolio assistant using Google Gemini
- Interactive conversational chatbot
- Suggested questions for first-time users
- Chat history with **Ask Again** functionality
- Resume viewer
- Featured project showcase
- Skills and experience information
- Contact page with GitHub and LinkedIn links
- Dark / Light theme
- Responsive design for desktop and mobile
- Knowledge-base driven responses

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- CSS
- Lucide React

## Backend

- Node.js
- Express.js
- Google Gemini API

## Deployment

- Vercel (Frontend)
- Render (Backend)

---

# 📂 Featured Projects

The chatbot can answer questions about:

- JobBridge
- TeleRAG-X
- Lost & Found Portal

along with my education, skills, certifications, and professional background.

---

# ⚙️ Installation

## 1. Clone the repositories

```bash
git clone https://github.com/chinmayeebl2007/Portfolio.git

git clone https://github.com/chinmayeebl2007/Portfolio-Backend.git
```

---

## 2. Install frontend dependencies

```bash
cd Portfolio

npm install
```

---

## 3. Install backend dependencies

```bash
cd Portfolio-Backend

npm install
```

---

## 4. Configure environment variables

Create a `.env` file inside the backend folder.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

## 5. Run the backend

```bash
npm run dev
```

---

## 6. Run the frontend

```bash
npm run dev
```

Open the application in your browser and start interacting with the chatbot.

---

# 💬 Usage Examples

Example questions users can ask:

- Tell me about yourself.
- What projects have you built?
- What technologies do you know?
- Show me your resume.
- How can I contact you?
- Tell me about JobBridge.
- What certifications do you have?

The chatbot responds with information from my portfolio and knowledge base.

---

# 🏗 Architecture

```
                User
                  │
                  ▼
        React Portfolio Website
                  │
          HTTP Request
                  │
                  ▼
        Express.js Backend API
                  │
                  ▼
      Google Gemini API
                  │
          AI Generated Response
                  │
                  ▼
      Response displayed in Chat
```

---

# 🧪 Evaluation Results (FL-08)

| Test Scenario | Result |
|---------------|--------|
| Portfolio questions | ✅ Passed |
| Project-related questions | ✅ Passed |
| Resume-related questions | ✅ Passed |
| Contact information | ✅ Passed |
| Suggested questions | ✅ Passed |
| Chat history | ✅ Passed |
| Ask Again feature | ✅ Passed |
| Responsive layout | ✅ Passed |

---

# ⚠️ Known Limitations

- Requires an internet connection.
- Depends on the availability of the Google Gemini API.
- Responses may occasionally be inaccurate for ambiguous questions.
- The chatbot does not remember conversations after the browser session ends.

---

# 🚀 Future Improvements

- Voice interaction
- Conversation memory across sessions
- Resume download directly through chat
- Multi-language support
- Better personalization based on user interactions

---

# 📸 Screenshots

_Add screenshots of the homepage, chatbot, history page, settings page, and contact page._

---

# 🎥 Demo Video

added the google drive link
https://drive.google.com/file/d/1EKLKM8Fd1NSXKrRJa_7Bjn2OJOqcqKEO/view?usp=sharing

---

# 🌐 Live Demo

Frontend

https://portfolio-g1r6-git-main-chinmayeebl.vercel.app/

Backend API

https://portfolio-backend-vxb8.onrender.com/

---

# 📂 GitHub Repositories

Frontend

https://github.com/chinmayeebl2007/Portfolio

Backend

https://github.com/chinmayeebl2007/Portfolio-Backend

---

# 👩‍💻 Author

**Chinmayee B L**

AI & Data Science Undergraduate

GitHub:
https://github.com/chinmayeebl2007

LinkedIn:
https://www.linkedin.com/in/chinmayee-b-l-2160b2366

---

# 📄 License

This project is intended for educational, learning, and portfolio purposes.