import React from 'react';
import style from './Profile.module.css';

class ProfileStatus extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    state = {
        editMode: false,
        status: this.props.status
    }

    enableEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    disableEditMode = (e) => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {

        let statusText;
        this.state.status
            ? this.statusText = this.state.status
            : this.statusText = 'Изменить статус...'

        return (
            <>
                {
                    !this.state.editMode
                        ? <div onClick={this.enableEditMode}>
                            <h3>{this.statusText}</h3>
                        </div>
                        : <div onBlur={this.disableEditMode}>
                            <input type="text" value={this.statusText} onChange={this.onStatusChange} autoFocus={true}/>
                        </div>
                }
            </>
        )
    }
}

export default ProfileStatus;