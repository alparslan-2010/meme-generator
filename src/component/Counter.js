import React from "react";

import "../styles/Counter.css";

function Counter() {


    const [count, setCount] = React.useState(0);

    function add() {

        setCount(count + 1)
    }


    function subtarct() {

        setCount(count - 1)
    }


    function reset() {

        setCount(0)
    }



    return (

        <div className="counter">
            <button className="counter-minus" onClick={subtarct}>-</button>
            <div className="counter--count">

                <h1>{count}</h1>

            </div>

            <button className="counter--plus" onClick={add}> + </button>


            {/* reset butonu fonk bagla ve resetle */}
            <button onClick={reset}>res</button>



        </div>


    )
}

export default Counter;