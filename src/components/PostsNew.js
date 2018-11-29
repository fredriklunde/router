import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import './PostNew.css';

class PostsNew extends React.Component {
    renderField(field){
        const { meta: { touched, error }} = field;
        const validation = `${error && touched ? 'is-invalid' : 'is-valid'}`
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className={`form-control ${touched ? validation : ''}`}
                    type={field.text}
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values){
        console.log(values);
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    type="text"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    };
}

function validate(values) {
    const errors = {};

    if(!values.title){
        errors.title = "Enter a title";
    }
    else if(values.title.length < 3){
        errors.title = "The title need to be longer than 3 characters";
    }
    if(!values.categories){
        errors.categories = "Enter some categories";
    }
    if(!values.content){
        errors.content = "Enter some content please";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);