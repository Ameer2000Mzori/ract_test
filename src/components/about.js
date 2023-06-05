import "./about.css"


function About(){

    return (
    <>
        <section itemID='#about-all'>
        <section className="about-part-1">
            <h1 className="about-h1">ABOUT THE GAME</h1>
        </section>

        <section className="about-part-2">
        <div>
            <h1 className="about-2-h1">Survival Mode</h1>
            <p className="about-2-p"> Immerse yourself in a relentless survival game. In a world cloaked in darkness, face lurking threats, unravel mysteries, and fight for survival. Explore, scavenge, and adapt as danger prowls, testing your wits and resolve. Trust no one. Will you conquer the night?</p>
        </div>
        <div><img className="about-2-img" src="https://cdn.akamai.steamstatic.com/steam/apps/383870/ss_570bc87288b5ab4e235ba270e1d2ae30312d5b82.1920x1080.jpg?t=1641234515"></img></div>
        </section>
        <section className="about-part-3">
        <div><img className="about-3-img" src="https://c4.wallpaperflare.com/wallpaper/823/104/981/firewatch-wallpaper-preview.jpg"></img></div>
        <div>
            <h1 className="about-3-h1">Short Story</h1>
            <p className="about-3-p">In a post-apocalyptic world, humanity struggles to survive. You play as a lone survivor, navigating desolate landscapes haunted by ruthless factions and unforgiving elements. Uncover the truth behind the cataclysm, gather resources, forge alliances, and make life-or-death choices. Can you rise above the chaos and restore hope, or will you succumb to the darkness that engulfs all?</p>
        </div>
        </section>
        <section className="about-part-2">
        <div>
            <h1 className="about-2-h1">THE Campo Santo Team</h1>
            <p className="about-2-p">In the dystopian aftermath, a visionary team emerged, determined to reignite hope. Combining their skills, they crafted Watchfire, an immersive survival game that mirrored the harsh reality. Drawing from their own experiences, they designed a world of danger and resilience, challenging players to adapt and overcome. Watchfire became a beacon, uniting survivors, fostering community, and reminding them that even in the darkest times, unity and resilience can lead to a brighter future.</p>
        </div>
        <div><img className="about-2-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLE7hCOen-p2CnpVNLNkBSZ5zrJWoVn9MNg&usqp=CAU"></img></div>
        </section>
        </section>
        
        
    </>

    );
}

export default About;