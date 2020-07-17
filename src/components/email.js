import React, {useState} from 'react'

const Email = () => {
    const [sender,setSender]=useState('');
    const [subject,setSubject]=useState('');
    const [message,setMessage]=useState('');



    const handleMailTo = () => {
        console.log(sender)
        console.log(subject)
        console.log(message)
    }
    

    return(
<div className="column is-half">
    <form>
        <div className="field">
            <label class="label">Email address</label>
            <div className="control">
                <input className="input" type="text" placeholder="Youremail@example.com" onChange={e=> setSender(e.target.value)}></input>
            </div>
        </div>
        <div className="field">
            <label class="label">Subject</label>
            <div className="control">
                <input className="input" type="text" placeholder="Subject of email here" onChange={e=> setSubject(e.target.value)}></input>
            </div>
        </div>
        <div className="field">
            <label class="label">Message</label>
            <div className="control">
                <input className="input" type="textare" placeholder="Type the body of your email message here"onChange={e=> setMessage(e.target.value)}></input>
            </div>
        </div>
        <button className="button is-dark" onClick={handleMailTo} >Submit</button>
    </form>
</div>
    )
}

export default Email

