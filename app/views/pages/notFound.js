import React from "react";
import { Link } from "react-router";
import Helmet from "react-helmet";
import Dictionary from "../../dictionary";

export default ( ) => (
    <div>
        <Helmet title={ Dictionary.notFound.title } />
        <h1>{ Dictionary.notFound.title }</h1>
        <p>{ Dictionary.notFound.explanation }</p>
        <Link to="/">{ Dictionary.notFound.backHome }</Link>
    </div>
);
