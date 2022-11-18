import React from 'react';
import Data from '../Data';

const Journal = () => {
    return (
        <>
            <div className="heading">

                <div className="head">
                    <p>---------</p>
                    <h1>Journals</h1>
                    <p>---------</p>
                </div>

                <div className="journals">
                    {
                        Data.map((elem) => {
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
export default Journal;