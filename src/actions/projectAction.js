import firebase from '../firebaseConfig'
export const setInitState = ()=>{
    return (dispatch, getState)=>{
        const db = firebase.firestore();
        db.collection('projects')
                        .orderBy('createdAt', 'desc')
                        .get()
                        .then(querySnapshot=>{
                            const tempState = [];
                            querySnapshot.forEach(doc=>{
                                tempState.push({...doc.data()});
                            });
                            const state = tempState.map(item=>{
                                item.createdAt = item.createdAt.toDate();
                                return item;
                            });
                            dispatch({
                                "type": "SET_INIT_STATE",
                                state
                            });
                        })
                        .catch(err=>{
                            dispatch({
                                type:"SET_INIT_STATE_ERROR",
                                err
                            })
                        });
    }
}
export const createProject = (project)=>{
    return (dispatch, getState)=>{
        //Perform some async operations and then dispatch the action
        const db = firebase.firestore() ;
        const userDocId = getState().auth.loggedInUID;
        db.collection('users').doc(userDocId).get()  
            .then(fetchedDoc=>{
                project.authorFirstName = fetchedDoc.data().firstName;
                project.authorLastName = fetchedDoc.data().lastName;
                project.authorId = fetchedDoc.data().UID;
                project.createdAt =  new Date();
                project.approved = "Not-approved";
                return db.collection("projects").add(project);
            })
            .then((addedDoc)=>{
                const projectId = addedDoc.id;
                project.projectId = projectId;
                return db.collection("projects").doc(projectId).set({projectId},{merge: true});
             })
             .then(()=>{
                dispatch({
                    type:"ADD_PROJECT",
                    project
                });
            })
            .catch(err=>{
            dispatch(
                {
                    type: "ADD_PROJECT_ERROR",
                    err
                }
            )
        });
    }
};

export const approveProject = (projectId)=>{
    return(dispatch, getState)=>{
        firebase.firestore().collection('projects').doc(projectId)
            .update({
                approved: "approved" 
            })
            .then(()=>{
                const currentProjectState = getState().project.projects;
                const projects = currentProjectState.map(project=>{
                    if(project.projectId===projectId){
                        project.approved="approved"
                    }
                    return project;
                });
                dispatch({
                    type: "APPROVE_PROJECT",
                    projects
                });
            })
            .catch(err=>{
                console.log(err.message);
            });
    }
};

export const cancelApproval = (projectId)=>{
    return (dispatch, getState)=>{
        firebase.firestore().collection('projects').doc(projectId)
            .update({
                approved: 'Not-approved'
            })
            .then(_=>{
                const currentProjectState = getState().project.projects;
                const projects = currentProjectState.map(project=>{
                    if(project.projectId===projectId){
                        project.approved="Not-approved"
                    }
                    return project;
                });
                dispatch(
                    {
                        type: 'CANCEL_APPROVAL',
                        projects
                    }
                );
            })
            .catch(err=>{
                console.log(err.message);
            });
    }
}