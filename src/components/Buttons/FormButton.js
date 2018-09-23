import React, { Component } from 'react';
import { TimelineMax } from "gsap";
import PropTypes from 'prop-types';

class FormButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      width: 0,
      height: 0
    }

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  onMouseEnter(e) {
    // console.log('hover');
    this.setState({
      hover: true
    });
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e);
    }
  }

  onMouseLeave(e) {
    // console.log('blur');
    this.setState({
      hover: false
    });

    this.props.onMouseLeave && this.props.onMouseLeave(e);
  }

  onMouseDown(e) {
    this.props.onMouseDown && this.props.onMouseDown(e);
  }

  onMouseUp(e) {
    this.props.onMouseUp && this.props.onMouseDown(e);
  }

  onClick(e) {
    e.preventDefault();
    this.props.onClick && this.props.onClick(e);

    const elem = this.ripple,
      tl = new TimelineMax(),
      x = e.nativeEvent.offsetX,
      y = e.nativeEvent.offsetY,
      w = e.target.offsetWidth,
      h = e.target.offsetHeight,
      offsetX = Math.abs((w / 2) - x),
      offsetY = Math.abs((h / 2) - y),
      deltaX = (w / 2) + offsetX,
      deltaY = (h / 2) + offsetY,
      scaleRatio = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    this.setState({
      ...this.state,
      width: w,
      height: h,
    });

    tl.fromTo(elem, 0.5, {
      x: x,
      y: y,
      transformOrigin: '50% 50%',
      scale: 0,
      opacity: 1
    }, {
        scale: scaleRatio,
        opacity: 0
      })
  }

  componentDidMount() {
    if (this.props.onReady) {
      this.props.onReady();
    }
  }

  render() {
    let styles = {
      containerStyle: {
        margin: '20px 0px',
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'middle',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'center',

        ...this.props.containerStyle
      },

      buttonStyle: {
        color: this.state.hover ? '#fff' : '#5855ff',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
        textAlign: 'center',
        backgroundColor: this.state.hover ? '#5855ff' : 'rgba(0,0,0,0.05)',
        border: '1px solid #5855ff',
        overflow: 'hidden',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: '16px',
        height: '45px',
        width: '255px',
        display: 'inline-block',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: 700,
        outline: 'none',
        position: 'relative',
        WebkitTransition: 'background 0.3s ease',
        OTransition: 'background 0.3s ease',
        transition: 'background 0.3s ease',

        ...this.props.buttonStyle
      },

      ripple: {
        height: '100%',
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 0,
        fill: 'rgba(255, 255, 255, 0.3)',
      }

    }

    return (
      <div style={styles.containerStyle} className={this.props.containerClassName} onClick={this.onClick}>
        <button
          name={this.props.name}
          className={this.props.buttonClassName}
          style={styles.buttonStyle}
          disabled={this.props.disabled}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          {this.props.label}
        </button>
        <svg viewBox={`0 0 ${this.state.width} ${this.state.height}`} style={styles.ripple}>
          <circle ref={(r) => this.ripple = r} cx="1" cy="1" r="1" />
        </svg>
      </div>
    );
  }
}

FormButton.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,

  containerClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  labelClassName: PropTypes.string,

  hoverColor: PropTypes.string,
  blurColor: PropTypes.string,
  disabledColor: PropTypes.string,

  icon: PropTypes.node,

  disabled: PropTypes.bool,
  autoHover: PropTypes.bool,

  buttonStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  labelContainerStyle: PropTypes.object,
  labelStyle: PropTypes.object,

  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onReady: PropTypes.func,
}

export default FormButton;
