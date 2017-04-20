import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import styles from './index.styl';

class Loader extends PureComponent {
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

export default Loader;
