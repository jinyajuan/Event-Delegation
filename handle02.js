window.onload = function () {
    //1.点击删除按钮出现浮层
    var oBtn = document.getElementById("delete")
    var oDiv1 = document.getElementById("div1")
    oBtn.onclick = function () {
        oDiv1.style.display = 'block'
    }

    //2.2 浮层上面的操作
    var oBtn_yes = document.getElementById("yes")
    var oBtn_no  = document.getElementById("no")
    oBtn_yes.onclick = function (e) {
        window.location = "https://www.baidu.com/"
        e.stopPropagation()
    }
    oBtn_no.onclick = function (e) {
        oDiv1.style.display = "none"
        e.stopPropagation()
    }
    oDiv1.onclick = function (e) {
        var target = e.target
        if (document.getElementById("div2").contains(target)) { //判断div2是否包含事件源，如果包含，不消失，不包含的话消失
            console.log("不消失")
        } else {
            oDiv1.style.display = "none"
        }
    }

}