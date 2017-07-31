import React from 'react';
import { connect } from 'dva';
import styles from './OrderList.css';
import { Tabs, WhiteSpace ,NavBar,Icon} from 'antd-mobile';
import { routerRedux } from 'dva/router';
const TabPane = Tabs.TabPane;

function OrderList({dispatch,location,history}) {
  console.log(history,location.query);

  function callback(key) {
    console.log('onChange', key);
  }
  function handleTabClick(key) {
    console.log('onTabClick', key);
  }
  function onLeftClick() {
    // history.goBack();
    dispatch(routerRedux.goBack());
  }
  return (
    <div className={styles.normal}>
      <NavBar
      iconName = 'left'
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
      onLeftClick={onLeftClick.bind()}
      >订单管理</NavBar>
      <Tabs defaultActiveKey="1" onChange={callback.bind()} onTabClick={handleTabClick.bind()} swipeable={false}>
        <TabPane tab="待付款" key="1">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10rem', backgroundColor: '#fff' }}>
            待付款
          </div>
        </TabPane>
        <TabPane tab="待发货" key="2">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10rem', backgroundColor: '#fff' }}>
            待发货
          </div>
        </TabPane>
        <TabPane tab="待收货" key="3">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10rem', backgroundColor: '#fff' }}>
            待收货
          </div>
        </TabPane>
        <TabPane tab="已完成" key="4">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10rem', backgroundColor: '#fff' }}>
            已完成
          </div>
        </TabPane>
        <TabPane tab="退换货" key="5">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10rem', backgroundColor: '#fff' }}>
            退换货
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(OrderList);
