// script.js
let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

// 获取元素
const pageIndicator = document.getElementById('pageIndicator');

// 更新页面显示
function updatePage() {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    // 显示当前页面
    document.getElementById(`page${currentPage}`).style.display = 'block';
    // 更新页码指示器
    pageIndicator.textContent = `${currentPage} / ${totalPages}`;
}

// 监听鼠标滚轮事件
document.addEventListener('wheel', (event) => {
    // 阻止默认滚动行为
    event.preventDefault();

    // 判断滚轮方向
    if (event.deltaY > 0) {
        // 向下滚动，切换到下一页
        if (currentPage < totalPages) {
            currentPage++;
            updatePage();
        }
    } else if (event.deltaY < 0) {
        // 向上滚动，切换到上一页
        if (currentPage > 1) {
            currentPage--;
            updatePage();
        }
    }
});

// 初始化
updatePage();