document.addEventListener('DOMContentLoaded', function () {
    const imagePaths = [
        './assets/images/144p.png',
        './assets/images/240p.png',
        './assets/images/480p.png',
        './assets/images/720p.png',
        './assets/images/1080p.png',
    ];

    const imagesContainer = document.getElementById('images-container');

    // Preload images
    imagePaths.forEach(function (imagePath) {
        const image = new Image();
        image.src = imagePath;
        image.onload = function () {
            // console.log(`Image ${imagePath} preloaded`);
            imagesContainer.appendChild(image);
        };
    });

    // Preload audio
    const audioUrl = './assets/music/music.mp3'; // Thay đường dẫn tới file MP3 của bạn
    const audio = new Audio();
    audio.src = audioUrl;
    audio.oncanplaythrough = function () {
        // console.log('Audio preloaded');
        const audioElement = document.getElementById('preloaded-audio');
        audioElement.src = audioUrl;
        audioElement.style.display = 'block';
    };
});
