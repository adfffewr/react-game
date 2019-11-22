const path = require('path');

module.exports = {
    name : 'word-relay-settting',
    mode : 'development',
    devtool : 'eval',
    resolve : {
        extensions : ['.js' , '.jsx']
    },

    entry : {
        app : ['./client'],
    }, // 입력

    module : {
        rules : [{
            test : /\.jsx?/,
            loader : 'babel-loader',
            options : {
                presets : [
                    ['@babel/preset-env', {
                        targets:{
                            browsers : ['> 1% in KR'],  // 한국에서 점유율 1% 이상 브러우저만 지원
                        }
                    }], 
                    '@babel/preset-react'
                ],
                plugins : [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                ]
            }
        }]
    }, 

    plugins: [

    ],

    output : {
        path : path.join(__dirname, 'dist'),
        filename : 'app.js'
    }, // 출력
}
