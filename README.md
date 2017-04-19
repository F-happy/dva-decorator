# dva-decorator
[![npm](https://img.shields.io/npm/v/dva-decorator.svg?style=flat-square)](https://www.npmjs.com/package/dva-decorator)
[![npm](https://img.shields.io/npm/l/dva-decorator.svg?style=flat-square)](https://www.npmjs.com/package/dva-decorator)

> 一些搭配 dva 框架使用的适配器

## 特点：
* 适配 ES7 中的适配器(decorator)
* 减少冗余的代码，让项目代码看起来更加直观整洁

## 安装：
```bash
$ npm install --save dva-decorator
```
接下来你就可以在项目中使用 dva-decorator 了。

## 例子：

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

```javascript
import React, {Component} from 'react';
import {connect} from 'dva-decorator';

// models => state: {modelTest: {test: [1, 2, 3]}}

@connect({test: 'modelTest.test'})
export default class Test extends Component {
    render(){
        console.log(this.props.test); // console: [1, 2, 3]:
        return <div>test</div>
    }
}
```

### 嵌套 form 表单

```javascript
import React, {Component} from 'react';
import {connect, createFormDecorator} from 'dva-decorator';

// models => state: {modelTest: {test: [1, 2, 3]}}

@createFormDecorator
@connect({test: 'modelTest.test'})
export default class Test extends Component {
    render(){
        console.log(this.props.test); // console: [1, 2, 3]:
        return <div>test</div>
    }
}
```

### 说明：
由于适配器(decorator)属于ES7规范中的特性，所以如果你准备在你的项目中使用的话需要先让 babel.js 去支持这个特性。
具体的话你可以通过引入[babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)来进行支持。好消息是现在这个[新特性](http://tc39.github.io/proposal-decorators/)已经从 stage-0 变成了 stage-2 的特性了。
