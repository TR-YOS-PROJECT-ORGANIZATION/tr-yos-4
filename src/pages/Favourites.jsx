// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Card1 from '../components/card/Card'
import WorkUs from '../components/workUs/WorkUs'
import Footer from '../footer/Footer'

function Favourites() {
    return (
        <div>
            <div>
                <div >
                    <h2 className="w-full h-36 bg-green-dark pl-28 pt-8 text-5xl text-left text-white-cream font-bold" >
                        {/*  */}
                        My Favorite Departments
                    </h2>
                </div>

                <div>
                    <Card1 />
                </div>
                <WorkUs />
            </div>
        </div>
    )
}

export default Favourites;