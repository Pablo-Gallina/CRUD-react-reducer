import React from 'react'
import PropTypes from 'prop-types'

const Button = ({btnStyle, textButton}) => {
    return <button type="button" className={`btn btn-${btnStyle}`}>{textButton}</button>
}

Button.propTypes = {
    btnStyle: PropTypes.string,
    textButton: PropTypes.string
}

export default Button
