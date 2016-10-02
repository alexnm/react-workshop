import React from "react";
import Formsy from "formsy-react";

const { string } = React.PropTypes;

const InputField = React.createClass( {
    propTypes: {
        type: string.isRequired,
    },

    mixins: [ Formsy.Mixin ],

    changeValue( event ) {
        this.setValue( event.currentTarget.value );
    },

    render() {
        const errorClass = this.showError( ) ? "error" : null;
        const className = this.showRequired( ) ? "required" : errorClass;
        const errorMessage = this.getErrorMessage( );

        return (
            <div className={ className }>
                <input type={ this.props.type } onChange={ this.changeValue } />
                <span>{ errorMessage }</span>
            </div>
        );
    },
} );

InputField.propTypes = {
    type: string.isRequired,
};

export default InputField;
