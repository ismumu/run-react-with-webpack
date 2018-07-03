

import React from 'react';
import { connect } from 'react-redux'

import { getInterfaceData } from './interfaceData.action';

import {
    Button,
    Table,
} from 'antd';

import styles from './interfaceData.less';



  
const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];



class GetInterfaceData extends React.Component {

    handleClick = () => {
        let { dispatch } = this.props;
        // dispatch(getInterfaceData())

        dispatch({
            type: 'RENDER_DATA',
            payload: {
                v: '1111',
            }
        })
    }

    render () {

        let { interfaceDataReducer } = this.props;

        return (
            <div className={styles.about}>
                <h1>Redux-saga获取异步数据Demo</h1>
                <Table dataSource={interfaceDataReducer.data} columns={columns} />
                <Button
                    onClick={this.handleClick}
                >点击获取数据</Button>
            </div>
        )
    }
}

export default connect(({ interfaceDataReducer }) => ({ interfaceDataReducer }) )(GetInterfaceData)