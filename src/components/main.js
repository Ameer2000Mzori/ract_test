import "./main.css";

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
            <p className="mian-p">
              <strong>Watchfire :</strong> A blazing beacon illuminating the
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

    </>
  );
}

export default main;
