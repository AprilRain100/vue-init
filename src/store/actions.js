import { config } from '../utils/config'
import req from '../utils/ajax'

const actions = {
  async searchMoive ({state, commit}, params) { // ajax 请求方法例子
    let data = await req.get(
      config.search,
      params
    );
    commit('TESTDATA', data);
    return data;
  }
};
export default actions;
