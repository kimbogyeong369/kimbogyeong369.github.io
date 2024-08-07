const customCursor = document.querySelector('.custom-cursor');

// 마우스 움직임 이벤트 리스너
document.addEventListener('mousemove', (e) => {
    // 커서 위치를 마우스 위치로 설정
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
});

// 페이지 로드 시 커서 숨기기
window.addEventListener('load', () => {
    customCursor.style.display = 'none'; // 초기 상태에서 커서 숨기기
});


