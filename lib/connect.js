/**
 * dva/connect 的适配器封装
 *
 * @connect({
 *     [需要注入的变量名称]: [state 中与之对应的变量名称]
 * })
 *
 * eg:
 *      @connect({test: 'modelTest'})
 *
 * models:
 *      state: {modelTest: [1, 2, 3]}
 *
 * class:
 *      this.props.test = [1, 2, 3]
 * Created by fuhuixiang on 2017-4-18.
 */
import {connect} from 'dva/mobile';

export default (obj) => {
    return (target, name, descriptor) => {
        return connect((state) => {
            const key = Object.keys(obj);
            let nextObj = {};
            for (let i = 0; i < key.length; i++) {
                let values = obj[key[i]].split('.');
                if (values.length !== 1) {
                    let states = state[values[0]];
                    values.forEach((v) => {
                        if (values[0] === v) {
                            return null;
                        } else {
                            states = states[v];
                            nextObj[key[i]] = states;
                        }
                    })
                } else {
                    nextObj[key[i]] = state[obj[key[i]]];
                }
            }
            return nextObj;
        })(target);
    }
}
