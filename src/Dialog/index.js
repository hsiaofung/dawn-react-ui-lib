import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Style from "./css";

class Dialog extends Component {
  closeDialog = () => {
    this.setState({
      show: false
    });
    document.body.style.overflow = "";
  };

  save = () => {
    this.props.handleClose();
    this.props.userAgreeFunc();
  };

  render() {
    return (
      <div>
        {/* <Style.Button
          className="dialog-button"
          onClick={this.showDialog}
          buttonBackground={this.props.buttonBackground}
          buttonBorder={this.props.buttonBorder}
          buttonColor={this.props.buttonColor}
          buttonPadding={this.props.buttonPadding}
        >
          {this.props.buttonName}
        </Style.Button> */}
        <Style.DialogBackground
          show={this.props.open}
          scrollBar={this.props.scrollBar}
        >
          <Style.DialogContent
            scrollBar={this.props.scrollBar}
            width={this.props.width}
            animation={this.props.open}
          >
            <Style.CloseButton onClick={this.props.handleClose} />
            {this.props.contentHeader ? (
              <h2>{this.props.contentHeader}</h2>
            ) : null}
            <Style.ContentBody scrollBar={this.props.scrollBar}>
              {this.props.contentBody}
            </Style.ContentBody>
            {this.props.userAgree ? (
              <Style.ButtonSection>
                <Style.CancelButton
                  className="dialog-cancel-button"
                  onClick={this.props.handleClose}
                >
                  取消
                </Style.CancelButton>
                <Style.AgreeButton
                  className="dialog-agree-button"
                  onClick={this.save}
                >
                  確認
                </Style.AgreeButton>
              </Style.ButtonSection>
            ) : null}
          </Style.DialogContent>
        </Style.DialogBackground>
        <Style.MobileDialog show={this.props.open}>
          <Style.MobileDialogHeader>
            <Style.BackArrow onClick={this.props.handleClose} />
            <h2>{this.props.contentHeader}</h2>
          </Style.MobileDialogHeader>
          <Style.MobileDialogBody>
            {this.props.contentBody}
            {this.props.userAgree ? (
              <div>
                <Style.AgreeButton
                  className="dialog-agree-button"
                  onClick={this.save}
                >
                  確認
                </Style.AgreeButton>
                <Style.CancelButton
                  className="dialog-cancel-button"
                  onClick={this.props.handleClose}
                >
                  取消
                </Style.CancelButton>
              </div>
            ) : null}
          </Style.MobileDialogBody>
        </Style.MobileDialog>
      </div>
    );
  }
}

Dialog.propTypes = {
  userAgreeFunc: PropTypes.func
};

Dialog.defaultProps = {
  userAgreeFunc: () => {}
};

export default Dialog;
