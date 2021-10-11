import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

const Button = (params) => {
    const {children, onClick, className, disabled, active, ...attrs} = params.params;

    const onClickAction = e => {
        if (disabled) {
            e.preventDefault();
        } else {
            return onClick(e);
        }
    };

    const classes = classNames(
        'btn',
        className,
        {active},
    );
    // attrs.type ? 'input' :

    const Tag = attrs.href ? 'a' : 'button';
    return(
        <Tag
            className={classes}
            disabled={disabled}
            onClick={onClickAction}
            {...attrs}
        >
            {children}
        </Tag>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false,
};

export default Button;
