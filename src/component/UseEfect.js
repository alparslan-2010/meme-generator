import React from "react";


export default function UseEfect() {


    const [count, setCount] = React.useState(0);

    console.log("renered")

    React.useEffect(function(){


        console.log("use efect evecuted")  
    } , [count])


    

    return (

        <>
            <div>

                <h2> this  count is {count}</h2>
                <button onClick={() => setCount(prevCount => prevCount +1   )}> add </button>

            </div>

        </>
    )
}