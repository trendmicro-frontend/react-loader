import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Button } from './components/Buttons';
import Loader from '../src';
import styles from './index.styl';

class App extends React.Component {
    renderIntroduction () {
        return (
            <div>
                <p>Use a loader to indicate progress or an unindeterminate amount of time required for a process.</p>
                <ul>
                    <li>Loader size: Loaders can have different sizes (e.g. small, medium, or large), depending on your requirements.</li>
                    <li>Loader overlay: Sometimes, it can be useful to overlay the loader and temporarily block access to other functionalities on the UI.</li>
                </ul>
            </div>
        );
    }

    renderSizes () {
        return (
            <div className="container-fluid">
                <strong>Small</strong>
                <Loader size="small" />
                <strong>Medium (default)</strong>
                <Loader />
                <strong>Large</strong>
                <Loader size="large" />
            </div>
        );
    }

    renderButtons () {
        return (
            <div className="container-fluid">
                <strong>Loader with button</strong>
                <Button disabled>
                    <Loader size="small" />
                    Uploading
                </Button>
                <Button btnStyle="primary" disabled>
                    <Loader size="small" />
                    Uploading
                </Button>
            </div>
        );
    }

    renderTable () {
        return (
            <div
                className={classNames(
                    'container-fluid',
                    styles['table-container']
                )}
            >
                <strong>Loader overlay</strong>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
                <Loader className={styles['table-loader']} size="large" overlay={true} />
            </div>
        );
    }

    render () {
        return (
            <div
                className={classNames(
                    'container-fluid',
                    styles['example-container']
                )}
            >
                <h3>Loaders</h3>
                { this.renderIntroduction() }
                { this.renderSizes() }
                <h3>Example</h3>
                { this.renderButtons() }
                { this.renderTable() }
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
