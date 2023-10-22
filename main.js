import './style.css'
fetch('https://leonardoapi.onrender.com/music')
    .then((res) => res.json())
    .then((resJson) => {
        let tracklist = document.getElementById
        ('track-list')
        
        resJson.map((song) => {

            tracklist.innerHTML+=`
            <div  class="box color">
                    <img src="${song.path.front}" alt="">
                    <h3>"${song.title}"</h3>
                    <p>"${song.author}"</p>
                  </div>
            `


        })
        
   })
