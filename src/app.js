

import React from 'react';
import ReactDOM from 'react-dom';


import styles from './app.less';



import About from './about/index';

import { DatePicker } from 'antd';

import 'antd/dist/antd.css';



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