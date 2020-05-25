import React from 'react'
import PropTypes from 'prop-types'

const Modal = props => {
    const isOpen =true;
    return (
        <div className={`modal-overlay ${isOpen? `isModalOpen` : null}`}>
            <div className="modal-container">
                <h4>some random name</h4>
                <p>some random text</p>
                <button className="btn btn-primary">close</button>
            </div>
        </div>
    )
}

Modal.propTypes = {

}

export default Modal
