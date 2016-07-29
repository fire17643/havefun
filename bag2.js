var sizeof = function(str, charset){
    var total = 0,
        charCode,
        i,
        len;
    charset = charset ? charset.toLowerCase() : '';
    if(charset === 'utf-16' || charset === 'utf16'){
        for(i = 0, len = str.length; i < len; i++){
            charCode = str.charCodeAt(i);
            if(charCode <= 0xffff){
                total += 2;
            }else{
                total += 4;
            }
        }
    }else{
        for(i = 0, len = str.length; i < len; i++){
            charCode = str.charCodeAt(i);
            if(charCode <= 0x007f) {
                total += 1;
            }else if(charCode <= 0x07ff){
                total += 2;
            }else if(charCode <= 0xffff){
                total += 3;
            }else{
                total += 4;
            }
        }
    }
    return total;
}

function isEmptyObj(obj)
{
    for(var i in obj){
        if(obj.hasOwnProperty(name)){
            return false;
        }
    }
    return true;
};

// 判断元素是否在可见视窗内(viewport)?
var isInViewport = function ( elem ) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var elem = document.querySelector('#some-element');
isInViewport(elem); // Boolean: returns true/false

// 获取JavaScript各种全局对象变量的方法
(function() {
	var iframe = document.createElement('iframe');
	iframe.onload = function() {
		var iframeKeys = Object.keys(iframe.contentWindow);
		Object.keys(window).forEach(function(key) {
			if(!(key in iframeKeys)) {
				console.log(key);
			}
		});
	};
	iframe.src = 'about:blank';
	document.body.appendChild(iframe);
})();

// 用JavaScript获取函数参数名称
function getArgs(func) {
  // 首先匹配函数括弧里的参数
  var args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];
 
  // 分解参数成数组
  return args.split(",").map(function(arg) {
    // 去空格和内联注释
    return arg.replace(/\/\*.*\*\//, "").trim();
  }).filter(function(arg) {
    // 确保没有undefineds
    return arg;
  });
}
function myCustomFn(arg1, arg2,arg3) {
  
}

console.log(getArgs(myCustomFn)); // ["arg1", "arg2", "arg3"]

(~~(Math.random()*(1<<24))).toString(16)
// 随机颜色代码

// 给所有页面元素添加随机颜色边框
[].forEach.call($$("*"),function(a){
    a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
})