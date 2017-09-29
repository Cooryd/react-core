/* eslint-disable no-console */
import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data: {}
    };
  }

  updateData(e, name){
    let tempData = {...this.state.data};
    tempData[name] = e.target.value;
    this.setState({data : tempData});
  }

  renderChildComponents(){
    const { children } = this.props;
    const self = this;
   return  React.Children.map(
     children,
     child => {
       //TODO: Check child.type and only add onChange if it is one of the Bootstrap Form elements.
       try{
         return React.cloneElement(child, { onChange: (() => e => self.updateData(e, child.props.name))()});
       }
       catch(e){
         throw new Error('Error rendering a form child component');
       }
     }
    );
  }

  render(){
    return (
      <form>
        { this.renderChildComponents() }
      </form>
    );
  }
}
//TODO: Add PropTypes top this component.
export default Form;