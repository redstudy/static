/** 
 *author:wanghongxin
 *qq:2262118088
 *description:fast static framework
 */
fis

.config.set('project.watch.usePolling', true)
.set('project.files', ['/src/page/**/*.html','/mock/**/*','/test/**/*','/src/config/map.json'])
.set('project.ignore', [
  '/output/**',
  '/node_modules/**',
  '.git/**',
  '.svn/**',
  'Vagrantfile',
  '.vagrantfile/**',
  '*.sh',
  'fis-conf.js',
  'package.json',
  '.env',
  '.env.example',
  'artisan',
  'composer.json',
  'gulpfile.js',
  '.gitignore',
  '*.xml',
  '*.yml',
  '**/*.md',
  '**/*.css'
  //'/test/**',
])

//<模块化>

// .match('/common/static/(**).js', {
//   isMod: true,
//   umd2commonjs: true,
//   moduleId: '$1'
// })
.match('::package', {
  postpackager: fis.plugin('loader', {
      resourceType: 'commonJs',
      useInlineMap: true
  })
})
.hook('commonjs', {
//   wrap: '',
//   mode: 'commonJs',
//   baseUrl: '/common/static', 
//   paths: {
//       jquery:'/common/static/js/lib/jquery.js',
//       zepto:'/common/static/js/lib/zepto.js',
//       underscore:'/common/static/js/lib/underscore.js'
//   }, 
//   packages: [], 
//   forwardDeclaration: false,
//   skipBuiltinModules: false, 
//   shim: null, 
//   globalAsyncAsSync: false,
//   extList: ['.js', '.coffee', '.jsx','.ts','.es6'] 
})
// .match('/src/(**/*).js', {
// //   isMod: true,
// //   umd2commonjs: true,
// //   moduleId: '$1'
// })
// .match('/components/**.js', {
//   isMod: true,
// //   umd2commonjs: true,
// //   moduleId: '$1'
// })
//</模块化>

/**
 * <前端环境配置>
 */

.media('fedev')
.set('project.ignore',[
    '/test/**/*'
])

//<对异构语言的编译>
.match('/src/**/*.scss', {
    rExt: '.css',
    parser: fis.plugin('node-sass', {})
})
.match('/src/**/*.{ts,tsx}', {
  parser: fis.plugin('typescript'),
  rExt: '.js'
})
// .match('/src/common/component/**/*', {
//     // isMod: true
// })
// .match('/src/common/component/**/*.js', {
//     // postprocessor: fis.plugin('jswrapper', {
//     //     type: 'commonjs'
//     // })
// })
//</对异购语言的编译>



//<预览规范>
.match('/src/(config/**)', {
    release: '$1',
})
.match('/src/^_/', {
    release: false
})
.match('/src/page/(**)',{
    release:'/static/$1',
})
// .match('/src/page/(**/*.{js,ts,jsx,es6,coffee})',{
//     release:'/static/$1',
//     isMod:true,
//     moduleId:'$1',
//     extList: ['.js', '.coffee', '.jsx','ts','es6'],
// })
.match('/src/page/(*/component/**/*.{js,ts,jsx,est,coffee})', {
    // release:'/static/$1',
    isMod:true,
    moduleId:'$1',
    extList: ['.js', '.coffee', '.jsx','ts','es6'],
})
.match('/src/page/(*/static/js/*.{js,ts,jsx,est,coffee})', {
    // release:'/static/$1',
    isMod:true,
    moduleId:'$1',
    extList: ['.js', '.coffee', '.jsx','ts','es6'],
})
.match('/src/page/(**/*.html)', {
    release: '/view/$1',
})
.match('/src/page/*/component/**/*.{html,tpl,tmpl}', {
    release: false
})
.match('/src/common/static/(**)', {
    release: '/static/common/static/$1',
    isMod:true,
    moduleId:'$1',
    extList: ['.js', '.coffee', '.jsx','ts','es6'],
})
.match('/src/common/component/(**/*.{css,sass,scss,ts,jsx,js})', {
    release: '/static/common/component/$1',
    isMod:true,
    moduleId:'$1',
    extList: ['.js', '.coffee', '.jsx','ts','es6'],
})
.match('/src/common/component/**/*.{html,tpl,tmpl}', {
    release: false
})
.match('/test/**/*',{
    release:false,
})
.match('/src/page/**/*', {
      useSameNameRequire: true
})
.match('/src/common/component/**/*', {
      useSameNameRequire: true
})
.match('*', {
    deploy: [
        fis.plugin('skip-packed', {}),
        fis.plugin('local-deliver', {
            to: '/home/vagrant/.fis3-tmp/www'
        })
    ]
})
//</预览规范>
