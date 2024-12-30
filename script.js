const music1 = 'https://musicapi-19wk.onrender.com/music/myAPI'

        const getMusic = async() => {
            const loader = document.getElementById('loader');
            loader.style.display = 'block';

            const musicResponse = await fetch(music1)
                console.log( musicResponse);
                const newResponseMusic1 = await musicResponse.json()
                console.log(newResponseMusic1);
            setTimeout (() => {
                loader.style.display = 'none';
                newResponseMusic1.map((data) => {
                    display.innerHTML += `
                    <div class="grid-item">  
                         <img src="${data.songImage}" alt= "profile pics"  class="wid"/> 
                        <p>Title:${data.albumName}</p>
                         <p>Artist:${data.artistName}</p>
                        <audio src="${data.songUrl}" controls></audio>
                    </div>
                    `
                })
            }, 3000)
            
// albumName artistName songTitle songUrl songImage 
 
        }