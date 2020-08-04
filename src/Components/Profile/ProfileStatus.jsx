import React, {useState} from 'react';
import style from './Profile.module.css';

const ProfileStatus = (props) => {

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }
    //
    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status || 'Изменить статус...');


    const enableEditMode = () => {
        setEditMode(true);
    }
    const disableEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <>
            {
                !editMode
                    ? <div onClick={enableEditMode}>
                        <h3>
                            {status}
                        </h3>
                    </div>

                    : <div onBlur={disableEditMode}>
                        <input type="text" value={status} onChange={onStatusChange} autoFocus={true}/>
                    </div>
            }
        </>
    )
}

export default ProfileStatus;