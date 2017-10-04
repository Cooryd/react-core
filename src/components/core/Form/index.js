/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component{
  static create(WrappedComponent){
    return class FormFieldComponent extends React.Component {
      constructor(props){
        super(props);

        this.formData = {};
        this.addField = this.addFieldToForm.bind(this);
        this.getFormValues = this.getFormValues.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
      }

      getAllFormValues(){
        let valuesObject = {};
        Object.keys(this.formData).map( field => {
            valuesObject[field] = this.formData[field].value;
          }
        );
        return valuesObject;
      }

      getFormValues(fields){
        if (fields && Array.isArray(fields)) {
          let valuesObject = {};
          fields.map( field => {
            valuesObject[field] = this.formData[field].value;
          });
          return valuesObject;
        } 

        return this.getAllFormValues();
      }

      onFieldChange(event, fieldName){
        let tempFieldData = { ...this.formData };
        try {
          tempFieldData[fieldName].value = event.target.value;
          this.formData = tempFieldData;
        } catch(error) {
          throw new Error(error);
        }
      }


      addFieldToForm(fieldsName, options = {}){
        let tempFormData = {...this.formData};
        if (!tempFormData[fieldsName]) {
          tempFormData[fieldsName] = { value: options.initialValue, touched: false, valid: true };
          this.formData = tempFormData;
        }

        return (FieldComponent) =>  React.cloneElement(FieldComponent, { defaultValue:tempFormData[fieldsName].value, onChange: (event) =>  this.onFieldChange(event, fieldsName) });
      }

      render(){
        const{ getFormValues, addField } = this;
        const props = {
          getFormValues,
          addField
        };

        return <WrappedComponent {...this.props} form={props} />;
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