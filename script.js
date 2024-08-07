const customCursor = document.querySelector('.custom-cursor');

// 마우스 움직임 이벤트 리스너
document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
    customCursor.style.opacity = 1; // 커서를 보이게 설정
});

// 페이지 로드 시 커서 보이게 설정
window.addEventListener('load', () => {
    customCursor.style.opacity = 1; // 페이지 로드 후 커서 보이게 설정
});
