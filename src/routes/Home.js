import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import { List,Flex, WhiteSpace ,ActivityIndicator, WingBlank,NavBar, Icon} from 'antd-mobile';
import { routerRedux } from 'dva/router';
const Item = List.Item;
const Brief = Item.Brief;

function Home({props,cates,dispatch,loading,location}) {
  function orderManage() {
    dispatch(routerRedux.push({
      pathname: '/orderList',
      query:{
        page:12
      }
    }));
  }
  function orderInfo(){

  }
  function goLogin() {
    dispatch(routerRedux.push({
      pathname:'/Login'
    }))
  }
  if(loading){
    return (
      <WingBlank>
          <WhiteSpace size="md" />
          <ActivityIndicator
              text="加载中..." color="white" toast
          />
          <WhiteSpace size="md" />
      </WingBlank>
    )
  }
  return (
    <div className={styles.normal}>
      <NavBar
      iconName = 'false'
      rightContent={<div onClick={goLogin.bind()}>登录</div>}
      >联宠店铺</NavBar>
      <div className={styles.content}>
        <div className={styles.busTitle}><span>企业名称：</span><span>*******公司</span></div>
        <div className={styles.phone}><span>绑定手机：</span><span>13341067720</span></div>
        <div className={styles.area}><span>服务区域：</span><span>北京地区</span></div>
      </div>
      <List>
        <Item arrow="horizontal" multipleLine onClick={orderManage.bind()}>订单管理</Item>
      </List>
      <div className={styles.wordContent}>
        <Flex>
          <Flex.Item>
            <div style={{textAlign:'center'}} className={styles.wordStyle}>
              <div className={styles.num}>2</div>
              <div>待付款</div>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div style={{textAlign:'center'}} className={styles.wordStyle}>
              <div className={styles.num}>212</div>
              <div>待发货</div>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div style={{textAlign:'center'}} className={styles.wordStyle}>
              <div className={styles.num}>22</div>
              <div>待收货</div>
            </div>
          </Flex.Item>
        </Flex>
      </div>
      <List style={{marginTop:"0.4rem"}}>
        <Item arrow="horizontal" multipleLine onClick={orderInfo.bind()}>订单统计</Item>
      </List>
      <div className={styles.wordContent}>
        <Flex>
          <Flex.Item>
            <div style={{textAlign:'center'}} className={styles.wordStyle}>
              <div className={styles.num}>2</div>
              <div>今日订单数</div>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div style={{textAlign:'center'}} className={styles.wordStyle}>
              <div className={styles.num}>212</div>
              <div>今日订单额</div>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div style={{textAlign:'center'}} className={styles.wordStyle}>
              <div className={styles.num}>22</div>
              <div>下单医院数</div>
            </div>
          </Flex.Item>
        </Flex>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { cates } = state.Home;
  console.log("121212121",cates);
  return {
    loading: state.loading.models.Home,
    cates
  };
}
export default connect(mapStateToProps)(Home);
