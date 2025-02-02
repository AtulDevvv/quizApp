# Quiz Game App

A modern quiz application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. Users can attempt quizzes, track their progress, and view their results at the end.

## [Live](https://quiz-app-one-rho-59.vercel.app/)

## 🚀 Features
- Fetch quiz questions from an API
- Display a progress bar for tracking progress
- Time tracking using a countdown timer
- Answer selection with validation
- Score calculation
- Responsive design with Tailwind CSS

## 🛠 Technologies Used
- **React** (Functional Components, Hooks)
- **Redux Toolkit** (State Management)
- **React Router** (Navigation)
- **Tailwind CSS** (Styling)

## 📌 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/AtulDevvv/quizApp
   cd quiz-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## 📡 Fetching Quiz Data
The app fetches quiz data from an external API. Update `fetchQuizData` in `QuizeDataSlice.js` to configure the API request.

Example API request:
```js
export const fetchQuizData = createAsyncThunk(
  'quizDatas/fetchQuizData',
  async () => {
    const response = await fetch('https://api.example.com/quiz');
    return await response.json();
  }
);
```

## 🖥 Project Structure
```
📂 src
 ┣ 📂 components
 ┃ ┣ 📜 QuizHeader.jsx
 ┃ ┣ 📜 ProgressBar.jsx
 ┃ ┣ 📜 QuestionCard.jsx
 ┃ ┣ 📜 NavigationButtons.jsx
 ┣ 📂 features
 ┃ ┣ 📂 QuizeData
 ┃ ┃ ┗ 📜 QuizeDataSlice.js
 ┃ ┣ 📂 resultPage
 ┃ ┃ ┗ 📜 ResultPage.jsx
 ┣ 📜 App.jsx
 ┣ 📜 main.jsx
```



## 🎯 Future Improvements
- Add difficulty levels
- Implement different question types (MCQs, true/false, etc.)
- Improve result page with analytics

## 📜 License
This project is licensed under the **MIT License**.

---

**💡 Need Help?** Feel free to create an issue or reach out!

