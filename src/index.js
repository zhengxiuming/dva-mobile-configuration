import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';
import {Toast} from 'antd-mobile';
import {browserHistory} from 'dva/router';

// 1. Initialize
const app = dva({
  history:browserHistory,
  onError(e, dispatch){
    Toast.fail(e.message);
  }
});

// 2. Plugins
app.use(createLoading());

// 3.Model
app.model(require("./models/Home"));
app.model(require("./models/Login"));


// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
