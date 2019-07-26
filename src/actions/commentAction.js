import firebaseConfig from '../firebaseConfig'

export const postComment = (comment)=>{
    return (dispatch, getState)=>{
        let postedComment = {};
        firebaseConfig.firestore().collection('users').doc(comment.postedByUID).get()
            .then(doc=>{
                postedComment = {
                    comment: comment.comment,
                    commentBy: `${doc.data().firstName} ${doc.data().lastName}`,
                    projectIdForThisComment: comment.projectIdForThisComment ,
                    commentedAt: new Date()
                }
                return  firebaseConfig.firestore().collection('projects')
                .doc(comment.projectIdForThisComment).collection('comments')
                .add({
                    ...postedComment
                });
            })
            .then(()=>{
                dispatch({
                    type: "POST_COMMENT",
                    postedComment
                });
                dispatch({
                    type: "INCREMENT_REDUCER_WORK"
                });
            })
            .catch(err=>{
                console.log(err);
            });
    };
};

export const setComments = (projectId)=>{
    return (dispatch, getState)=>{
        firebaseConfig.firestore().collection('projects').doc(projectId).collection('comments')
        .orderBy('commentedAt', 'desc')
        .get()
        .then(querySnapshot=>{
            let comments = [];
            querySnapshot.forEach(comm=>{
                comments.push({...comm.data(), id: comm.id});
            });
            let returnedComments = [];
            comments.forEach(comm=>{
                comm.commentedAt = comm.commentedAt.toDate();
                returnedComments.push(comm);
            })
            dispatch({
                type: "RESET_COMMENTS"
            });
            dispatch({
                type: "SET_COMMENTS",
                comments: returnedComments
            });
        })
        .catch(err=>{
            console.log(err);
        })
        }
};


