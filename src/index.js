import React, { Component } from 'react'
import PropTypes from 'prop-types'

// skinview3d
import * as skinview3d from 'skinview3d';

export default class Skinview3d extends Component {

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
        skinUrl: this.props.skinUrl,
        capeUrl: this.props.capeUrl
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
      <div className={this.props.className} ref={this.skinviewRef} style={{ imageRendering: 'pixelated' }}></div>
    )
  }
}

Skinview3d.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  skinUrl: PropTypes.string.isRequired,
  capeUrl: PropTypes.string,
  className: PropTypes.object,
}

// Specifies the default values for props:
Skinview3d.defaultProps = {
  width: 600,
  height: 600,
  skinURL: String,
  capeURL: String
};
