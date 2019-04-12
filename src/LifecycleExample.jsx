import React, { Component } from "react";

const getChuckJoke = () => ({
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "-p5kboGCRvS1gXju2Sj_Ow",
  url: "https://api.chucknorris.io/jokes/-p5kboGCRvS1gXju2Sj_Ow",
  value: "CHuck Norris doesn't smoke crack. He cracks smoke."
});

const ChuckText = ({text}) => (<p>{text}</p>)

class LifecycleExample extends Component {
  state = {icon_url: '', value: ''}

  componentDidMount() {
    const data = getChuckJoke()

    this.setState({icon_url: data.icon_url, value: data.value})
  }

  render() {
    const {icon_url, value} = this.state;
    return (
      <>
        <img alt="chuck" src={icon_url} />
        <ChuckText text={value}/>
      </>
    );
  }
}

export default LifecycleExample;
