import React from "react";
import Helmet from "react-helmet";
import Dictionary from "../../dictionary";

export default ( ) => (
    <div>
        <Helmet title={ Dictionary.home.title } />
        <h1>{ Dictionary.home.title }</h1>
        <p>{ Dictionary.home.explanation }</p>
    </div>
);
