import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types/task';

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [{
    id:"1",
    title:"Assignment",
    description:"Working on it",
    date:"2025-03-07T09:48:24.209Z",
    isCompleted:false
  }],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload);
      if (index !== -1) {
        state.tasks[index].isCompleted = !state.tasks[index].isCompleted;
      }
    },
    clearAllTask:(state)=>{
      state.tasks=[]

    }
  },
});

export const { addTask, updateTask, deleteTask,toggleTaskCompletion,clearAllTask } = taskSlice.actions;
export default taskSlice.reducer;