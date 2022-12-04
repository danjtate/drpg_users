import PropTypes from 'prop-types'
import React from 'react';

const FormFields = props => {

    return (
        <div>
            <div className = 'label'>{props.label}</div>
            <div>
                <input className = 'formInput' id = {props.label} placeholder={props.detail}></input>  
            </div>
        </div>
    )
}

export default FormFields;
