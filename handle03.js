window.onload = function () {
    //1.点击删除按钮出现浮层
    var oBtn = document.getElementById("delete")
    oBtn.onclick = function () {
        oDiv1.style.display = 'block'
    }

    //2.2 浮层上面的操作
    var oBtn_yes = document.getElementById("yes")
    var oBtn_no  = document.getElementById("no")
    var oDiv1 = document.getElementById("div1")
    var oDiv2 = document.getElementById("div2")
    oBtn_yes.onclick = function (e) {
        window.location = "https://www.baidu.com/"
        e.stopPropagation()
    }
    oBtn_no.onclick = function (e) {
        oDiv1.style.display = "none"
        e.stopPropagation()
    }
    oDiv1.onclick = function () {
        oDiv1.style.display = "none"
    }
    oDiv2.onclick = function (e) {
        e.stopPropagation()
    }

}