import React, { Component } from 'react';
import {createProject} from '../../store/actions/projectActions';
import { connect } from 'react-redux';
// import projectReducer from '../../store/reducers/projectReducers';

class CreateProject extends Component {
   
    state={
        title:'',
        content:'',
        fileUrl: null,
        file: null,
        filename: null,
        user:'',
        timestamp:''
    }
    handleChange=(e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    uploadfile=(e)=> {
        const file=e.target.files[0];
        this.setState({
            fileUrl: URL.createObjectURL(file),
            file,
            filename: file.name
        })
        document.querySelector("#file").onchange =()=>{
        document.querySelector("#file-name").textContent = this.files[0].name;
        }
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        console.log(this.props)
        let d=new Date();
        let year=d.getFullYear();
        let month=d.getMonth();
        let date=d.getDate();
        let sub=date+"."+month+"."+year;
        this.state.timestamp=sub;
        this.state.user=this.props.auth.user.username;
        console.log(this.props);
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
                                 Add File?<input type="file" id="file" onChange={this.uploadfile}></input>
                                 <label id="file-name"></label>
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