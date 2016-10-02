import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Dictionary from "../../dictionary";
import { Api } from "../../utilities";
import { login } from "../../ducks/session";
import { LoginForm } from "../components/forms";
import { Router } from "../helpers";

const { bool, string, func } = React.PropTypes;

const Login = React.createClass( {
    propTypes: {
        isAuthenticated: bool.isRequired,
        redirectAfterLogin: string,
        onSubmitLogin: func.isRequired,
        serverError: string.isRequired,
    },

    componentWillReceiveProps( nextProps ) {
        if ( !this.props.isAuthenticated && nextProps.isAuthenticated ) {
            Router.redirectTo( this.props.redirectAfterLogin || "/" );
        }
    },

    render( ) {
        return (
            <div>
                <Helmet title={ Dictionary.login.explanation } />
                <h1>{ Dictionary.login.title }</h1>

                <LoginForm onSubmit={ this.props.onSubmitLogin } serverError={ this.props.serverError } />
            </div>
        );
    },
} );

const mapStateToProps = ( state ) => ( {
    isAuthenticated: state.session.isAuthenticated,
    redirectAfterLogin: state.session.redirectUrl,
    serverError: state.serverError,
} );

const mapDispatchToProps = ( dispatch ) => ( {
    onSubmitLogin: ( model ) => {
        dispatch( Api.post( login )( null, model ) );
    },
} );

export default connect( mapStateToProps, mapDispatchToProps )( Login );
