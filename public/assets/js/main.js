// medium api 요청
const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fameuniverse';

const swiperWrapper = document.querySelector('.swiper-wrapper');
if (swiperWrapper) {
    // 최신 포스트 받아오기
    async function getUser() {
        try {
            const res = await axios.get(url, {});
            const postsArr = res.data.items.slice(0, 5);
            createArticles(postsArr);
        } catch (err) {
            console.error(err);
        }
    }
    getUser().then(() => {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    });
    function createArticles(arr) {
        arr.map((post) => {
            let { title, pubDate, thumbnail, content, link } = post;
            let contentLength = content.length;
            const startContent = content.indexOf('<p>') + 3;
            const stopContent = content.indexOf('</p>');
            content = content.substring(startContent, stopContent);

            const createLink = document.createElement('a');
            const createArticle = document.createElement('article');
            const createImg = document.createElement('div');
            const createWrapper = document.createElement('div');
            const createTitle = document.createElement('h3');
            const createContent = document.createElement('p');
            const createDate = document.createElement('span');
            const swiperSlide = document.createElement('div');

            swiperWrapper.appendChild(swiperSlide);
            swiperSlide.classList.add('swiper-slide');

            // 링크 태그 추가
            swiperSlide.appendChild(createLink);
            createLink.setAttribute('href', link);
            createLink.setAttribute('class', 'link-article');
            // createLink.innerHTML = `<span class="txt-link">Read more articles on Medium ></span>`;

            // article 태그추가
            createLink.appendChild(createArticle);
            createArticle.setAttribute('class', 'article-media');

            // background img 추가
            createArticle.appendChild(createImg);
            createImg.setAttribute('class', 'img-article');
            createImg.style.backgroundImage = `url(${thumbnail})`;

            // wrapper content 추가
            createArticle.appendChild(createWrapper);
            createWrapper.setAttribute('class', 'wrapper-content-article');

            // date 추가
            const gap = new Date().getTime() - new Date(pubDate.replaceAll('-', '/')).getTime();
            const pastDay = Math.floor(gap / 1000 / 60 / 60 / 24);
            createWrapper.appendChild(createDate);
            createDate.setAttribute('class', 'date-updated');
            createDate.innerHTML = `${pastDay} days ago`;

            // 타이틀 추가
            createWrapper.appendChild(createTitle);
            createTitle.setAttribute('class', 'title-article');
            createTitle.innerHTML = title;

            // 본문 추가
            createWrapper.appendChild(createContent);
            createContent.setAttribute('class', 'content-article');
            createContent.innerHTML = content;
        });
    }
}

// company 페이지 반응형 background video
addEventListener('DOMContentLoaded', () => {
    function makeVideoResponsible() {
        const target = document.querySelector('.video-background-company');
        if (target) {
            const currentRatio = innerWidth / innerHeight;
            const videoRatio = 1.7777777777777777;
            if (videoRatio > currentRatio) {
                target.style.width = 'auto';
                target.style.height = '100vh';
            } else {
                target.style.height = 'auto';
                target.style.width = '100vw';
            }
        }
    }

    function roadmapSwiper() {
        const swiper = new Swiper('.epc-mobile-show .list-roadmap', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            spaceBetween: 8,
            slidesPerView: 6 / 4,
            breakpoints: {
                // when window width is >= 360px
                564: {
                    direction: 'horizontal',
                    loop: false,
                    spaceBetween: 20,
                    slidesPerView: 6 / 4,
                },
            },
        });
    }

    makeVideoResponsible();
    roadmapSwiper();
    addEventListener('resize', makeVideoResponsible);
});

addEventListener('DOMContentLoaded', () => {
    function makeVideoResponsible() {
        const target = document.querySelector('.video-background-fame');
        if (target) {
            const currentRatio = innerWidth / innerHeight;
            const videoRatio = 1;
            if (videoRatio > currentRatio) {
                target.style.width = 'auto';
                target.style.height = '65vh';
                target.style.transform = 'translate(-50%, -50%)';
            } else {
                target.style.height = 'auto';
                target.style.width = '100vw';
                target.style.transform = 'translate(-50%, -50%)';
            }
        }
    }

    makeVideoResponsible();
    addEventListener('resize', makeVideoResponsible);
});

// 네비게이션바 클릭 이벤트 - 커뮤니티
const buttonCommunity = document.querySelector('.container-community');
const listCommunity = document.querySelector('.list-community');
const buttonMenu = document.querySelector('.button-menu');
const itemsCommunity = document.querySelectorAll('.item-community');
const menubar = document.querySelector('.menubar');
const buttonHome = document.querySelector('.button-home');
const buttonMobile = document.querySelector('.button-mobile');
const buttonClose = document.querySelector('.button-close');
const headerNav = document.querySelector('.header-nav');
function preventScroll(e) {
    e.preventDefault();
}

if (buttonMobile) {
    buttonMobile.addEventListener('click', () => {
        headerNav.classList.add('mobile-on');
        document.querySelector('.mobile-nav-back').style.display = 'block';
    });
}
if (buttonClose) {
    buttonClose.addEventListener('click', () => {
        headerNav.classList.remove('mobile-on');
        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';
        document.querySelector('.mobile-nav-back').style.display = 'none';
        body.removeEventListener('touchmove', preventScroll);
    });
}

buttonCommunity.addEventListener('click', (e) => {
    listCommunity.classList.toggle('on');
    buttonMenu.classList.toggle('on');
});

buttonCommunity.addEventListener('mousedown', () => {
    buttonCommunity.classList.add('clicked');
});

buttonCommunity.addEventListener('mouseup', () => {
    buttonCommunity.classList.remove('clicked');
});

// 네비게이션바 클릭 이벤트 - 백서
const containerWhitepaper = document.querySelector('.container-whitepaper');
const listWhitepaper = document.querySelector('.list-whitepaper');
const buttonWhitepaper = document.querySelector('.button-whitepaper');
const itemsWhitepaper = document.querySelectorAll('.item-whhitepaper');
function preventScroll(e) {
    e.preventDefault();
}

if (buttonMobile) {
    buttonMobile.addEventListener('click', () => {
        headerNav.classList.add('mobile-on');
        document.querySelector('.mobile-nav-back').style.display = 'block';
    });
}
if (buttonClose) {
    buttonClose.addEventListener('click', () => {
        headerNav.classList.remove('mobile-on');
        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';
        document.querySelector('.mobile-nav-back').style.display = 'none';
        body.removeEventListener('touchmove', preventScroll);
    });
}

containerWhitepaper.addEventListener('click', (e) => {
    listWhitepaper.classList.toggle('on');
    buttonWhitepaper.classList.toggle('on');
});

containerWhitepaper.addEventListener('mousedown', () => {
    containerWhitepaper.classList.add('clicked');
});

containerWhitepaper.addEventListener('mouseup', () => {
  containerWhitepaper.classList.remove('clicked');
});

// 네비게이션바 클릭 이벤트 - 언어
const containerLangs = document.querySelector('.container-langs');
const listLangs = document.querySelector('.list-langs');
const buttonLangs = document.querySelector('.button-langs');
const itemsLangs = document.querySelectorAll('.item-langs');
function preventScroll(e) {
    e.preventDefault();
}

if (buttonMobile) {
    buttonMobile.addEventListener('click', () => {
        headerNav.classList.add('mobile-on');
        document.querySelector('.mobile-nav-back').style.display = 'block';
    });
}
if (buttonClose) {
    buttonClose.addEventListener('click', () => {
        headerNav.classList.remove('mobile-on');
        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';
        document.querySelector('.mobile-nav-back').style.display = 'none';
        body.removeEventListener('touchmove', preventScroll);
    });
}

containerLangs.addEventListener('click', (e) => {
    listLangs.classList.toggle('on');
    buttonLangs.classList.toggle('on');
});

containerLangs.addEventListener('mousedown', () => {
    containerLangs.classList.add('clicked');
});

containerLangs.addEventListener('mouseup', () => {
  containerLangs.classList.remove('clicked');
});


// 헤더 스크롤 반응형 이벤트
const before = [];
function moveUpHeader(e) {
    if (before.pop() < window.scrollY && window.scrollY > 100) {
        menubar.classList.add('off');
        buttonHome.classList.add('off');
        buttonMobile.classList.add('off');
    } else {
        menubar.classList.remove('off');
        buttonHome.classList.remove('off');
        buttonMobile.classList.remove('off');
    }
    listCommunity.classList.contains('on') && window.scrollY > 100 && listCommunity.classList.remove('on');
    before.push(window.scrollY);
}

// 섹션 반응형 이벤트
ScrollReveal().reveal('.scroll-reveal', {
    distance: '100px',
    duration: 2000,
    // reset: true,
});

// 메뉴 바깥 클릭시 닫기 - 커뮤니티
addEventListener('click', (e) => {
    if (!buttonCommunity.contains(e.target)) {
        listCommunity.classList.remove('on');
        buttonMenu.classList.remove('on');
    }
});

if (innerWidth > 800) {
    window.addEventListener('scroll', moveUpHeader);
} else {
    null;
}

addEventListener('resize', () => {
    if (innerWidth > 800) {
        window.addEventListener('scroll', moveUpHeader);
    } else {
        window.removeEventListener('scroll', moveUpHeader);
        menubar.classList.remove('off');
        buttonHome.classList.remove('off');
        buttonMobile.classList.remove('off');
    }
});

// 메뉴 바깥 클릭시 닫기 - 백서
addEventListener('click', (e) => {
  if (!containerWhitepaper.contains(e.target)) {
      listWhitepaper.classList.remove('on');
      buttonWhitepaper.classList.remove('on');
  }
});

if (innerWidth > 800) {
  window.addEventListener('scroll', moveUpHeader);
} else {
  null;
}

addEventListener('resize', () => {
  if (innerWidth > 800) {
      window.addEventListener('scroll', moveUpHeader);
  } else {
      window.removeEventListener('scroll', moveUpHeader);
      menubar.classList.remove('off');
      buttonHome.classList.remove('off');
      buttonMobile.classList.remove('off');
  }
});

// 메뉴 바깥 클릭시 닫기 - 언어
addEventListener('click', (e) => {
  if (!containerLangs.contains(e.target)) {
      listLangs.classList.remove('on');
      buttonLangs.classList.remove('on');
  }
});

if (innerWidth > 800) {
  window.addEventListener('scroll', moveUpHeader);
} else {
  null;
}

addEventListener('resize', () => {
  if (innerWidth > 800) {
      window.addEventListener('scroll', moveUpHeader);
  } else {
      window.removeEventListener('scroll', moveUpHeader);
      menubar.classList.remove('off');
      buttonHome.classList.remove('off');
      buttonMobile.classList.remove('off');
  }
});
