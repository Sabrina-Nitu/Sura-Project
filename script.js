document.addEventListener("DOMContentLoaded", function() {
   
    const audioPlayer = document.getElementById('mood-audio');
    const albumCover = document.getElementById('album-cover');
    const songSelect = document.getElementById('song-select');
    let currentMood = ''; 
   
    const moodSongs = {
        morning: [
            { title: 'Morning', src: 'music/morning.mp3' },
            { title: 'Morning1', src: 'music/morning1.mp3' },
            { title: 'Morning2', src: 'music/morning2.mp3' }
        ],
        afternoon: [
            { title: 'Afternoon', src: 'music/afternoon.mp3' },
            { title: 'Afternoon1', src: 'music/afternoon1.mp3' },
            { title: 'Afternoon2', src: 'music/afternoon2.mp3' }
        ],
        evening: [
            { title: 'Evening', src: 'music/evening.mp3' },
            { title: 'Evening1', src: 'music/evening1.mp3' },
            { title: 'Evening2', src: 'music/evening2.mp3' }
        ],
        night: [
            { title: 'Night', src: 'music/night.mp3' },
            { title: 'Night1', src: 'music/night1.mp3' },
            { title: 'Night2', src: 'music/night2.mp3' }
        ]
    };

    const moodCovers = {
        morning: 'image/morning.jpg',
        afternoon: 'image/afternoon.png',
        evening: 'image/evening.jpg',
        night: 'image/night.webp'
    };
    function updateSongSelector(mood) {
        songSelect.innerHTML = '<option value="">Select a song</option>';
        moodSongs[mood].forEach((song, index) => {
            const option = document.createElement('option');
            option.value = index; 
            option.textContent = song.title;
            songSelect.appendChild(option);
        });
    }
    document.getElementById('morning').addEventListener('click', function() {
        playMood('morning');
    });
    document.getElementById('afternoon').addEventListener('click', function() {
        playMood('afternoon');
    });
    document.getElementById('evening').addEventListener('click', function() {
        playMood('evening');
    });
    document.getElementById('night').addEventListener('click', function() {
        playMood('night');
    });
    function playMood(mood) {
        currentMood = mood; 
        updateSongSelector(mood);
        albumCover.src = moodCovers[mood];
        audioPlayer.setAttribute('hidden', true); 
    }
    songSelect.addEventListener('change', function() {
        const selectedSongIndex = this.value;
        if (currentMood && selectedSongIndex !== "") {
            const selectedSong = moodSongs[currentMood][selectedSongIndex].src;
            audioPlayer.src = selectedSong;
            audioPlayer.play();
            audioPlayer.removeAttribute('hidden'); 
        }
    });
});
