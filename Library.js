﻿console.log("Welcome to Paatu Potti");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [

    { songName: "Oru Naalil", filePath: "songs/Oru Naalil_64-(MassTamilan).mp3", coverPath: "covers/yuvancover1.jpg" },
    { songName: " Thuli Thuli ", filePath: "songs/5.mp3", coverPath: "covers/Thuli Thuli.jpg" },
    { songName: "Venmegam", filePath: "songs/3.mp3", coverPath: "covers/yaaradineeM.jpg" },
    { songName: "Machi Open the Bottle", filePath: "songs/4.mpeg", coverPath: "covers/Machi open the.jpg" },

    { songName: "Kannana Kanne", filePath: "songs/5.mp3", coverPath: "covers/NaanumRowdy.jpg" },
    { songName: "Idhalin Oram", filePath: "songs/6.mp3", coverPath: "covers/Moonu.jpg" },
    { songName: "Selfie Pulla", filePath: "songs/7.mp3", coverPath: "covers/anirudh.jpg" },
    { songName: "Vikram - title track", filePath: "songs/8.mp3", coverPath: "covers/Vikram.jpg" },

    { songName: "Nenje Nenje", filePath: "songs/9.mp3", coverPath: "covers/nenje.png" },
    { songName: "Unnale Unnale", filePath: "songs/10.mp3", coverPath: "covers/unnale unnale.png" },
    { songName: "Nenjukkul Peidhidum", filePath: "songs/11.mp3", coverPath: "covers/v1000.jpg" },
    { songName: "Thirunalveli Alwada", filePath: "songs/12.mp3", coverPath: "covers/Harris.jpg" },

    { songName: "Pookal Pookum", filePath: "songs/13.mp3", coverPath: "covers/Pookal.jpg" },
    { songName: "un perai sollum ", filePath: "songs/14.mp3", coverPath: "covers/GVP.jpg" },
    { songName: "Pirai thedum", filePath: "songs/15.mp3", coverPath: "covers/GVP.jpg" },

    { songName: "Newyork Nagaram", filePath: "songs/16.mp3", coverPath: "covers/RAHMAN.jpg" },
    { songName: "Uyire Uyire ", filePath: "songs/17.mp3", coverPath: "covers/RAHMAN.jpg" },
    { songName: "Nenje Ezhu", filePath: "songs/18.mp3", coverPath: "covers/RAHMAN.jpg" },

    { songName: "Thendral Vanthu ", filePath: "songs/19.mp3", coverPath: "covers/RAJA.jpg" },
    { songName: "Nillave vaa", filePath: "songs/20.mp3", coverPath: "covers/SPB.jpg" },
    { songName: "Sundari kannal ", filePath: "songs/21.mp3", coverPath: "covers/SPB.jpg" },

    { songName: "Nakku Mukka", filePath: "songs/22.mp3", coverPath: "covers/VJN.jpg" },
    { songName: "Alagaai Pookuthea", filePath: "songs/23.mp3", coverPath: "covers/VJN.jpg" },
    { songName: "Mascara", filePath: "songs/24.mp3", coverPath: "covers/VJN.jpg" },

    { songName: "Vaadi pulla vaadi", filePath: "songs/25.mp3", coverPath: "covers/VAADI.jpg" },
    { songName: "Hi sonna pothum", filePath: "songs/26.mp3", coverPath: "covers/HHT.jpg" },
    { songName: "Pallikoodam ", filePath: "songs/27.mp3", coverPath: "covers/HHT.jpg" },

    { songName: "Athinthom", filePath: "songs/28.mp3", coverPath: "covers/SAGAR.jpg" },
    {songName: "Alagooril Poothavale", filePath: "songs/29.mp3", coverPath: "covers/SAGAR.jpg" },
    { songName: "Appadi podu", filePath: "songs/30.mp3", coverPath: "covers/SAGAR.jpg" },

    { songName: "Aanalum indha mayakkam", filePath: "songs/31.mp3", coverPath: "covers/IMMAN.jpg" },
    { songName: "Kai ah pudi", filePath: "songs/32.mp3", coverPath: "covers/IMMAN.jpg" },

    { songName: "Chilla Chilla", filePath: "songs/33.mp3", coverPath: "covers/CHILLA.jpg" },
    { songName: "Sara Sara Saaara", filePath: "songs/34.mp3", coverPath: "covers/VAAGAI.jpg" },

    { songName: "Bikhra-Abdul Hannan", filePath: "songs/3.mp3", coverPath: "covers/Bikhra - Abdul Hannan.jpg" },
    { songName: "Harleys In Hawaii-Katy Perry", filePath: "songs/6.mp3", coverPath: "covers/Harleys In Hawaii - Katy Perry.jpg" },
    { songName: "Heat Waves-Glass Animals", filePath: "songs/7.mp3", coverPath: "covers/Heat Waves - Glass Animals.jpg" },
    { songName: "Hope-XXXTENTACION", filePath: "songs/8.mp3", coverPath: "covers/Hope -XXXTENTACION.jpg" },   
    { songName: "Akhiyaan - Mitraz", filePath: "songs/14.mp3", coverPath: "covers/Akhiyaan - Mitraz.jpg" },
    { songName: "Anjaan - Jani,Talha Yonus", filePath: "songs/15.mp3", coverPath: "covers/Anjaan-Jani.jpg" },
    { songName: "Ashes(2020) - Stellar", filePath: "songs/16.mp3", coverPath: "covers/Ashes-Stellar.jpg" },
    { songName: "Back To The Future-Bastille", filePath: "songs/18.mp3", coverPath: "covers/Back To The Future-Bastille.jpg" },  
    { songName: "Burning Down - EYK", filePath: "songs/22.mp3", coverPath: "covers/Burning Down-Everyone You Know.jpg" },       
    { songName: "Desire-Years & Years", filePath: "songs/27.mp3", coverPath: "covers/Desire-Years & Years.jpg" },
    { songName: "El Melouk-Ahmed Saad", filePath: "songs/32.mp3", coverPath: "covers/El Melouk-Ahmed Saad.jpg" },
    { songName: "Excuses-Ap Dhillon", filePath: "songs/33.mp3", coverPath: "covers/Excuses-Ap Dhillon.jpg" },
    { songName: "Formula - Labrinth", filePath: "songs/34.mp3", coverPath: "covers/Formula-Labrinth.jpg" },
    { songName: "Goosebumps-Travis Scott", filePath: "songs/35.mp3", coverPath: "covers/Goosebumps-Travis Scott.jpg" },
    { songName: "Head First-Christian French", filePath: "songs/36.mp3", coverPath: "covers/Head First-Christian French.jpg" },
    { songName: "Heartburn(Remix) - Wafia", filePath: "songs/37.mp3", coverPath: "covers/Heartburn-Wafia.jpg" },
    { songName: "Honeypie - JAWNY", filePath: "songs/38.mp3", coverPath: "covers/Honeypie-JAWNY.jpg" },    
    { songName: "Kana Yaari Kaifi Khalil", filePath: "songs/41.mp3", coverPath: "covers/Kana Yaari Kaifi Khalil.jpg" },
    { songName: "Lights Down Low-MAX", filePath: "songs/46.mp3", coverPath: "covers/Lights Down Low-MAX.jpg" },
    { songName: "Love Nwantiti-CKay", filePath: "songs/47.mp3", coverPath: "covers/Love Nwantiti-CKay.jpg" },
    { songName: "Michael Jackson-Lovin You", filePath: "songs/49.mp3", coverPath: "covers/Loving You-Michael Jackson.jpg" },
    { songName: "Maikada - M. Samie", filePath: "songs/51.mp3", coverPath: "covers/Maikada-Muhammad Samie.jpg" },
    { songName: "Mushk OST-Ali Zafar", filePath: "songs/52.mp3", coverPath: "covers/Mushk OST-Ali Zafar.jpg" },
    { songName: "Mystery of Love-Sufjan Stevens", filePath: "songs/54.mp3", coverPath: "covers/Mystery of Love-Sufjan Stevens.jpg" },
    { songName: "Passive-The Perfect Circle", filePath: "songs/56.mp3", coverPath: "covers/Passive-The Perfect Circle.jpg" },
    { songName: "Peaky Blinder-Otnicka", filePath: "songs/57.mp3", coverPath: "covers/Peaky Blinder-Otnicka.jpg" },
    { songName: "The Hot Stepper-Ini Kamoze", filePath: "songs/66.mp3", coverPath: "covers/The Hot Stepper-Ini Kamoze.jpg" },
    { songName: "Vibe(2021) -Herman", filePath: "songs/67.mp3", coverPath: "covers/Vibe-Herman.jpg" },
    { songName: "World Is Mine-Samm Henshaw", filePath: "songs/71.mp3", coverPath: "covers/World Is Mine-Samm Henshaw.jpg" },
    { songName: "Без тебя я не я-JONY", filePath: "songs/72.mp3", coverPath: "covers/Без тебя я не я-JONY.jpg" },
    { songName: "Right Round - Flo Rida", filePath: "songs/59.mp3", coverPath: "covers/Right Round - Flo Rida.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


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

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
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
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})