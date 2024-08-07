const customCursor = document.querySelector('.custom-cursor');

// 마우스 움직임 이벤트 리스너
document.addEventListener('mousemove', (e) => {
    // 페이지의 실제 좌표를 기준으로 커서 위치 업데이트
    customCursor.style.left = e.clientX + 'px'; // clientX를 사용하여 뷰포트에 상대적 위치
    customCursor.style.top = e.clientY + 'px'; // clientY를 사용하여 뷰포트에 상대적 위치
});

