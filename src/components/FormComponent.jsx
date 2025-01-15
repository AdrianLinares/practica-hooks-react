import { useForm } from "../hooks/useForm";

export const FormComponent = () => {
    const initialForm = {
        userName: "",
        email: "",
        password: "",
    };
    const { userName, email, password, formState, onInputChange } =
        useForm(initialForm);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="userName" className="form-label">
                    User Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="Username"
                    value={userName}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};
