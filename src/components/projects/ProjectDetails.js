import React from 'react'

export default function ProjectDetails(props) {
    const id=props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0.2">
                <div className="card-content">
                    <span className="card-title">Project Title-{id}</span>
                    <p>Stet et labore ipsumKasd voluptua est dolore consetetur gubergren et no, amet labore invidunt kasd invidunt justo lorem. Diam diam dolore amet ipsum ut lorem sit, ipsum dolor ipsum ut est sed. Sanctus ea est ipsum et sed amet consetetur, sadipscing dolor voluptua eirmod vero sed dolore. Sadipscing voluptua erat gubergren vero diam,. erat gubergren sed rebum. Diam rebum diam et rebum sed labore amet stet, erat est tempor ipsum dolor est eirmod diam dolores, erat tempor gubergren kasd sea. Lorem nonumy ipsum gubergren.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Aditi Sharma</div>
                    <div>27 June 2020, 1.44 am</div>
                </div>
            </div>
            
        </div>
    )
}
