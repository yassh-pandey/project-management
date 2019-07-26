import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
const Notification = ({notifications})=>{
    return(
        <Fragment>
            {
                notifications!==null
                ?
                (
                    <div className="Dashboard-notifications">
                        <div className="Dashboard-notification-title-flex-container">
                            <div className="Dashboard-notification-title">
                                Notifications
                            </div>
                        </div>
                        {
                            notifications.map(notification=>{
                                return(
                                        <div className="Dashboard-notification-wrapper" key={notification.id}>
                                            <div className="Dashboard-notification-item">
                                                <span className="Dashboard-notification-user">{`${notification.user}`}</span> {`${notification.content}`}
                                            </div>
                                            <div className="Dashboard-notification-item Dashboard-notification-time">
                                                {moment(notification.time).fromNow(true)} ago
                                            </div>
                                        </div>
                                )
                            })
                        }
                    </div>
                )
                :
                (
                    <div className="Dashboard-notifications">
                        <div className="loading">Loading notifications...</div>
                    </div>
                )
            }
        </Fragment>
    )
    
}
const mapStateToProps = (state, ownProps)=>{
    return{
        notifications: state.notification.notifications
    }
}
export default connect(mapStateToProps)(Notification)
