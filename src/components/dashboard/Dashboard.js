import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render() {
        const { projects }= this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}></ProjectList>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications></Notifications>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=> {
    return({
        projects: state.project.projects
    })
}

export default connect(mapStateToProps)(Dashboard);
