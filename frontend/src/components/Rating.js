import React from 'react'

// we destructured value and text like this 
const Rating = ({ value, text }) => {
    return (
        <div>
            <span>
                {/* If the ratings value is greater or equal to 1, then show a full star. Else, If it is greater 
                than or equal to 0.5, show a half star. Else, show an empty star */}
                <i className = {value >=1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                {/* If the ratings value is greater or equal to 1, then show a full star. Else, If it is greater 
                than or equal to 0.5, show a half star. Else, show an empty star */}
                <i className = {value >=2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                {/* If the ratings value is greater or equal to 1, then show a full star. Else, If it is greater 
                than or equal to 0.5, show a half star. Else, show an empty star */}
                <i className = {value >=3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                {/* If the ratings value is greater or equal to 1, then show a full star. Else, If it is greater 
                than or equal to 0.5, show a half star. Else, show an empty star */}
                <i className = {value >=4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                {/* If the ratings value is greater or equal to 1, then show a full star. Else, If it is greater 
                than or equal to 0.5, show a half star. Else, show an empty star */}
                <i className = {value >=5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span></span>
        </div>
    )
}

export default Rating
