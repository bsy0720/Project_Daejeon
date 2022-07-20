// 사진 돌아가는거
let animation = function () {
    let items, winH;
    let initModule = function () {
        items = document.querySelectorAll(".c_img");
        winH = window.innerHeight;
        _addEventHandlers();
    }
    let _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    };
    let _checkPosition = function flip() {
        for (let i = 0; i < items.length; i++) {
            let cultureTop = items[i].getBoundingClientRect().top;
            if (winH > cultureTop) {
                setTimeout(function () {
                    items[i].classList.add("img_active")
                }, 170 * i)
            }
        }
    }

    return {
        init: initModule
    }
}
animation().init();

//top버튼
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#top').fadeIn();
    } else {
        $('#top').fadeOut();
    }
});
$('#top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
    return false;
});



//헤더픽스 메뉴
$(document).ready(function () {
    var jbOffset = $('.fixMenu').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > jbOffset.top) {
            $(".fixMenu").show();
            $(".none").hide();
        } else {
            $(".fixMenu").hide();
            $(".none").show();
        }
    });
});

//문화예술공간 드롭
document.getElementById('myfunction').onclick = function () {
    document.getElementById("info_wrap").style.display = "block";
}
document.getElementById('myFunctionX').onclick = function () {
    document.getElementById("info_wrap").style.display = "none";
}


// 배너 스와이프
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});