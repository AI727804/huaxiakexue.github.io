var btn = document.getElementsByClassName("btn");
var imgs = document.querySelectorAll(".list div");
var btns = document.querySelectorAll(".btns span");
var cont = document.getElementsByClassName("cont")[0];
var indexes, timer = null;
for(let i=0; i<btns.length; i++){
    btns[i].onmouseover = function(){  // 给所有下面的白色线条添加一个鼠标经过事件
        animate(i);
    }
}

btn[0].onclick = function(){  // 上一张按钮
    indexes = currentPage();
    if(indexes == 0) indexes=5;
        indexes--;
    animate(indexes);
}

btn[1].onclick = next;

function next(){  // 下一张按钮
    indexes = currentPage();
    if(indexes == 4) indexes = -1;
        indexes++;
   animate(indexes);
}

function animate(i){  // 动画函数
    for(let j = 0; j < imgs.length; j++){
        imgs[j].style.opacity = 0;
        imgs[j].style.zIndex = 1;
        btns[j].classList.remove("bgc");
    }
    imgs[i].style.opacity = 1;
    imgs[i].style.zIndex = 2;
    btns[i].classList.add("bgc");
}

function currentPage() { // 返回当前页面
    for(var i = 0; i < imgs.length; i++){
         if(imgs[i].style.zIndex == 2){
            return imgs[i].dataset.index;
         }
    }
}

timer = setInterval(next,3000); // 设置自动播放
cont.onmousemove = function(){  // 鼠标移入时停止自动播放
    clearInterval(timer);
}
cont.onmouseout = function(){   // 鼠标移出时又开始播放
    timer = setInterval(next,3000);
}

// banner划出划入动画（鼠标滚轮）
let home = document.querySelector('.cont');
let main = document.querySelector('.container');
home.onmousewheel = function (event) {
    if (event.deltaY > 0) {
        event.preventDefault();
        main.scrollIntoView({ behavior: 'smooth' });
    }
};
main.onmousewheel = function (event) {
    if (event.deltaY < 0) {
        if(document.documentElement.scrollTop <= window.innerHeight * 1.15){
            event.preventDefault();
            home.scrollIntoView({ behavior: 'smooth' });
        }
    }
};
