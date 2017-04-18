import PropTypes from 'prop-types';
import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import styles from './index.styl';

export default class extends Component {
    static propTypes = {
        size: PropTypes.oneOf([
            'lg',
            'md',
            'sm',
            'large',
            'medium',
            'small'
        ]),
        overlay: PropTypes.bool
    };
    static defaultProps = {
        size: 'md',
        overlay: false
    };

    state = {
    };
    actions = {
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    render() {
        const {
            size,
            overlay,
            className,
            ...others
        } = this.props;
        return (
            <div
                className={classNames(
                    className,
                    styles['loader-container'],
                    { [styles['loader-overlay']]: overlay }
                )}
            >
                <span
                    {...others}
                    className={classNames(
                        styles.loader,
                        { [styles.large]: size === 'large' || size === 'lg' },
                        { [styles.medium]: size === 'medium' || size === 'md' },
                        { [styles.small]: size === 'small' || size === 'sm' }
                    )}
                />
            </div>
        );
    }
}
