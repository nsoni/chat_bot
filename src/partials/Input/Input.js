import React from "react"
import PropTypes from 'prop-types'
import "./style.scss"

export default function Input(props){
    const { classes } = props
    
    return (
        <div className = {classes.contClass}>
            <input 
                className = {classes.fieldClass}
                {...props}
            />
        </div>
            )
}

  Input.propTypes = {
    id                      : PropTypes.string.isRequired,
    name                    : PropTypes.string,
    value                   : PropTypes.string,
    placeholder             : PropTypes.string,
    type                    : PropTypes.oneOf(['email', 'text', 'number', 'tel', 'password']),
    onBlur   : PropTypes.func,
    onChange : PropTypes.func.isRequired,
    onKeyUp: PropTypes.func,
    classes : PropTypes.shape({
      contClass  : PropTypes.string,
      fieldClass : PropTypes.string,
    })
  }

  Input.defaultProps = {
    type                    : 'text',
    name                    : '',
    value                   : '',
    placeholder             : '',
    onChange : null,
    onBlur   : null,
    onKeyUp  : null,
    classes                 : {
      contClass  : '',
      fieldClass : ''
    }
  }