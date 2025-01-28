import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

const initialState = [
    {
        id: new Date().getTime(),
        todo: "Explain Reducers",
        completed: false,
    },
];

const todoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "[TODOS] Add ToDo":
            return [...state, action.payload];
        case "[TODOS] Completed ToDo":
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });
        case "[TODOS] Delete ToDo":
            return state.filter((todo) => todo.id !== action.payload);
        case "[TODOS] Delete all ToDos":
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
        const action = {
            type: "[TODOS] Add ToDo",
            payload: todo,
        };
        dispatch(action);
    };

    const completedTodo = ({ id }) => {
        const action = {
            type: "[TODOS] Completed ToDo",
            payload: id,
        };
        dispatch(action);
    };

    const deleteTodo = ({ id }) => {
        const action = {
            type: "[TODOS] Delete ToDo",
            payload: id,
        };
        dispatch(action);
    };

    const resetTodos = () => {
        const action = {
            type: "[TODOS] Delete all ToDos",
            payload: "",
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
                <button
                    type="reset"
                    className="btn btn-danger"
                    onClick={() => resetTodos(todo)}
                >
                    Reset
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
                            <div>
                                <input
                                    type="checkbox"
                                    value={item.completed}
                                    onChange={() => completedTodo(item)}
                                />
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(item)}
                                >
                                    🗑️
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
