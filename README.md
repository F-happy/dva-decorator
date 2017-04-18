# dva-decorator

> 一些搭配 dva 框架使用的适配器

## 特点：
* 适配 ES7 中的适配器(decorator)
* 减少冗余的代码，让项目代码看起来更加直观整洁

### 安装：
```bash
$ npm install --save dva-decorator
```
接下来你就可以在项目中使用 dva-decorator 了。

例子：

```javascript
import React, {Component} from 'react';
import {connect} from 'dva-decorator';

// models => state: {modelTest: [1, 2, 3]}

@connect({test: 'modelTest'})
export default class Test extends Component {
    render(){
        console.log(this.props.test); // console: [1, 2, 3]:
        return <div>test</div>
    }
}
```
