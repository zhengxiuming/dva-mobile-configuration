import * as user from '../services/Login';
export default {
  namespace: 'Login',
  state: {

  },
  reducers: {
    save({payload:{data:data}}){
      return {...state,data}
    }
  },
  effects: {
    *fetch({ payload:values}, { call, put }){
      yield call(user.login,values);
      yield put({type:'save'})
    }
  },
  subscriptions: {

  },
};
