/** 
 *author:wanghongxin
 *qq:2262118088
 *description:fast static framework
 */
fis

.config.set('project.watch.usePolling', true)
.set('project.files', ['/src/page/**/*.html','/mock/**/*','/test/**/*'])
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
  //'/test/**',
])

/**
 * <前端环境配置>
 */

.media('fedev')
.match('::package', {
  postpackager: fis.plugin('loader', {})
})
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
.match('/src/common/component/**/*', {
    isMod: true
})
.match('/src/common/component/**/*.js', {
    postprocessor: fis.plugin('jswrapper', {
        type: 'commonjs'
    })
})
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
.match('/src/page/(**/*.html)', {
    release: '/view/$1',
})
.match('/src/page/*/component/**/*.{html,tpl,tmpl}', {
    release: false
})
.match('/src/common/static/(**)', {
    release: '/static/common/static/$1',
})
.match('/src/common/component/(**/*.{css,sass,scss,ts,jsx,js})', {
    release: '/static/common/component/$1'
})
.match('/src/common/component/**/*.{html,tpl,tmpl}', {
    release: false
})
.match('/test/**/*',{
    release:false,
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