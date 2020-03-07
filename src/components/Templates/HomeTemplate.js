import React from "react";

import { Header, Footer } from '../Organisms'
import { Filter } from '../Moleclues'

const HomeTemplate = () => {

    return (
        <div>
            <Header />
            <section class="container mt-3 mt-md-5">
                <div class="row">
                    <div class="col-lg-4 px-5">
                        <Filter />
                    </div>
                    <div class="col-lg-8">
                        aaaaaaaa
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )

}

export default HomeTemplate