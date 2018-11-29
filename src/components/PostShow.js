import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostShow extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    render() {
        return (
            <div>
                PostShow
            </div>
        );
    }   
}

function mapStateToProps({ posts }) {

}

export default connect(mapStateToProps, { fetchPost })(PostShow);