import React from "react";
import styled from 'styled-components';

import { Header, Footer, ReviewCard } from '../Organisms'
import { Filter } from '../Molecules'
import filters from '../../assets/static_data/articleFilters'

const HomeTemplate = () => {

    const Section = styled.section`
        margin-top: 50px;
        margin-bottom: 120px;
    `

    const Books = [1, 2, 3]

    return (
        <div>
            <Header />
            <Section>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 px-4">
                            {filters.length > 0 && filters.map((filter, i) => <Filter filter={filter} key={i} />)}
                        </div>
                        <div class="col-lg-8 px-4">
                            {Books.map((book, i) => <div class="mb-3"><ReviewCard key={i} /></div>)}
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </div>
    )

}

export default HomeTemplate