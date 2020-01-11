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
            const { viewer } = this.state;
            const { run, walk } = this.props;

            let control = skinview3d.createOrbitControls(this.state.viewer);
            control.enableRotate = true;
            control.enableZoom = false;
            control.enablePan = false;

            // animation
            if (run || walk) {
                viewer.animation = new skinview3d.CompositeAnimation();
                if (run) {
                    this.createAnimation(viewer.animation, true);
                }
                if (walk) {
                    this.createAnimation(viewer.animation, false);
                }
            }

            // let's call ready here
            this.props.onReady(this.state.viewer);
        });
    }

    componentWillUnmount() {
        this.setState({
            viewer: null,
            walk: null,
            run: null,
        });
    }

    componentDidUpdate(prevProps) {
        const { viewer, run, walk } = this.state;

        if (prevProps.skinUrl !== this.props.skinUrl) {
            viewer.skinUrl = this.props.skinUrl;
        }

        if (prevProps.capeUrl !== this.props.capeUrl) {
            viewer.capeUrl = this.props.capeUrl;
        }

        if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
            viewer.setSize(this.props.width, this.props.height);
        }

        // animation
        if (prevProps.run !== this.props.run) {
            if (this.props.run) {
                viewer.animation = new skinview3d.CompositeAnimation();
                return this.createAnimation(viewer.animation, true);
            } else {
                if (run) run.remove();
            }
        }
        if (prevProps.walk !== this.props.walk) {
            if (this.props.walk) {
                viewer.animation = new skinview3d.CompositeAnimation();
                return this.createAnimation(viewer.animation, false);
            } else {
                if (walk) walk.remove();
            }
        }

        if (prevProps.runSpeed !== this.props.runSpeed) {
            if (run) {
                run.speed = this.props.runSpeed;
                this.setState({run});
            }
        }
        if (prevProps.walkSpeed !== this.props.walkSpeed) {
            if (walk) {
                walk.speed = this.props.walkSpeed;
                this.setState({walk});
            }
        }

        if (prevProps.runPaused !== this.props.runPaused) {
            if (run) {
                run.paused = this.props.runPaused;
                this.setState({run});
            }
        }
        if (prevProps.walkPaused !== this.props.walkPaused) {
            if (walk) {
                walk.paused = this.props.walkPaused;
                this.setState({walk});
            }
        }

        if (prevProps.paused !== this.props.paused) {
            viewer.animationPaused = this.props.paused;
            this.setState({viewer});
        }
    }

    createAnimation(viewerAnimation, isRun) {
        if (isRun) {
            let run = viewerAnimation.add(skinview3d.RunningAnimation);
            run.speed = this.props.runSpeed;
            this.setState({run});
        } else {
            let walk = viewerAnimation.add(skinview3d.WalkingAnimation);
            walk.speed = this.props.walkSpeed;
            this.setState({walk});
        }
    }

    render() {
        return (
            <div className={this.props.className} ref={this.skinviewRef} style={{imageRendering: 'pixelated'}}/>
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
    run: PropTypes.bool,
    runSpeed: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    runPaused: PropTypes.bool,
    walk: PropTypes.bool,
    walkSpeed: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    walkPaused: PropTypes.bool,
    paused: PropTypes.bool,
    className: PropTypes.string,
    onReady: PropTypes.func,
};

// Specifies the default values for props:
Skinview3d.defaultProps = {
    width: 600,
    height: 600,
    walk: false,
    walkSpeed: 1,
    walkPaused: false,
    run: false,
    runSpeed: 1,
    runPaused: false,
    paused: false,
    onReady: () => {}
};
