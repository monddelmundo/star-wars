import React from 'react'

const About = (props) => {
    return (
        <h2>About Page for {props && props.match.params.userId}</h2>
    )
}

export default About;