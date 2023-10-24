import './style.css'
fetch('https://leonardoapi.onrender.com/music')
    .then((res) => res.json())
    .then((resJson) => {
        let tracklist = document.getElementById
        ('track-list')
        
        resJson.map((song) => {
            

            const div = document.createElement('div')
            div.classList.add(
                'box',
                'color'
            )
            div.innerHTML = `
                <img src="${song.path.front}" alt="">
                <h3>"${song.title}"</h3>
                <p>"${song.author}"</p>
            `
            div.addEventListener('click', () => {
                console.log('Click sobre: ' + song.title)
                    document.getElementById('audio')
                        .setAttribute('src', song.path.audio)

                        document.getElementById('front')
                .setAttribute('src', song.path.front)
        
            })
            // Finalment lo agregas al tracklist usando appendChild
            tracklist.appendChild(div)


        })
        
   })
