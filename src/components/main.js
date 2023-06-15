import "./main.css";
import About from "./about";

function main() {
  return (
    <>

      <section className="main-1">
        <section className="main">
          <div>
            <iframe
              className="main-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WexJcqgismA?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <img className="main-video-img" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Firewatch_Logo.png"></img>
            <p className="mian-p">
              A blazing beacon illuminating the
              night, signaling danger or calling for aid, igniting tales of
              adventure and camaraderie."
            </p>
            <a className="main-a" href="#">
              Buy on steam now{" "}
            </a>
          </div>
          <div></div>
        </section>
      </section>
      <About></About>

    </>
  );
}

export default main;
