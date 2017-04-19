/**
 * 创建表单的适配器
 * Created by fuhuixiang on 2017-4-18.
 */
import {createForm} from 'rc-form';

export default function createFormDecorator(target, name, descriptor) {
    return createForm()(target)
}
