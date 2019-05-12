import React from "react";
import { FormView } from "./FormView";

export class FormContainer extends Component {
  state = { hints: [] };

  componentDidMount() {
    const hints = api.fetch("/hints");

    this.setState({ hints });
  }

  onSubmit = () => {
    console.log("Submit");
  };

  render() {
    const { hints } = this.state;

    return <FormView hints={hints} onSubmit={this.onSumbmit} />;
  }
}
