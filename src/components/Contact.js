import "./Contact.css";
export default function Contact(){

    const submitHandler = () => {
        const contactH = document.getElementsByClassName('Contact-h1')[0]
        const contactForm = document.getElementsByClassName('Contact-form')[0]
        const contactP = document.getElementsByClassName('Contact-p')[0]

        contactForm.classList.add('deactive');

        const thankyou = 'thank you for sending us an email';
        const intouch = 'we will be in touch soon! thank you for contacting us and having interst in this game';
        contactH.classList.add('active');
        contactP.textContent= intouch;
        contactH.textContent=thankyou;
    }
    return(
        <>
        <section className="Contact-1">

            <section className="Contact-2">
                <div className="Contact-txts">
                <h1 className="Contact-h1">WELCOME TO CONTACT US PAGE</h1>
                <p className="Contact-p">thank you for trying to contact us! we will do our best to respond to any emails soon</p>
                </div>
        <form className="Contact-form">
            <lebel for='name'>Name</lebel>
            <input type="name" name ='name'></input>
            <lebel value='enter your name' id='enter your name'>Email</lebel>
            <input type='email'></input>
            <textarea className="Contact-texterea"></textarea>
            <button onClick={submitHandler}>Submit</button>
        </form>
        </section>
        </section>

        </>
    )
} 