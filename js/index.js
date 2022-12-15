let now = 0 // 現在是第一張

// 自動去算有多少張圖片
const total = $('img').length
$('#imgs').css('width', total * 350 + 'px')

// 目前張數+1去計算left多少 因為往右 所以*-1
$('#right').click(function () {
  if (now < total - 1) {
    now++
    const left = now * 350 * -1
    // $('#imgs').animate({ left: left + 'px' })
    // 可以設定成有點q彈的模式
    $('#imgs').stop(true, true).animate({ left: left - 25 + 'px' }).animate({ left: left + 'px' })
  }
})

$('#left').click(function () {
  if (now > 0) {
    now--
    const left = now * 350 * -1
    // $('#imgs').animate({ left: left + 'px' })
    $('#imgs').stop(true, true).animate({ left: left + 25 + 'px' }).animate({ left: left + 'px' })
  }
})

// window.addEventListener('scroll', () => {
//   const scrollPositionY = window.pageYOffset;
//   const hamburger = document.querySelector('.hamburger');

//   hamburger.style.transform = `translateY(${scrollPositionY}px)`;
// });



