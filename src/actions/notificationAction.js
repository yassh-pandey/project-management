import firebaseConfig from '../firebaseConfig'
export const setNotificationInitialState = ()=>{
    return (dispatch, getState)=>{
        const notf = [];
        firebaseConfig.firestore().collection('notifications').orderBy('time', 'desc').limit(4)
            .get()
            .then((querysnapshot)=>{
                querysnapshot.forEach(doc=>{
                    const documentAboutToBePushed = doc.data();
                    documentAboutToBePushed.id = doc.id;
                    notf.push(documentAboutToBePushed);
                });
                const notifications = notf.map(not=>{
                    not.time = not.time.toDate();
                    return not;
                });
                dispatch({
                    type: 'SET_NOTIFICATION_INITIAL_STATE',
                    notifications,
                })
            })
        ;
    };
};