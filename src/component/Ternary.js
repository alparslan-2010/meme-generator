import React from "react";


export default function Ternary() {
    const [mesaages, setMesaages] = React.useState(["first mesage", "second mesage"]);

    function body() {

        return (

            <>

                {
                    mesaages.length === 0 ?
                        <h1>no messages</h1> :
                        <h1 >you have {mesaages.length} unread {mesaages.length>1 ? "messages " : " message"}</h1>

                }
            </>
        )
    }
    return (
        <>
            {body()}

        </>



    )


}