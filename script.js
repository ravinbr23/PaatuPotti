console.log("Welcome to PaatuPotti");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: "Azhagaai Pookuthe", filePath: "songs/23.mp3", coverPath: "covers/VJN.jpg" },
    { songName: "oru naalil", filePath: "songs/1.mp3", coverPath: "covers/Yuvancover1.jpg" },
    { songName: "Idhazhin Oram", filePath: "songs/6.mp3", coverPath: "covers/Moonu.jpg" },
    { songName: "Nillave Vaa", filePath: "songs/20.mp3", coverPath: "covers/RAJA.jpg" },
    { songName: "Nenjukkul Peidhidum", filePath: "songs/11.mp3", coverPath: "covers/v1000.jpg" },
    { songName: "Vikram", filePath: "songs/8.mp3", coverPath: "covers/vikram.jpg" },
    { songName: "Thendral Vandhu", filePath: "songs/19.mp3", coverPath: "covers/RAJA.jpg" },
    { songName: "Appadi Podu", filePath: "songs/30.mp3", coverPath: "covers/SAGAR.jpg" },
    { songName: "Pirai Thedum", filePath: "songs/15.mp3", coverPath: "covers/GVP.jpg" },
    { songName: "Vaadi Pulla Vaadi", filePath: "songs/25.mp3", coverPath: "covers/VAADI.jpg" },
    { songName: "Unnale Unnale", filePath: "songs/10.mp3", coverPath: "covers/Harris.jpg" },
    { songName: "Hi sonna Pothum", filePath: "songs/26.mp3", coverPath: "covers/HHT.jpg" },
    { songName: "Nenje Nenje", filePath: "songs/9.mp3", coverPath: "covers/Harris.jpg" },
    { songName: "Venmegam", filePath: "songs/3.mp3", coverPath: "covers/yuvancover1.jpg" },
    { songName: "Thuli Thuli", filePath: "songs/2.mp3", coverPath: "covers/yuvancover1.jpg" },
    { songName: "Azhagooril ", filePath: "songs/29.mp3", coverPath: "covers/SAGAR.jpg" },
    { songName: "Mascara", filePath: "songs/24.mp3", coverPath: "covers/VJN.jpg" },
    { songName: "Selfie Pulla", filePath: "songs/7.mp3", coverPath: "covers/anirudh.jpg" },
    { songName: "Kannana Kanne", filePath: "songs/5.mp3", coverPath: "covers/naanumRowdy.jpg" },
    { songName: "Nenje Ezhu", filePath: "songs/18.mp3", coverPath: "covers/RAHMAN.jpg" },
    { songName: "Thirunalveli Alwa", filePath: "songs/12.mp3", coverPath: "covers/Harris.jpg" },
    { songName: "New York", filePath: "songs/16.mp3", coverPath: "covers/RAHMAN.jpg" },
    { songName: "Pallikoodam", filePath: "songs/27.mp3", coverPath: "covers/HHT.jpg" },
    { songName: "Machi Open", filePath: "songs/4.mp3", coverPath: "covers/yuvancover1.jpg" },
    { songName: "Sundari", filePath: "songs/21.mp3", coverPath: "covers/RAJA.jpg" },
    { songName: "Un Perai", filePath: "songs/14.mp3", coverPath: "covers/GVP.jpg" },
    { songName: "Uyire Uyiree", filePath: "songs/17.mp3", coverPath: "covers/RAHMAN.jpg" },
    { songName: "Athinthom", filePath: "songs/28.mp3", coverPath: "covers/SAGAR.jpg" },
    { songName: "Pookal Pookum", filePath: "songs/13.mp3", coverPath: "covers/GVP.jpg" },
    { songName: "Nakku Mukka", filePath: "songs/22.mp3", coverPath: "covers/VJN.jpg" },
    { songName: "Sara sara", filePath: "songs/34.mp3", coverPath: "covers/Vaagai.jpg" },
    { songName: "Kai ah pudi", filePath: "songs/32.mp3", coverPath: "covers/IMMAN.jpg" },
    { songName: "Chilla Chilla ", filePath: "songs/33.mp3", coverPath: "covers/CHILLA.jpg" },
   
]

songItems.forEach((element, i) => {
    if (songs[i]) {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    }
});



// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = i; // Set the songIndex to the current index in the loop
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 71) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
