/**
 * Created by zhengxiuming on 2017/7/31.
 */

import React,{Component} from 'react';
import {connect} from 'dva';
import styles from './app.css';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return{

  }
}
export default connect(mapStateToProps)(App);
