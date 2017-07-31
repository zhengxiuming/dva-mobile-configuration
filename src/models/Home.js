import * as home from '../services/Home.js';
export default {
  namespace: 'Home',
  state: {
    cates:[]
  },
  reducers: {
    save(state,{payload:{data:cates}}){
      return {...state,cates}
    }
  },
  effects: {
    *fetch({payload:{}},{call,put}){
      const {data} = yield call(home.fetch);
      yield put({
        type:'save',
        payload:{data}
      })
    }
  },
  subscriptions: {
    setup({dispatch,history}){
      return history.listen(({pathname,query})=>{
        if(pathname==='/Home'){
          dispatch({type:'fetch',payload:query})
        }
      })
    }
  },
};
