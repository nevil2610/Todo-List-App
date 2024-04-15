const AddTodoAction = (todo) => (dispatch, getState) => {
    const{ 
        Todo:{ todos },
    } = getState();
    console.log(todo,todos,"hii")

    const hasTodo=todos.find((i) => i.todo === todo);

    if (!hasTodo && todo !== ''){
        dispatch({
            type: "ADD_TODO_SUCCESS",
            payload: [{ id: todo, todo }, ...todos],
        });
    }
};


const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const{ 
        Todo:{ todos },
    } = getState();

        dispatch({
            type: "REMOVE_TODO",
            payload: todos.filter((t) => t.id !== todo.id),
        });
};
export { AddTodoAction, RemoveTodoAction };