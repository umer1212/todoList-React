import React,{useState} from 'react';

const EditTodoForm = ({editTodo,task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) =>{
        e.preventDefault();
        editTodo(value, task.id);
        setValue('')
    }
  return (
    <form className='EditTodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' type='text' value={value}
        placeholder='Update Task' onChange={(text)=>{
            setValue(text.target.value);
        }} />
        <button type='submit' className='todo-btn'>
            Update Task 
            </button>
      
    </form>
  );
}

export default EditTodoForm;
