# 📝 To Do List App

A modern and intuitive To Do List application built with React. Manage your daily tasks with a clean, user-friendly interface.

## ✨ Features

- **Task Management**
  - Add new tasks
  - Mark tasks as complete/incomplete
  - Edit task names by double-clicking
  - Delete tasks with the trash icon
  - Visual feedback for completed tasks

- **User Experience**
  - Clean, minimalist design
  - Responsive layout
  - Intuitive task interactions
  - Smooth animations and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/todolist.git
cd todolist
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 💡 How to Use

### Adding Tasks
- Type your task in the input field
- Press Enter to add the task

### Managing Tasks
- Click the checkbox to mark a task as complete
- Double-click a task to edit its name
- Click the trash icon to delete a task
- Completed tasks appear faded and cannot be edited

## 🛠️ Technical Details

### Components
- `App.js`: Main application component
- `Task.js`: Individual task component with edit functionality
- `Checkbox.js`: Reusable checkbox component

### Key Features
- State management using React hooks
- Event handling for user interactions
- Conditional rendering for edit mode
- Form handling for task editing

## 📁 Project Structure

```
src/
  ├── App.js          # Main application component
  ├── Task.js         # Task component with edit functionality
  ├── Checkbox.js     # Checkbox component
  ├── index.js        # Application entry point
  └── App.css         # Application styles
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with React.js
- Created using Create React App
