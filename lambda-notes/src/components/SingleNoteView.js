import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

import './SingleNoteView.css';

class SingleNoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <div className="links">
            <Link to="/editNote" className="edit">edit</Link>            
            <Button color="link" className="delete" onClick={this.toggle}>delete{this.props.buttonLabel}</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.SingleNoteView}>
              <ModalBody>
                Are you sure you want to delete this?
              </ModalBody>
              <ModalFooter className="footer">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <button className="delete-button" onClick={this.toggle}>Delete</button>
                </Link>
                <Link to="/singlenote" style={{ textDecoration: "none" }}>
                  <button className="cancel-button" onClick={this.toggle}>No</button>
                </Link> 
              </ModalFooter>
            </Modal>

            {/* <Link to="/deleteNote" className="delete">Delete</Link> */}
        </div>
        <div>
            <h2 className="header-notes">Note Name</h2>
            <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet elit imperdiet, volutpat sapien aliquet, condimentum libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin ac velit massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus massa in sodales lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin aliquet ipsum et arcu sollicitudin ornare. Nulla egestas consequat pellentesque. Proin accumsan maximus congue. Nulla eget varius mauris. Integer suscipit ex in semper tristique. Nam in tincidunt libero.
            <br />
            <br />        
            Curabitur et tortor blandit, posuere dolor in, placerat orci. Sed vestibulum accumsan volutpat. Nullam pharetra, sapien in feugiat bibendum, sem turpis consectetur velit, at finibus massa metus rutrum mauris. Nunc in mi nisi. Aenean finibus ex non ipsum scelerisque, placerat vestibulum nulla tempus. Vestibulum ut fringilla massa. Fusce quis viverra ante. Vestibulum scelerisque lacus eros, vel accumsan felis condimentum eget. Vestibulum a mi a massa bibendum porta in in libero. Nam tincidunt faucibus erat, nec placerat leo scelerisque ut. Maecenas posuere quam odio, sit amet tincidunt massa pellentesque non. In porta mauris vitae magna placerat ornare.</p>
        </div>
      </div>
    );
  }   
}

export default SingleNoteView;