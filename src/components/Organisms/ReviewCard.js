import React from 'react'

// Styles
import styled from 'styled-components';
import color from '../../assets/styles/color'

// Components
import Profile from '../Moleclues/Profile'

const ReviewCard = () => {

    const Card = styled.div`
        border: 1px solid rgba(46,171,52,0.3);
        box-shadow: 0px 0px 33px -16px rgba(0,0,0,0.75);
        border-radius: 13px;
        padding: 20px;
    `

    const BookImg = styled.img`
        width: 100%;
        max-height: 250px;
        object-fit: cover;
    `

    const Button = styled.button`
        background-color: ${color.bg.light_green};
        width: 100%;
        padding-top: 6px;
        padding-bottom: 6px;
        border: 0px;
        border-radius: 5px;
        &:hover {
            background-color: ${color.bg.green};
        }
    `

    return (
        <Card class="pt-5">
            <div class="row">

                <div class="col-sm-4">
                    <BookImg src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                </div>

                <div class="col-sm-8 mt-3 mt-sm-0">

                    <h4>Milk and Honey</h4>
                    <hr style={{backgroundColor: 'rgba(46,171,52,0.2)'}} />

                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper, lacus et hendrerit vestibulum, metus ligula volutpat est, nec vulputate urna quam vitae nunc.
                    </p>
                    <hr style={{backgroundColor: 'rgba(46,171,52,0.2)'}} />

                    <div class="row">
                        <div class="col-md-6">
                            <Profile role="Reviewer" />
                        </div>
                        <div class="col-md-6 mt-3 mt-md-0">
                            <Profile role="Writer" />
                        </div>
                    </div>

                    <div class="mt-2">
                        <Button>Read more</Button>
                    </div>

                </div>
            </div>
        </Card>
    )
}

export default ReviewCard