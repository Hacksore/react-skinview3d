import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as skinview3d from 'skinview3d';

export default class Skinview3d extends Component {

  constructor(props) {
    super(props);
    this.skinviewRef = React.createRef();
    this.state = {
      viewer: null
    };
  }

  componentDidMount() {
    this.setState({
      viewer: new skinview3d.SkinViewer({
        domElement: this.skinviewRef.current,
        width: this.props.width,
        height: this.props.height,
        skinUrl: this.props.skinUrl,
        capeUrl: this.props.capeUrl
      })
    }, () => {
      let control = skinview3d.createOrbitControls(this.state.viewer);
      control.enableRotate = true;
      control.enableZoom = false;
      control.enablePan = false;

      // let's call ready here
      this.props.onReady(this.state.viewer);
    });
  }

  componentWillUnmount() {
    this.setState({
      viewer: null
    });
  }

  componentDidUpdate(prevProps) {
    const { viewer } = this.state;

    if (prevProps.skinUrl !== this.props.skinUrl) {
     viewer.skinUrl = this.props.skinUrl;
    }

    if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
      viewer.setSize(this.props.width, this.props.height);
    }
  }

  render() {
    return (
      <div className={this.props.className} ref={this.skinviewRef} style={{ imageRendering: 'pixelated' }}></div>
    )
  }
}

Skinview3d.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  skinUrl: PropTypes.string.isRequired,
  capeUrl: PropTypes.string,
  className: PropTypes.string,
  onReady: PropTypes.func,
}

// Specifies the default values for props:
Skinview3d.defaultProps = {
  width: 600,
  height: 600,
  skinUrl: '',
  onReady: () => {}
};
