import React, { Component } from 'react';
import {createProject} from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import projectReducer from '../../store/reducers/projectReducers';

class CreateProject extends Component {
    state={
        title:'',
        content:'',
        file:''
    }
    handleChange=(e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit=(e)=> {
        e.preventDefault();
        this.props.createProject(this.state);
        document.getElementById("form").reset();         
    }
    render() {
        return (
            <div className="container section">
                <div className="formholder section">
                        <form onSubmit={this.handleSubmit} className="white niche" id="form">
                            <h3 className="grey-text text-darken-3">CREATE PROJECT</h3>
                            <div className="input-field">
                                <label htmlFor="title" placeholder="TitleOfTheProject">Title</label>
                                <input id="title" type="text" onChange={this.handleFileChange}></input>
                            </div>

                            <div className="input-field">
                                <label htmlFor="content">Project Content...</label>
                                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                            </div>

                            <div className="btn btn-file input-field pink lighten-1 z-depth-0">
                                 Add File?<input type="file" id="file" onChange={this.handleChange}></input>
                            </div>

                            <div className="input-field">
                                <button className="btn blue darken-3 z-depth-0 left">Create</button>
                            </div>
                            
                        </form>
                    </div>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=> {
    return({
        createProject: (project)=>dispatch(createProject(project))
    })
}

export default connect(null, mapDispatchToProps)(CreateProject);