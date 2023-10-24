import './style.css'
fetch('https://leonardoapi.onrender.com/music')
    .then((res) => res.json())
    .then((resJson) => {
        let tracklist = document.getElementById
        ('track-list')
        
        resJson.map((song) => {

            // tracklist.innerHTML+=`
            //     <div  class="box color">
            //         <img src="${song.path.front}" alt="">
            //         <h3>"${song.title}"</h3>
            //         <p>"${song.author}"</p>
            //     +</div>
            // `

            // Recuerda que debes cambiar la manera de hacer el elemento

            // Ahora usas createElement
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
                // El evento lo creas dentro de este bloque de código
                console.log('Click sobre: ' + song.title)
            })
            // Finalment lo agregas al tracklist usando appendChild
            tracklist.appendChild(div)


        })
        
   })
