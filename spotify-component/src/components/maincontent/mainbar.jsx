import './mainbar.css'

function Mainbar () {
    const data =[
        { id: 1, title: 'Liked Songs', img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true"},
        { id: 2, title: 'Neffex Playlist', img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true"},
        { id: 3, title: 'K/DA', img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true"},
        { id: 4, title: 'Liked Songs', img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true"},
        { id: 5, title: 'Dance/Electronic', img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true"}

    ];
    const newdata =[
    {id: 1, title: 'Weekly Motivatio..', title2: 'Ren Ina Scot', img_link:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true" },
    {id: 2, title: 'Weekly Motivatio..', title2: 'Ren Ina Scot', img_link:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true" },
    {id: 3, title: 'Weekly Motivatio..', title2: 'Ren Ina Scot', img_link:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true" },
    {id: 4, title: 'Weekly Motivatio..', title2: 'Ren Ina Scot', img_link:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true" },
    {id: 5, title: 'Weekly Motivatio..', title2: 'Ren Ina Scot', img_link:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true" },
    {id: 6, title: 'Weekly Motivatio..', title2: 'Ren Ina Scot', img_link:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true" }
    ];

    return (
        <>
          <div className='part-2'>
    <div className='sec-1'>
    <div className='arrow'>
      <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true" height={30} alt="Arrow" /></div>
    </div>
    <div className='userprofile'> <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true" height={30} alt="User Profile" /></div>
    </div>

    <div className='morning'>Good Morning</div>
  
    


        
            
            
            <div className="playlist">
            {data.map((i) => (
                <div key={i.id} className='flip-1'>
                    
                    <img src={i.img_url} alt="" height={58} />
                    <div className='flip-text'> {i.title}</div>
                    
                </div>
            ))}
            </div>
        
        


     {/* <div className='playlist'>
      <div className='flip-1'>
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true" height={58} alt="Liked Icon" />
        <div className='flip-text'>Liked Songs</div>
      </div>

      <div className='flip-1'>
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true" height={58} alt="Liked Icon" />
        <div className='flip-text'>Neffex Playlist</div>
      </div>
      <div className='flip-1'>
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true" height={58} alt="Liked Icon" />
        <div className='flip-text'>K/DA</div>
      </div>

      <div className='flip-1'>
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true" height={58} alt="Liked Icon" />
        <div className='flip-text'>Liked Songs</div>
      </div>

      <div className='flip-1'>
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true" height={58} alt="Liked Icon" />
        <div className='flip-text'>Dance/Electronic </div>
      </div>
     </div> */}

     <div className='like-text'>Shows you might like</div>

     <div className="sec-3">
        {newdata.map((j) => (
            <div key={j.id} className="card-1">
             <img src={j.img_link} alt="" height={130} width={130} />
             <div  id="card-text-1">{j.title}</div>
             <div  id="card-text-2">{j.title2}</div>
            </div>
        ))}
     </div>

     <div className='sec-3'>
      <div className='card-1'>
        <img id='card-img' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true" height={130} width={130} alt="Singer Image" />
        <div id='card-text-1'>Weekly Motivatio..</div>
        <div id='card-text-2'>Ren Ina Scot</div>
      </div>

      <div className='card-1'>
        <img id='card-img' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true" height={130} width={130} alt="Singer Image" />
        <div id='card-text-1'>Weekly Motivatio..</div>
        <div id='card-text-2'>Ren Ina Scot</div>
      </div>

      <div className='card-1'>
        <img id='card-img' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true" height={130} width={130} alt="Singer Image" />
        <div id='card-text-1'>Weekly Motivatio..</div>
        <div id='card-text-2'>Ren Ina Scot</div>
      </div>

      <div className='card-1'>
        <img id='card-img' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true" height={130} width={130} alt="Singer Image" />
        <div id='card-text-1'>Weekly Motivatio..</div>
        <div id='card-text-2'>Ren Ina Scot</div>
      </div>

      <div className='card-1'>
        <img id='card-img' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true" height={130} width={130} alt="Singer Image" />
        <div id='card-text-1'>Weekly Motivatio..</div>
        <div id='card-text-2'>Ren Ina Scot</div>
      </div>


      <div className='card-1'>
        <img id='card-img' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true" height={130} width={130} alt="Singer Image" />
        <div id='card-text-1'>Weekly Motivatio..</div>
        <div id='card-text-2'>Ren Ina Scot</div>
      </div>

     </div>
  </div>
        </>
    )
}
export default Mainbar