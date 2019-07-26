import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import '../../styles/CommentList.css'

const CommentList = ({comments})=>{
    return(
        <div className="CommentList">
            <div className="CommentList-title">Comments</div>
           {
                comments &&
                comments.map(comment=>{
                    return(
                        comment.id &&
                        <Fragment key={comment.id}>
                            <div className="Comment-wrapper">
                                <div className="Comment-comment">{comment.comment}</div> 
                                <div className="Comment-by">commented by <span className="Comment-user">{comment.commentBy}</span></div> 
                                <div className="Comment-at">{moment(comment.commentedAt).calendar()}</div> 
                            </div>
                        </Fragment>
                    )
                }
            )
        }
        </div>
    )
}


const mapStateToProps = (state)=>{
    return{
        comments: state.comment.comments,
    }
};

export default connect(mapStateToProps)(CommentList)
