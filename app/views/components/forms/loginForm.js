import React from "react";
import Formsy from "formsy-react";
import { InputField } from "../formElements";

const LoginForm = ( { onSubmit, serverError } ) => (
    <div>
        <div className="error">{ serverError }</div>
        <Formsy.Form onValidSubmit={ onSubmit }>
            <div>
                <label htmlFor="username">Username: </label>
                <InputField type="text" name="username" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <InputField type="password" name="password" />
            </div>

            <button type="submit">Submit</button>
        </Formsy.Form>
    </div>
);

const { func, string } = React.PropTypes;
LoginForm.propTypes = {
    onSubmit: func.isRequired,
    serverError: string.isRequired,
};

export default LoginForm;
