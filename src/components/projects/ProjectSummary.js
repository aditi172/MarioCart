import React from 'react';

const ProjectSummary=({project})=> {
    return(
        <div className="card z-depth-0.5 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span class="card-title">{project.title}</span>
                <p>Posted by Aditi Sharma</p>
                <p className="grey-text text-lighten-1">26 June 2020</p>
            </div>
        </div>
    )
}

export default ProjectSummary;