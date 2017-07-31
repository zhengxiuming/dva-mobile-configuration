## 相关说明
这是一个基于dva 和ant-design-mobile的手机端配置项目
### 使用说明
```
* git clone git@github.com:zhengxiuming/dva-mobile-configuration.git
* cd dva-mobile-configuration

* npm install 
* npm start
```

### 知识点记录
#### 路由跳转
**跳转** :
  
    dispatch(routerRedux.push({
      pathname: '/path',
      query:{
        key:value
      }
    }));
**返回上一页**：
  
    dispatch(routerRedux.goBack());
**接受url传递的query**：

    loaction.query;
    



