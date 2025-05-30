import TaskForm from './TaskForm';
import Task from './Task';
import './ToDoList.css';
import {useEffect, useState } from 'react';

function ToDoList() {
const [tasks, setTasks] = useState([]);
useEffect(() => {
  if(tasks.length === 0) return;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
useEffect(() => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  setTasks(tasks);
}, []);

function updateTaskDone(taskIndex,newDone){
  setTasks(prev => {
    const newTasks = [...prev];
    newTasks[taskIndex] = { ...newTasks[taskIndex], done: newDone };
    return newTasks;
  });
}

function addTask(name) {
  setTasks(prev => {
    return [...prev, { name: name, done: false }];
  });
}

function removeTask(indexToRemove) {
  setTasks(prev => {
   return prev.filter((taskObject, index) => index !== indexToRemove);
   
  });

}

const numberComplete = tasks.filter(t => t.done).length;
const numberTotal = tasks.length;

function getMessage(){
  const percentage = numberComplete/numberTotal *100;

  if (percentage === 0){
    return 'Try to do at least one!'
  }

  if (percentage === 100){
    return 'You did it all! Congrats!'
  }
  return 'Try to do at least one!'
}

function renameTask(index, newName) {
  setTasks(prev => {
    const newTasks = [...prev];
    newTasks[index].name = newName;
    return newTasks;
  });
}

  return (
    <main>
      <h1>{numberComplete}/{numberTotal} Complete</h1>
      <h2>{getMessage()}</h2>
     <TaskForm  onAdd={addTask}/>
     {tasks.map((task, index) => (
      <Task {...task} 

      onRename={newName =>renameTask(index, newName)}
      onTrash={() => removeTask(index)}
      onToggle={done =>updateTaskDone(index,done)}/>
     ))}
     
    </main>
  );
}

export default ToDoList;
