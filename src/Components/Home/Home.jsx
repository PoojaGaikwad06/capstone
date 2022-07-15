import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeCollection from "./HomeCollection/HomeCollection";
import HomeConquer from "./HomeConquer/HomeConquer";
import HomeTiles from "./HomeTiles/HomeTiles";




const Home = () => {
    return (
            <section className="main-home-banner">
                <HomeBanner />
                <HomeTiles/>
                <HomeCollection/>
                <HomeConquer/>
            </section>
            
    )
}

export default Home;