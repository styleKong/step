# step
原生js步进器（有丢丢ES6语法，注意兼容）
用法
// 自定义步进器
var step = new Step({
    el: '.step', // 步进器父级元素
    default: 0, // 默认值
    stepLength: 1, // 每次步进长度
    max: 100, // 最大值
    min: 0, // 最小值
    style: {
        width: '80px',
        height: '30px',
        border: '1px #ececec solid',
        borderRadius: '5px',
        color: '#666',
        fontSize: '14px',
    }, //步进器样式 对象格式
    addBtn: function(value) {
        console.log(value)
    }, // 增加按钮回调
    removeBtn: function(value) {
        console.log(value)
    }, // 减少按钮回调
})
