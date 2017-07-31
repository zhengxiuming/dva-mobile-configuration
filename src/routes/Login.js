import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './Login.css';
import {Tabs, WhiteSpace, NavBar, Icon, List, InputItem, Button, WingBlank} from 'antd-mobile';
import {createForm} from 'rc-form';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  goLogin() {
    this.props.form.validateFields((error, value) => {
      console.log(value.account)
      const username = value.account;
      const password = value.password;
      const values = {username: username, password: password};
      this.props.dispatch({
        type: 'Login/fetch',
        payload: values
      })
    });
  }

  render() {
    const CHeight = document.body.clientHeight;
    const {getFieldProps} = this.props.form;
    return (
      <div className={styles.normal} style={{height: CHeight}}>
        <NavBar
          iconName='false'
        >店铺登录</NavBar>
        <div className={styles.content}>
          <List>
            <InputItem type="text" placeholder="用户名" {...getFieldProps('account', {initialValue: ''})}>
              <div style={{
                backgroundImage: 'url(https://passport.baidu.com/passApi/img/input_icons_24.png)',
                backgroundSize: 'cover',
                height: '0.44rem',
                width: '0.44rem',
                backgroundPosition: '0 -98px'
              }}/>
            </InputItem>
            <InputItem type="password" placeholder="密码" {...getFieldProps('password', {initialValue: ''})}>
              <div style={{
                backgroundImage: 'url(https://passport.baidu.com/passApi/img/input_icons_24.png)',
                backgroundSize: 'cover',
                height: '0.44rem',
                width: '0.44rem',
                backgroundPosition: '0 -171px'
              }}/>
            </InputItem>
          </List>
          <WhiteSpace size="lg"/>
          <WingBlank size="lg"><Button className="btn" type="primary" onClick={()=> {
            this.goLogin()
          }}>登录</Button></WingBlank>
        </div>
      </div>
    )
  }
}

Login = createForm()(Login);

function mapStateToProps(state) {
  // const {data} = state.Login;
  return {
    loading: state.loading.models.Login,
    // data
  };
}

export default connect(mapStateToProps)(Login);
