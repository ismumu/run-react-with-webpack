

import React from 'react';
import { connect } from 'react-redux'

import { changeTitle } from './case.action';

import { Button } from 'antd';

import styles from './case.less';

class Case extends React.Component {

    handleClick = () => {

        let { dispatch, caseReducer } = this.props;
        dispatch(changeTitle({
            titleText: caseReducer.titleText == '文章标题' ? '我是新的标题哦': '文章标题',
        }))
    }

    render () {
        return (
            <div className={styles.about}>
                <h1>{this.props.caseReducer.titleText}</h1>
                <Button
                    onClick={this.handleClick}
                >点击改变文案</Button>
            </div>
        )
    }
}

export default connect(({ caseReducer }) => ({ caseReducer }) )(Case)