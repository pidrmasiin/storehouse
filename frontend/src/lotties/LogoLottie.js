import React from 'react';

import Lottie from 'react-lottie';
import * as animationData from './loading.json';


class LogoLottie extends React.Component {
  componentWillMount = () => {
  }

  render() {
    const defaultOptions = {
      loop: false,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <Lottie
        options={defaultOptions}
        height={this.props.size.height}
        width={this.props.size.width}
      />
    );
  }
}

export default LogoLottie;
