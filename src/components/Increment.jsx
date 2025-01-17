import React from "react";

import PropTypes from "prop-types";

export const Increment = React.memo(({ increment }) => {
    console.log("Redrawing");
    return <button onClick={() => increment(100)}>+1</button>;
});

Increment.displayName = "Increment";

Increment.propTypes = {
    increment: PropTypes.func.isRequired,
};
