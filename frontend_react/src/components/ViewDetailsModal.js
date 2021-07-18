import React, { Component, Fragment } from "react";
import NewStudentForm from "./NewStudentForm";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";

class DetailsModal extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <Fragment>
        <Button onClick={() => this.setState({ open: !this.state.open })}>Details</Button>
        <Modal isOpen={this.state.open} toggle={() => this.setState({ open: !this.state.open })}>
          <ModalHeader toggle={() => this.setState({ open: !this.state.open })} >Student Details</ModalHeader>

          <ModalBody>
            <NewStudentForm toggle={() => this.setState({ open: !this.state.open })} student={this.props.student} details={true} />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default DetailsModal;
