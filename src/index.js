import React, { Component } from 'react'
import PropTypes from 'prop-types'

// skinview3d
import * as skinview3d from 'skinview3d';

import styles from './styles.css'

export default class Skinview3d extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.skinviewRef = React.createRef();

    this.state = {
      skinview3d: null
    };
  }

  componentDidMount() {
    this.setState({
      viewer: new skinview3d.SkinViewer({
        domElement: this.skinviewRef.current,
        width: this.props.width,
        height: this.props.height,
        skinUrl: this.props.skinUrl
      })
    }, () => {
      let control = skinview3d.createOrbitControls(this.state.viewer);
      control.enableRotate = true;
      control.enableZoom = false;
      control.enablePan = false;
    });
  }

  componentWillUnmount() {
    this.setState({
      viewer: null
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.props.className} ref={this.skinviewRef}></div>
      </React.Fragment>
    )
  }
}

// Specifies the default values for props:
Skinview3d.defaultProps = {
  width: 600,
  height: 600,
  skinURL: String
};
