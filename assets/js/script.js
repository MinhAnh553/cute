function changeImage() {
    const qualitySelect = document.getElementById('qualitySelect');
    const qualityImage = document.getElementById('qualityImage');
    const selectedQuality = qualitySelect.value;

    // Mapping between quality and image file name
    const qualityImageMap = {
        '144p': './assets/images/144p.png',
        '240p': './assets/images/240p.png',
        '480p': './assets/images/480p.png',
        '720p': './assets/images/720p.png',
        '1080p': './assets/images/1080p.png',
    };

    // Change image source based on selected quality
    qualityImage.src = qualityImageMap[selectedQuality];

    // Phát nhạc
    const music = document.getElementById('music');
    const title = document.querySelector('.title');
    if (selectedQuality == '1080p') {
        title.classList.remove('hide');
        music.play();
    } else {
        title.classList.add('hide');
        music.pause();
    }
}
