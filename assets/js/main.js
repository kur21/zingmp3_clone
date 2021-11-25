const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// ============================================
// FUNCTIONS

const autoSlider = function(action, time) {
    let loopSlider = setInterval(action, time)
    gallery.onmouseover = function() {
        clearInterval(loopSlider)
    }
    gallery.onmouseout = function() {
        loopSlider = setInterval(action, time)
    }
}

const formatShortNumber = function(number) {
    if (number < 1e3) {
        return number;
    }
    if (number >= 1e3 && number < 1e6) {
        return +(number / 1e3).toFixed(1) + "K";
    }
    if (number >= 1e6 && number < 1e9) {
        return +(number / 1e6).toFixed(1) + "M";
    }
    if (number >= 1e9 && number < 1e12) {
        return +(number / 1e9).toFixed(1) + "B";
    }
    if (number >= 1e12) {
        return +(number / 1e12).toFixed(1) + "T";
    }
};
// ============================================
// Header Scroll
const mainPage = $('.mainpage')
const header = $('.header')
mainPage.onscroll = function() {
    mainPage.scrollTop > 0 ? header.classList.add('sticky') : header.classList.remove('sticky')
}

// ============================================
// Search
const search = $('.header-search')
const searchInput = $('.header-search-input')
const clearInputBtn = $('.header-clear-btn')
const settingBtn = $('.header-setting')
const settingList = $('.header-setting-list')

searchInput.onfocus = () => {
    search.classList.add('focused')
}
clearInputBtn.onclick = () => {
    searchInput.value = ""
    searchInput.focus()
}
document.onclick = (e) => {
    if (!e.target.closest('.header-search')) {
        search.classList.remove('focused')
    }
    if (!e.target.closest('.header-setting')) {
        settingList.classList.remove('active')
    }
}
settingBtn.onclick = () => {
    settingList.classList.toggle('active')
}
settingList.onclick = (e) => {
    e.stopPropagation()
}

// ============================================
// Themes
import { themesGroupsData } from "./data.js"

const themesModal = $('.themes-modal')
if (themesModal) {
    // Add html
    themesModal.innerHTML = `
        <div class="header-themes-list"></div>
        <div class="themes-group__overlay"></div>
    `
    const themesList = $('.header-themes-list')
    themesList.innerHTML = `
        <div class="themes__heading">
            <div class="themes__heading-text">Giao Diện</div>
            <div class="themes__close-icon fa-light fa-xmark">
                <div class="desc-tag-up">Đóng</div>
            </div>
        </div>
        <div class="themes__body">
    `
    const themesBody = $('.themes__body')

    // Func add item themes
    const add_themes_item = function (name, img) {
        return `
        <li class="themes-group__item">
            <div class="themes-group__item-body">
                <img src="${img}" alt="" class="themes-group__item-img">
                <!--<i class="icon-check fa-light fa-check"></i>-->
                <div class="themes-group__item-btn">
                    <button class="themes-btn-apply">ÁP DỤNG</button>
                    <button class="themes-btn-review">XEM TRƯỚC</button>
                </div>
            </div>
            <div class="themes-group__item-name">${name}</div>
        </li>
        `
    }

    // Render HTML
    themesGroupsData.forEach(function (group) {
        let htmlGroup = `
        <div class="themes-group">
            <div class="themes-group__title">${group.heading}</div>
            <ul class="themes-group__list">
        `
        group.items.forEach(function (item) {
            htmlGroup += add_themes_item(item.name, item.img)
        })
        htmlGroup += '</div>'
        themesBody.insertAdjacentHTML('beforeend', htmlGroup)
    })
}

const themesBtn = $('.header-themes')
themesBtn.onclick = () => {
    themesModal.classList.add('active')
}
const themesClose = $('.themes__close-icon')
    themesClose.onclick = () => {
        themesModal.classList.remove('active')
    }
const themesOverlay = $('.themes-group__overlay')
themesOverlay.onclick = () => {
    themesModal.classList.remove('active')
}

// ============================================
// Gallery show
import { dataGallery, show_gallery_item } from "./data.js"

const gallery = $('.gallery')
if (gallery) {

    // Func add Item Gallery
    const addItemGallery = function(position, className = '') {
        return `
            <div class="gallery-item show-${show_gallery_item} ${className}" data-index="${position}">
                <a href="${dataGallery[position].url}" class="gallery-item-link">
                    <img src="${dataGallery[position].img}" alt="" class="gallery-item-img">
                </a>
            </div>
        `
    }

    // Show navigation button gallery
    if (dataGallery.length > 0 && dataGallery.length > show_gallery_item) {
        let navigationBtn = `
            <div class="gallery-prev">
                <button class="gallery-arrow-btn">
                    <i class="fa-light fa-chevron-left"></i>
                </button>
            </div>
            <div class="gallery-next">
                <button class="gallery-arrow-btn">
                    <i class="fa-light fa-chevron-right"></i>
                </button>
            </div>
        `
        gallery.insertAdjacentHTML('beforeend', navigationBtn)
    }

    // Render item gallery
    var htmlGallery = '<div class="gallery-list">'
    for (let i = 0; i < dataGallery.length ; i++) {
        if (i < show_gallery_item) {
            htmlGallery += addItemGallery(i, 'trf-'+i);
        } else {
            htmlGallery += addItemGallery(i, 'wait')
        }
    }
    htmlGallery += '</div>'
    gallery.insertAdjacentHTML('beforeend', htmlGallery)

    // Next & Prev slider
    const galleryPrevBtn = $('.gallery-prev')
    const galleryNextBtn = $('.gallery-next')

    const nextSlider = function () {
        const galleryItems = Array.from($$('.gallery-item'))
        const itemEndShow = $(`.trf-${show_gallery_item-1}`)
        const nextIndexPosition = galleryItems.indexOf(itemEndShow) === galleryItems.length - 1 ? 0 : galleryItems.indexOf(itemEndShow) + 1
        
        galleryItems.forEach(function(item) {
            if (item.className.includes('trf-0')){
                item.classList.replace('trf-0', 'wait')
            } else if (Number(item.getAttribute('data-index')) === nextIndexPosition) {
                item.classList.replace('wait', `trf-${show_gallery_item-1}`)
            } else {
                for(let i = 1; i < show_gallery_item; i++) {
                    item.classList.replace(`trf-${i}`, `trf-${i-1}`)
                }
            }
        })
    }

    const prevSlider = function () {
        const galleryItems = Array.from($$('.gallery-item'))
        const itemStartShow = $('.trf-0')
        const prevIndexPosition = galleryItems.indexOf(itemStartShow) === 0 ? galleryItems.length - 1 : galleryItems.indexOf(itemStartShow) - 1
        
        galleryItems.forEach(function(item) {
            if (item.className.includes(`trf-${show_gallery_item-1}`)){
                item.classList.replace(`trf-${show_gallery_item-1}`, 'wait')
            } else
            if (Number(item.getAttribute('data-index')) === prevIndexPosition) {
                item.classList.replace('wait', 'trf-0')
            } else {
                let next = prevIndexPosition + 1 > galleryItems.length-1 ? 0 : prevIndexPosition + 1
                for(let i = 1; i < show_gallery_item; i++) {
                    if(Number(item.getAttribute('data-index')) === next) {
                        item.classList.replace(`trf-${i-1}`, `trf-${i}`)
                    }
                    next = next + 1 > galleryItems.length-1 ? 0 : next + 1
                }
            }
            
        })
    }
    galleryNextBtn.addEventListener('click', nextSlider)
    galleryPrevBtn.addEventListener('click', prevSlider)

    // Auto slider
    autoSlider(nextSlider, 4000)
}

// ============================================
// Function render Playlist section
const renderPlaylist = function(data, selector) {
    // Html
    let htmlItems = ''
    data.items.forEach(function(item) {
        htmlItems += `
            <div class="playlist-item">
                <a href="${item.url}" class="playlist-item-cover">
                    <div class="playlist-item-img">
                        <img src="${item.img}">
                    </div>
                    <div class="playlist-item-actions">
                        <i class="playlist-action--love fa-light fa-heart">
                            <div class="desc-tag-up">Thêm vào thư viện</div>
                        </i>
                        <i class="playlist-action--play fa-thin fa-circle-play"></i>
                        <i class="playlist-action--setting fa-light fa-ellipsis">
                            <div class="desc-tag-up">Khác</div>
                        </i>
                    </div>
                </a>
                <div class="playlist-item-content">
                    <a href="${item.url}" class="playlist-item-title">${item.title}</a>
                    <div class="playlist-item-subtitle">${item.subtitle}</div>
                </div>
            </div>
        `
    })
    selector.innerHTML = `
        <div class="playlist-title">
            ${ data.url ? `<a href="${data.url}">${data.title} <i class="fa-regular fa-angle-right"></i></a>` : `${data.title}`}
        </div>
        <div class="playlist-body" style="--f-columns:${data.item_show}">
            <div class="playlist-items">${htmlItems}</div>
        </div>
        <button class="playlist-prev-btn ${data.button === 'hidden' ? 'is-hidden' : ''}" disabled="disabled">
            <i class="fa-thin fa-angle-left"></i>
        </button>
        <button class="playlist-next-btn ${data.button === 'hidden' ? 'is-hidden' : ''}">
            <i class="fa-thin fa-angle-right"></i>
        </button>
    `

    // Handle playlist
    const playlistItems = selector.querySelector('.playlist-items')
    const prevPlaylistBtn = selector.querySelector('.playlist-prev-btn')
    const nextPlaylistBtn = selector.querySelector('.playlist-next-btn')
    const playlistItemWidth = selector.querySelector('.playlist-item').offsetWidth
    // Function next prev item playlist
    let positionX = 0
    let number_item_action
    let index = data.item_show
    function next_playlist_items() {
        prevPlaylistBtn.removeAttribute('disabled')
        if(index === data.items.length) {
            number_item_action = 0
            index = data.item_show
            positionX = 0
        } else if ((data.items.length - index) > data.item_show) {
            number_item_action = data.item_show
        } else {
            number_item_action = data.items.length - index
        }
        positionX = positionX - playlistItemWidth*number_item_action
        playlistItems.style = `transform: translateX(${positionX}px)`
        index += number_item_action

        if (index === data.items.length) {
            if (!data.repeat_slider) {
                nextPlaylistBtn.setAttribute('disabled','disabled')
            }
        }
    }

    function prev_playlist_items() {
        nextPlaylistBtn.removeAttribute('disabled')
        if (index === data.item_show) {
            number_item_action = 0
            index = data.items.length
            positionX =  -playlistItemWidth*(index - data.item_show)
        } else if ((index - data.item_show) > data.item_show) {
            number_item_action = data.item_show
        } else {
            number_item_action = index - data.item_show
        }

        positionX = positionX + playlistItemWidth*number_item_action
        playlistItems.style = `transform: translateX(${positionX}px)`
        index -= number_item_action

        if (index === data.item_show) {
            if (!data.repeat_slider) {
                prevPlaylistBtn.setAttribute('disabled','disabled')
            }
        }
    }

    if (data.button === 'show') {
        if (data.items.length > data.item_show) {            
            nextPlaylistBtn.addEventListener('click', next_playlist_items)
            prevPlaylistBtn.addEventListener('click', prev_playlist_items)
        } else {
            nextPlaylistBtn.setAttribute('disabled','disabled')
            prevPlaylistBtn.setAttribute('disabled','disabled')
        }
    }

    if (data.slider === 'auto') {
        autoSlider(next_playlist_items, 5000)
    }
}

// Function render Livestream section
const renderLivestream = function(data, selector) {
    let htmlItem = ''
    // Html
    data.items.forEach(function(item) {
        htmlItem += `
            <div class="livestream-item">
                <a href="${item.url_host}" class="livestream-item-cover">
                    <svg class="svg" width="100%" height="100%" viewBox="0 0 100 100">
                        <circle class="live-circle-bg" cx="50" cy="50" r="48.75" stroke="rgba(255, 255, 255, 0.2)" stroke-width="2.5" fill="none"/>
                        <circle class="live-circle" cx="50" cy="50" r="48.75" stroke="#ff4b4a" stroke-width="2.5" fill="none"/>
                    </svg>
                    <div class="livestream-item-img">
                        <img src="./assets/img/radio/off.jpg">
                    </div>
                    <div class="opacity"></div>
                    <div class="livestream-item-actions">
                        <i class="livestream-action--play fa-thin fa-circle-play"></i>
                    </div>
                    <div class="live-icon">Live</div>
                    <img src="${item.avatar_host}" class="live-host-img"></img>
                </a>
                <div class="livestream-item-content">
                    <div class="livestream-item-chanel" title="">${item.name_host}</div>
                    <div class="livestream-item-view">${formatShortNumber(item.viewer)} đang nghe</div>
                </div>
            </div>
        `
    })

    selector.innerHTML = `
        <div class="livestream-title">
            ${ data.url ? `<a href="${data.url}">${data.title} <i class="fa-regular fa-angle-right"></i></a>` : `${data.title}`}
        </div>
        <div class="livestream-body" style="--f-columns:${data.item_show}">
            <div class="livestream-items">${htmlItem}</div>
        </div>
        <button class="livestream-prev-btn ${data.button === 'hidden' ? 'is-hidden' : ''}" ${data.repeat_slider ? '' : 'disabled="disabled"'}>
            <i class="fa-thin fa-angle-left"></i>
        </button>
        <button class="livestream-next-btn ${data.button === 'hidden' ? 'is-hidden' : ''}">
            <i class="fa-thin fa-angle-right"></i>
        </button>
    `
    
    // Handle playlist
    const livestreamItems = selector.querySelector('.livestream-items')
    const prevLivestreamBtn = selector.querySelector('.livestream-prev-btn')
    const nextLivestreamBtn = selector.querySelector('.livestream-next-btn')
    const livestreamItemWidth = selector.querySelector('.livestream-item').offsetWidth
    // Function next prev item playlist
    let positionX = 0
    let number_item_action
    let index = data.item_show
    function next_livestream_items() {
        prevLivestreamBtn.removeAttribute('disabled')
        if(index === data.items.length) {
            number_item_action = 0
            index = data.item_show
            positionX = 0
        } else if ((data.items.length - index) > data.item_show) {
            number_item_action = data.item_show
        } else {
            number_item_action = data.items.length - index
        }
        positionX = positionX - livestreamItemWidth*number_item_action
        livestreamItems.style = `transform: translateX(${positionX}px)`
        index += number_item_action

        if (index === data.items.length) {
            if (!data.repeat_slider) {
                nextLivestreamBtn.setAttribute('disabled','disabled')
            }
        }
    }

    function prev_livestream_items() {
        nextLivestreamBtn.removeAttribute('disabled')
        if (index === data.item_show) {
            number_item_action = 0
            index = data.items.length
            positionX =  -livestreamItemWidth*(index - data.item_show)
        } else if ((index - data.item_show) > data.item_show) {
            number_item_action = data.item_show
        } else {
            number_item_action = index - data.item_show
        }

        positionX = positionX + livestreamItemWidth*number_item_action
        livestreamItems.style = `transform: translateX(${positionX}px)`
        index -= number_item_action

        if (index === data.item_show) {
            if (!data.repeat_slider) {
                prevLivestreamBtn.setAttribute('disabled','disabled')
            }
        }
    }

    if (data.button === 'show') {
        if (data.items.length > data.item_show) {            
            nextLivestreamBtn.addEventListener('click', next_livestream_items)
            prevLivestreamBtn.addEventListener('click', prev_livestream_items)
        } else {
            nextLivestreamBtn.setAttribute('disabled','disabled')
            prevLivestreamBtn.setAttribute('disabled','disabled')
        }
    }

    if (data.slider === 'auto') {
        autoSlider(next_livestream_items, 5000)
    }
}



// Today's Choice
import {todayChoiceData} from "./data.js"
const todayChoice = $('.playlist-section.today-choice')
renderPlaylist(todayChoiceData, todayChoice)

// Xone's Corner
import {xonesCornerData} from "./data.js"
const xonesCorner = $('.playlist-section.xones-corner')
renderPlaylist(xonesCornerData, xonesCorner)

// Top Radio
import {topRadioData} from "./data.js"
const topRadio = $('.livestream-section.radio')
renderLivestream(topRadioData,topRadio)
function updateTimeLive() {
    topRadioData.items.forEach(function(item, index) {
        let currentTime = (new Date()).getHours() + (new Date()).getMinutes()/60
        let currentProgram = {
            img: './assets/img/radio/off.jpg',
            time_start: undefined,
            time_end: undefined,
        }
        item.programs.forEach(function(program) {
            if (program.time_start >= program.time_end) {
                if (currentTime <= program.time_end) {
                    currentTime += 24
                }
                program.time_end = 24 + program.time_end
            }
            if (currentTime >= program.time_start && currentTime <= program.time_end) {
                currentProgram = program
            }
        })
        item.currentProgram = currentProgram
        
        const livestreamItem = $(`.livestream-item:nth-child(${index+1})`)
        const imgItem = livestreamItem.querySelector('.livestream-item-img > img')
        const liveIcon = livestreamItem.querySelector('.live-icon')
        const circle = livestreamItem.querySelector('.live-circle')
        const circleLength = circle.getTotalLength()

        let totalTimeProgram = (item.currentProgram.time_end - item.currentProgram.time_start)*60
        let currentTimeProgram = (currentTime - item.currentProgram.time_start)*60

        if (item.currentProgram.time_start === undefined || item.currentProgram.time_end === undefined) {
            circle.setAttribute('stroke-dasharray', circleLength)
            circle.setAttribute('stroke-dashoffset', circleLength)
            liveIcon.style.backgroundColor = '#6e6e6e'
        } else {
            imgItem.src = item.currentProgram.img
            circle.setAttribute('stroke-dasharray', circleLength)
            circle.setAttribute('stroke-dashoffset', circleLength - (circleLength * currentTimeProgram / totalTimeProgram))
        }
    })
}
updateTimeLive()
setInterval(updateTimeLive, 5000)

// New Song Everyday
import {newSongsData} from "./data.js"
const newSongs = $('.playlist-section.new-songs')
renderPlaylist(newSongsData,newSongs)
