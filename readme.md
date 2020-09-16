# npm init -y
# npm install webpack webpack-cli -D

执行webpack 报错：One CLI for webpack must be installed
原因：只在局部安装了webpack-cli
所以应该执行npx webpack

# npx webpack
报错：WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
原因：没有设置打包参数

# 新建webpack配置文件

报错：ERROR in Entry module not found: Error: Can't resolve './src' in 'D:\my_blog\my_react'
没有配置入口文件

webpack4中无需配置
默认入口文件为src/index.js

将src/main.js 改名为index.js


打包成功，在dist/下 多出了一个main.js

# index.html中引入../dist/main.js

打开页面：控制台输出hellow webpack

# 修改main.js中的代码，页面输出没变化，因为需要重新打包

# 配置实时打包工具

# npm install webpack-dev-server -D

# 修改package.json

# npm run server

Project is running at http://localhost:8080/
代码已经运行在本机的8080端口

打开链接，显示的是项目根目录

实际上，webpack-dev-server会在项目根目录下打包一个main.js，只不过是托管在内存中，并没有写到物理磁盘中去

# 修改webpack-dev-server配置: --open 自动打开浏览器 --port 端口 --host 域名

# 根据内存中的main.js在根目录下内存中生成index.html，这样打开域名就可以直接访问到打包好的index.html了

# npm i html-webpack-plugin -D

# 在webpack.config.js中添加插件配置

# html-webpack-plugin插件会自动把打包好的main.js引入到生成的index.html中，所以修改src/index.html

# 安装babel

# npm install -D babel-loader  (^8.1.0)

8.x版本的babel-loader需要安装7.x版本的babel-core

# npm install @babel/core -D   (^7.11.6)

# npm install @babel/preset-env -D

# npm install @babel/runtime -D

# npm install @babel/plugin-transform-runtime -D

# npm install @babel/plugin-proposal-class-properties -D

# npm install @babel/preset-react -D

# 在webpack.config.js中添加匹配规则

# 项目根目录下新建babel配置文件：.babelrc

# 安装react

# npm install react react-dom -S

# 
