import React from "react";

function Form() {
    //firrnamw

    const [firstName, setfirstName] = React.useState("")


    //email
    const [email, setEmail] = React.useState("")

    ///check box

    const [checkbox, setCheckbox] = React.useState(false)

    // radio

    const [status, setStatus] = React.useState("")

    //select 

    const[favBrand, setFavBrand] = React.useState("")


    //fonsiyonlar

    //first name
    function handleFirstName(event) {


        setfirstName(event.target.value);

    }

    //email
    function handleEmail(event) {


        setEmail(event.target.value);

    }
    // check boc
    function handleCheckbox(event) {


        setCheckbox(event.target.value);


        //radio buton


    }
    function handleRadio(event) {

        setStatus(event.target.value)

        //select fpnsiyonu

    }
    function handleSelect(event) {
        setFavBrand(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(event);
    }


    return (
        < form onSubmit={handleSubmit}>

            {/*  firstname */}
            <input

                type="text"
                placeholder="First name"
                value={firstName}
                onChange={handleFirstName}

            />




            {/* input box email */}
            <input

                type="email"
                placeholder="email"
                value={email}
                onChange={handleEmail}

            />
            {/* check bonx */}
            <input
                type="checkbox"
                onChange={handleCheckbox}
                checked={checkbox}
            />
            <input

                type="radio"
                value="fulltime"
                name="fulltime"
                checked={status === "fulltime"}
                onChange={handleRadio}
            />
            <label>full time</label>

            <input

                type="radio"
                value="parttime"
                name="parttime"
                checked={status === "parttime"}
                onChange={handleRadio}

            />

            <label>part time</label>



            <input
                type="radio"
                value="freelance"
                name="freelance"
                checked={status === "freelance"}
                onChange={handleRadio}

            />
            <label>freelance</label>
            <br/>

            <label>what is your favorite car?</label>
            <select

                value={favBrand}
                onChange={handleSelect}
                name="favBrand"

            >

                <option value="Bmw"> BMW</option>
                <option value="mercedes"> mercedes</option>
                <option value="audi"> audi</option>
                <option value="honda"> honda</option>
                <option value="volvo"> volvo</option>
            </select>


            <button>Submit </button>

        </form >
    )

}



export default Form;