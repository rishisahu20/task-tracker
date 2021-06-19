import { createSlice } from '@reduxjs/toolkit';

//slice file to handle actions and reducers
const taskDetailSlice = createSlice({
  name: 'taskSlices',
  initialState: {
    //initial state of tasks
    todo: [],
    inProgress: [],
    done: [],
  },
  reducers: {
    crudTaskFunction: (state, action) => {
      // function to add/edit/remove
      const { task, tasktype, index, fieldName, value, from, to } =
        action.payload;
      switch (task) {
        case 'add':
          state[tasktype].push({
            title: '',
            descp: '',
          });
          break;
        case 'edit':
          state[tasktype][index][fieldName] = value;
          break;
        case 'move':
          const moveTask = state[from][index];
          state[from].splice(index, 1);
          state[to].push(moveTask);
          break;
        case 'delete':
          state[tasktype].splice(index, 1);
          break;
        default:
        // code block
      }
    },
  },
});

export const { crudTaskFunction } = taskDetailSlice.actions;
export default taskDetailSlice.reducer;
