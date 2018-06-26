

import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';


import About from './about/index';

import 'antd/dist/antd.css';
import styles from './app.less';



class App extends React.Component {
    render () {
        return (
            <div>
                <div className={styles.app}>welcome!</div>
                <DatePicker />
                <About />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);