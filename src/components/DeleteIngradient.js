import React from "react";
import { connect } from "react-redux";
import {deleteIngredient} from "../actions";

let RemoveButton = ({value, dispatch}) => {
    return (
        <i
           onClick={() => {
               dispatch(deleteIngredient(value));
           }}>DELETE
        </i>
    )
};
RemoveButton = connect()(RemoveButton);
export default RemoveButton;