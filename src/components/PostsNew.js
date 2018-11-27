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
            </div>
        )
    }

    render(){
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    type="text"
                    component={this.renderField}
                />
            </form>
        );
    };
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);