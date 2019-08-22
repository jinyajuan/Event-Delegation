window.onload = function () {
    //1.点击删除按钮出现浮层
    var oBtn = document.getElementById("delete")
    var oDiv1 = document.getElementById("div1")
    oBtn.onclick = function () {
        oDiv1.style.display = 'block'
    }

    //2.1 浮层上的操作，使用事件委托(方法一)
    oDiv1.addEventListener("click",function(ev) {
        var ev = ev||window.event;
        var target = ev.target || ev.srcElement;

        console.log(target);  //(div1、yes、no)--(div2、word)

        if (target.id === "div1" || target.id === "no"){
            oDiv1.style.display = "none"
        }  else if (target.id === "yes") {
            window.location = "https://www.baidu.com/"
        } else {
            // alert("没有什么反应")
        }
    },false)

}