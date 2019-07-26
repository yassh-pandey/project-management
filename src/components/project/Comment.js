import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {postComment, setComments} from '../../actions/commentAction'
import '../../styles/Comment.css'
function Comment(props) {
    const [getComment, setComment] = useState({"comment": '', "postedByUID": '', 
    "projectIdForThisComment": ''});
    useEffect(()=>{
        setComment({...getComment, "postedByUID": props.postedByUID, 
        "projectIdForThisComment": props.projectIdForThisComment});
    }, [props, getComment]);
    const handleChange = (e)=>{
        document.querySelector('.textarea-placeholder').classList.add('opacityZero');
        if(e.target.value.length===1){
            e.target.value = e.target.value.toUpperCase();
        }
        setComment({...getComment, comment: e.target.value});
    };
    const handleBlur = (e)=>{
        if(e.target.value.length===0){
            document.querySelector('.textarea-placeholder').classList.remove('opacityZero');
            document.querySelector('.Comment-bottom-line').classList.remove('animateComment');
            document.querySelector('.Comment-bottom-line').classList.add('removeAnimateComment');
        }
    };
    const handleFocus = (e)=>{
        document.querySelector('.Comment-bottom-line').classList.add('animateComment');
        document.querySelector('.Comment-bottom-line').classList.remove('removeAnimateComment');
    }
    const handleClick = (e)=>{
        e.preventDefault();
        setComment(getComment);
        props.postComment(getComment);
        props.setComments(props.projectIdForThisComment);
        setComment({...getComment,comment: ""});
    };
   return(
        <div className="Comment">
            <div className='textarea-style-wrapper'>
                <textarea onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} value={getComment.comment}></textarea>
                <div className="textarea-placeholder">Add a public comment...</div>
                <div className="Comment-bottom-line"></div>
            </div>
            <div className="Comment-post-button-wrapper">
                    <button className="Comment-post-button" onClick={handleClick}>Comment</button>
            </div>
            <div>
                Refresh page to see the comment being added...    
            </div>
        </div>  
   )
}
const mapDispatchToProps = (dispatch, ownProps)=>{
    return{
        "postComment": (comment) => {
            return(
                dispatch(postComment(comment))
            )
        },
        setComments: (projectId)=>dispatch(setComments(projectId))
    }
}
export default connect(null,mapDispatchToProps)(Comment)
