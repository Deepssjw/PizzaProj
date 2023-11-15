import React, { Component } from "react";

const Hoc = (WrapperComp,val) => {
  class HocComp extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    counterIncrement = () => {
      this.setState((prevState) => ({ count: prevState.count + val }));
    };

    render() {
        return <WrapperComp count={this.state.count} counterIncrement={this.counterIncrement} ></WrapperComp>
    }
  }

  return HocComp;
};

export default Hoc;
