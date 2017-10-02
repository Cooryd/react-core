/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component{
  static create(WrappedComponent){
    return class extends React.Component {
      constructor(props){
        super(props);

        this.formData = {};
        this.addField = this.addFieldToForm.bind(this);
      }

      addFieldToForm(fieldsName, options = {}){
        let tempFormData = {...this.formData};
        if (!tempFormData[fieldsName]) {
          tempFormData[fieldsName] = { value: options.initialValue, dirty: false, valid: false };
          this.formData = tempFormData;
        }

        return (FieldComponent) =>  React.cloneElement(FieldComponent, { defaultValue:tempFormData[fieldsName].value });
      }

      render(){
        return <WrappedComponent {...this.props} form={this} />;
      }
    };
  }

  render(){
    return(
      <form >
        { this.props.children }
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.element
};

export default Form;