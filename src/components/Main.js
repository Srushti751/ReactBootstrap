import React, { Component } from 'react'
import FooterComp from './FooterComp'
import NavbarComp from './NavbarComp'
import SectionComp from './SectionComp'
import HotDeal from './HotDeal'
import InstagramComp from './InstagramComp'
import FamousItem from './FamousItem'
import FeaturedComp from './FeaturedComp'


class Main extends Component {
    render() {
        return (
            <body class="bg-light">
                <main>
                    {/* <NavbarComp/> */}
                    <SectionComp/>
                    <FeaturedComp/>
                    <HotDeal/>
                    <InstagramComp/>
                    <FamousItem/>
                    {/* <FooterComp/> */}
                </main>
            </body>
        )
    }
}

export default Main
