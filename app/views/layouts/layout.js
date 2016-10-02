import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { NotificationCenter } from "../components";
import { logout } from "../../ducks/session";

const Layout = ( { showSpinner, isAuthenticated, children, onLogout } ) => {
    const spinner = showSpinner ? (
        <div className="overlay">
            <span className="spinner" />
        </div>
    ) : "";

    const userLink = isAuthenticated ?
        ( <span className="navlink" onClick={ onLogout }>Logout</span> ) :
        ( <Link className="navlink" to="/login">Login</Link> );

    return (
        <div>
            <div>
                <Link className="navlink" to="/">Home</Link>
                <Link className="navlink" to="/products">Products</Link>
                <Link className="navlink" to="/my-cart">My Cart</Link>
                { userLink }
            </div>
            <div>
                { spinner }
                { children }
            </div>
            <NotificationCenter />
        </div>
    );
};

const { bool, func, object } = React.PropTypes;
Layout.propTypes = {
    showSpinner: bool.isRequired,
    isAuthenticated: bool.isRequired,
    children: object,
    onLogout: func.isRequired,
};

const mapStateToProps = ( state ) => ( {
    showSpinner: state.busy > 0,
    isAuthenticated: state.session.isAuthenticated,
} );

const mapDispatchToProps = ( dispatch ) => ( {
    onLogout: ( ) => dispatch( logout ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( Layout );
