import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

const initialState = [
    {
        id: new Date().getTime,
        todo: "Explain Reducers",
        completed: false,
    },
];

const todoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "[TODOS] Add ToDo":
            return [...state, action.payload];
        case "[TODOS] Edit ToDo":
            console.log("edit");
            // return [...state, action.payload]
            break;
        case "[TODOS] Delete ToDo":
            console.log("delete");
            // return [...state, action.payload]
            break;
        case "[TODOS] Delete all ToDos":
            console.log("delete all");
            return [];
        default:
            return state;
    }
};

export const ToDoList = () => {
    const [todoState, dispatch] = useReducer(todoReducer, initialState);
    const { todo, formState, onInputChange } = useForm({ todo: "" });
    const addTodo = (event) => {
        event.preventDefault();
        if (formState.todo == "") return;
        const todo = {
            id: new Date().getTime(),
            todo: formState.todo,
            completed: false,
        };
        console.log(todo);
        const action = {
            type: "[TODOS] Add ToDo",
            payload: todo,
        };
        dispatch(action);
    };

    return (
        <>
            <form onSubmit={addTodo}>
                <div className="form-group">
                    <label htmlFor="todo">New ToDo</label>
                    <input
                        type="text"
                        className="form-control"
                        name="todo"
                        placeholder="Enter todo"
                        value={todo}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

            <hr />
            <ul className="list-group">
                {todoState.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className="list-group-item d-flex justify-content-between"
                        >
                            <span>{item.todo}</span>
                            <input type="checkbox" />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
