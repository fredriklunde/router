import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {
    renderField(field){
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.text}
                    {...field.input}
                />
                {field.meta.error}
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