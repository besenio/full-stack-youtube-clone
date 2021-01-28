import React from 'react';
import CreateVideoForm from '../videos/create_video_form_container';

const modal = (props) => {
    // props.modal ? document.body.style.overflow ='hidden' : document.body.style.overflow = 'unset';

    if (!props.modal || !props.currentUser) return null;

    return (
        <div className="modal-background" onClick={props.closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <CreateVideoForm />
            </div>
        </div>
    )
}

export default modal;