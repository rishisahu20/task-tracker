import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Input, TextArea, Button } from '../../components';
import { crudTaskFunction } from './dashboardSlice';
import './index.scss';

const Dasboard = () => {
  const tasks = useSelector((state) => state.taskDetailSlice); // get value from the store
  const dispatch = useDispatch(); // dispatch function to call crudTaskFunction

  //addTaskFunction
  const addTask = (tasktype) => {
    dispatch(crudTaskFunction({ tasktype, task: 'add' }));
  };
  //editTaskFunction
  const editTask = (tasktype, index, fieldName, value) => {
    dispatch(
      crudTaskFunction({ tasktype, task: 'edit', index, fieldName, value })
    );
  };
  //deleteTaskFunction
  const deleteTask = (tasktype, index) => {
    dispatch(crudTaskFunction({ tasktype, task: 'delete', index }));
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };
  //onDrop move task from one component to other
  const onDrop = (e, to) => {
    let data = e.dataTransfer.getData('id');
    data = data.split('-');
    const from = data[0];
    const index = data[1];
    dispatch(crudTaskFunction({ from, task: 'move', index, to }));
  };
  //onDrag start store the id and field name
  const onDragStart = (e, fieldName) => {
    e.dataTransfer.setData('id', fieldName);
  };

  const taskCard = (card, tasktype, index) => {
    //task card contains Card, Input (title) and TextAre(Description)
    return (
      <Card
        key={tasktype + '-' + index}
        cardKey={tasktype + '-' + index}
        draggable={true}
        deleteTask={() => deleteTask(tasktype, index)}
        onDragStart={(e) => onDragStart(e, tasktype + '-' + index)}
      >
        <Input
          value={card.title}
          onTitileChange={(e) => {
            editTask(tasktype, index, 'title', e.target.value);
          }}
        />
        <TextArea
          handleDescpChange={(e) => {
            editTask(tasktype, index, 'descp', e.target.value);
          }}
          value={card.descp}
        />
      </Card>
    );
  };

  return (
    <div className="container">
      <h2 className="dashboard__title">Task Tracker</h2>
      <div className="wrapper">
        <div //to-do container
          className="to__do__container box"
          onDrop={(e) => onDrop(e, 'todo')}
          onDragOver={(e) => onDragOver(e)}
        >
          <p className="container__title">To-do</p>
          {tasks.todo &&
            tasks.todo.map((card, index) => taskCard(card, 'todo', index))}
          <Button
            addCard={() => {
              addTask('todo');
            }}
          />
        </div>
        <div //progress container
          className="progress__container box"
          onDrop={(e) => onDrop(e, 'inProgress')}
          onDragOver={(e) => onDragOver(e)}
        >
          <p className="container__title">In Progress</p>
          {tasks.inProgress &&
            tasks.inProgress.map((card, index) =>
              taskCard(card, 'inProgress', index)
            )}
          <Button
            addCard={() => {
              addTask('inProgress');
            }}
          />
        </div>
        <div
          //done container
          className="done__container box"
          onDrop={(e) => onDrop(e, 'done')}
          onDragOver={(e) => onDragOver(e)}
        >
          <p className="container__title">Complete</p>
          {tasks.inProgress &&
            tasks.done.map((card, index) => taskCard(card, 'done', index))}
          <Button
            addCard={() => {
              addTask('done');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
