const images = document.querySelectorAll('.image-cont_img')
const videoCont = document.querySelector('#trailerSection_video')
const video = document.querySelector('#trailerSection_video > iframe')
const closeVideo = document.querySelector('#close_video')

let tlVideoPlayer_duration = 750

const tlVideoPlayer = anime.timeline({
    duration: tlVideoPlayer_duration,
    autoplay: false
});

tlVideoPlayer
.add({
    targets: videoCont,
    opacity: [0, 1],
    easing: 'easeInOutExpo',
    duration: 500,
})
.add({
    targets: video,
    opacity: [0, 1],
    duration: 500,
    easing: 'easeInOutExpo',
}, '-=300')

function stopYoutubeVideo( container ){
    var iframe = container.getElementsByTagName("iframe")[0];
    var url = iframe.getAttribute('src');
    iframe.setAttribute('src', '');
    iframe.setAttribute('src', url);
}

tlVideoPlayer.reverse()

images.forEach(image => {
    image.addEventListener('click', () => {
        video.src = image.getAttribute('data-src');

        tlVideoPlayer.reverse()
        tlVideoPlayer.play()

        videoCont.style.display = 'block';
    })
});

closeVideo.addEventListener('click', () => {
    tlVideoPlayer.reverse()
    tlVideoPlayer.play()
    stopYoutubeVideo(videoCont)

    setTimeout(() => {
        videoCont.style.display = 'none';
    }, tlVideoPlayer_duration)
})