/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Form from './core/Form';

class HomeComponent extends React.Component {
  render(){
    const { form } = this.props;
    console.log(this.props.form.getFormValues());
    return(
      <Form >
        {
          this.props.form.addField('inputField', {})(<input />)
        }
      </Form>
    );
  }
}
HomeComponent.propTypes = {
  form: PropTypes.object
};

export const Home  = Form.create(HomeComponent);