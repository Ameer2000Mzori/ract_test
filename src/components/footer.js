import "./footer.css"

function Footer(){
    return(
        <>
        <section className="imgs-links">
            <h1 className="links-tittle-h1">FOLLOW US ON </h1>
            <div className="img-face"><img className="img-footer" src="\logos\fblogo.png"></img></div>
            <div className="img-insta"><img className="img-footer" src="\logos\instalogo.png"></img></div>
        </section>
        <section className="footer-all">
        <section className="footer-1">

            <div className="RESOURCES-footer">
            <div className="footer-div-tittle">RESOURCES</div>
            <ul>
                <li><a href="#">Appolication</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
            </div>
            <div className="PRICING-footer">
            <div  className="footer-div-tittle">PRICING</div>
            <ul>
                <li><a href="#">Overview</a></li>
                <li><a href="#">Promotions</a></li>
            </ul>
            </div>
            <div className="COMPANY-footer">
            <div  className="footer-div-tittle">COMPANY</div>
            <ul>
                <li> <a href="#">About us</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            </div>
            <div className="SOCIAL-footer">
            <div  className="footer-div-tittle">SOCIAL</div>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instgram</a></li>
            </ul>
            </div>
        </section>
        </section>
        
        </>

    );
}
export default Footer;