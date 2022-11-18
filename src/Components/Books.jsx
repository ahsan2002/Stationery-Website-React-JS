import React from 'react';
import Data1 from '../Data1';

const Books = () => {
  return (
    <>
            <div className="heading" style={{backgroundColor:"lightblue"}}>

                <div className="head">
                    <p>---------</p>
                    <h1>New Arrivals</h1>
                    <p>---------</p>
                </div>

                <div className="journals">
                    {
                        Data1.map((elem) => {
                            return (
                                <>
                                    <div className="first">
                                        <img width="200px" height="150px" src={elem.img} alt="" />
                                        <p>{elem.des}</p>
                                        <p><b>{elem.price}</b></p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
  )
}

export default Books;