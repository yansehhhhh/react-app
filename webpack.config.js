//暴露一个对象(node语法)
//webpack基于node构建，支持所有node语法
const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

//创建插件实例对象

const htmlPlugin=new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),//源文件
    filename:'index.html'//首页文件名
})

module.exports={
    mode:'production',// "production" | "development" | "none"
    // entry: "./src/index.js", // string | object | array
    plugins:[
        htmlPlugin
    ],
    module:{
        rules:[   
            {
                test:/\.js$/,   //匹配JS文件  
                use:'babel-loader',
                exclude:/node_modules/   //排除node_modules目录
            }
        ]
    }
}