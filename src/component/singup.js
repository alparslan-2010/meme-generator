import React from "react";
import "../styles/Singup.css"

function Singup() {

    //useState

    const [email, setEmail] = React.useState("")

    const [password, setPassword] = React.useState("");

    const [paswordConfirm, setPasswordConfirm] = React.useState("");

    const [checkbox, setCheckbox] = React.useState(false);

    //onChange

    function handleEmail(event) {


        setEmail(event.target.value);

    }

    function handlePassword(event) {

        setPassword(event.target.value);
    }


    function handleConfirmPassword(event) {

        setPasswordConfirm(event.target.value);
        ;

    }

    function handleCheckbox(event) {

        setCheckbox(event.target.checked);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (password === paswordConfirm) {

            alert("successfult");

        }

        else {

            alert("tekrar dene");
        }

    }

    return (

        <>

            <div className="form-container">

                <form className="form" onSubmit={handleSubmit}>

                    <input
                        type="email"
                        placeholder="email adresse"
                        className="form--input"
                        value={email}
                        onChange={handleEmail}
                        name=""
                    />


                    <input
                        type="password"
                        placeholder="pasword"
                        className="form--input"
                        value={password}
                        onChange={handlePassword}


                    />

                    <input
                        type="password"
                        placeholder="pasword"
                        className="form--input"
                        value={paswordConfirm}
                        onChange={handleConfirmPassword}


                    />

                    <input
                        type="checkbox"
                        name="checkbox"
                        className="form--input"
                        checked={checkbox}
                        onChange={handleCheckbox}


                    />

                    <label>I want to join check</label>


                    {/* i wANT TO JOIN NEWSLETER 
                    
                    CHECK BOX 
                    STATE DEGISKENLERI
                    ONCHANGE FONKSIYORMNU
                    INPUT HTMLE JSX 
                    
                    */}

                    <button className="form--submit">submit</button>

                </form>



            </div>
        </>
    )
}

export default Singup;