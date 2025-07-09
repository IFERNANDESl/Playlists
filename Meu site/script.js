const playlistItems = document.querySelectorAll('#playlist li');
    const audioPlayer = document.getElementById('audioPlayer');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const toggleTheme = document.getElementById('toggleTheme');
    const searchInput = document.getElementById('search');

    let currentIndex = 0;

    function playSong(index) {
      const item = playlistItems[index];
      if (item) {
        audioPlayer.src = item.getAttribute('data-src');
        audioPlayer.play();
        currentIndex = index;
      }
    }

    playlistItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        playSong(index);
      });
    });

    nextBtn.addEventListener('click', () => {
      const nextIndex = (currentIndex + 1) % playlistItems.length;
      playSong(nextIndex);
    });

    prevBtn.addEventListener('click', () => {
      const prevIndex = (currentIndex - 1 + playlistItems.length) % playlistItems.length;
      playSong(prevIndex);
    });

    toggleTheme.addEventListener('click', () => {
      document.body.classList.toggle('light');
    });

    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      playlistItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? '' : 'none';
      });
    });
