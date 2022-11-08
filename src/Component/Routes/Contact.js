

const Contact=()=>{
    return(
        <>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112124.13031199973!2d76.90980190867059!3d28.573393787166488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a9c31eec4e1%3A0x39493976cba4c89a!2sDwarka%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1667890693171!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
        <form action="https://formspree.io/f/meqdvowl" method="post">
            <input type="text" placeholder="Enter your name" name="username" required/>
            <input name="Email" id="email" type="email"placeholder="Enter your email" required />
            <textarea></textarea>
            <button type="submit">Submit</button>
</form>
        </div>
        </>
    )
}

export default Contact;