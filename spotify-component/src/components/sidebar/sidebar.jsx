import './sidebar.css'
// import SpotifyLogo './assets/'

function Sidebar () {
    return(
        <>
          <div className='part-1'>
    <div className='spofity-logo'>
      <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true" height={60} alt="spotify-logo" />
    </div>
    <div className='l-1'>
      <img id='l-img' src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Home.png" alt="Home-Icon" />
      <div>Home</div>
    </div>
    <div className='l-1'>
      <img id='l-img' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true" alt="Search-Icon" />
      <div>Search</div>
    </div>
    <div className='l-1'>
      <img id='l-img' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true" alt="Library-Icon" />
      <div>Your Library</div>
    </div>

    <div className='l-2' id='lop-2'>
      <img id='l2-img' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true"  alt="Create Playlist Icon" />
      <div>Create Playlist</div>
    </div>

    <div className='l-2'>
      <img id='l2-img' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Group%202.png?raw=true"  alt="Create Playlist Icon" />
      <div>Liked Songs</div>
    </div>

    <div className='l-2'>
      <img id='l2-img' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true" alt="Create Playlist Icon" />
      <div>Your Episode</div>
    </div>

    <div className='list'>
    <div>FAV</div>
    <div>Daily Mix</div>
    <div>Discover Weekly</div>
    <div>Malayalam</div>
    <div>Dance/Electronix Mix</div>
    <div>EDM/Popular</div>
    </div>

    <div className='install'>
     <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true" height={25} alt="Installl Icon" /></div>
     <div>Install App</div>
    </div>
  </div>
        </>
    )
}
export default Sidebar