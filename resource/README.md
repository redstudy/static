## 纯前端ui组件解决方案

   使用范围:适用于静态页(相对于php、java、js动态页，即前端切完之后不需要套前端或者后端模板的页面),页面也不需要复杂的数据交互的页面(即不需要前端采用mvvm或者mv*等框架来控制页面变化的网站)，
   即适合于静态博客，静态专题(即使有一点点表单提交或者ajax数据交互的页面)

   功能：ui组件化、严格的开发目录规范、以及预览、部署目录规范、开发环境全部虚拟化、流程全部脚本化、性能优化自动解决方案、统一的栅格布局、750布局、640布局、css模块化、js模块化、es6、typescript、aufoprefix、响应式布局

### 目录规范
    src为开发目录
    开发人员只需要维护src目录即可
    开发完成后执行build.sh会自动生成dist目录

> src

> > common

> > > static

> > > component

> > page

> > >project1

> > > > component

> > > > static

> > config

> build

> > config

> > static

> > > common

> > > project1

> > template

> > > project1

###开发步骤
    1.拖入vagrant同步目录
    2.在虚拟机里执行fedev.sh后开发
    3.只需要关注src即可，对src做版本管理
    4.开发人员只需要提交src代码即可（如果后台不能做到云端构建，本地构建提交也可）
