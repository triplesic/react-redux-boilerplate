import React, { Component } from 'react';
import {Step, Stepper, StepLabel } from 'material-ui/Stepper';


export default class PaymentStepper extends Component {

    getStepContent(stepIndex) {
        switch (stepIndex) {
          case 0:
            return 'Cart';
          case 1:
            return 'Delivery';
          case 2:
            return 'Payment';
          case 3:
            return 'Confirmation';
          default:
            return 'Not Defined';
        }
    }

    render() {
        const {stepIndex} = this.props;
        const contentStyle = {margin: '0 16px'};
    return (
        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Cart</StepLabel>
            </Step>
            <Step>
              <StepLabel>Delivery</StepLabel>
            </Step>
            <Step>
              <StepLabel>Payment</StepLabel>
            </Step>
            <Step>
              <StepLabel>Confirmation</StepLabel>
            </Step>
          </Stepper>
        </div>
      );
    }
}