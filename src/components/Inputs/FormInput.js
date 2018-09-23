import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    }

    this.onFocus = this.onFocus.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  onFocus(e) {
    // console.log('focus');
    this.setState({
      focus: true
    });
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }
  onBlur(e) {
    // console.log('blur');
    this.setState({
      focus: false
    });
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }
  onKeyDown(e) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  }
  onChange(e) {
    this.props.onChange(e, e.target.value);
  }
  componentDidMount() {
    if (this.props.onReady) {
      this.props.onReady();
    }
  }
  render() {
    let id = this.props.id;
    let textColor = this.props.textColor || '#000';

    let styles = {
      containerStyle: {
        padding: '0px 0px 20px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        minHeight: '69px',

        ...this.props.containerStyle
      },

      labelContainerStyle: {
        position: 'relative',
        display: 'inline-block',
        width: '235px',
        height: '18px',
        textAlign: 'left',
        marginBottom: '5px',

        ...this.props.labelContainerStyle
      },

      labelStyle: {
        zIndex: 1,
        padding: 0,
        fontSize: ((this.state.focus || this.props.value || this.props.value === 0 || this.props.placeholder) ? 16 : (this.props.textSize || 16)) + 'px',
        transition: 'color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, font-size 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        color: (this.state.focus) ? (this.props.focusColor || '#5855ff') : (this.props.labelColor || '#000'),
        position: 'absolute',
        marginTop: ((this.state.focus || this.props.value || this.props.value === 0 || this.props.placeholder) ? (this.props.labelFocusMarginTop || '0') : (this.props.labelBlurMarginTop || '40')) + 'px',

        ...this.props.labelStyle
      },

      inputStyle: {
        padding: '10px',
        width: '235px',
        height: '25px',
        fontSize: (this.props.textSize || 16) + 'px',
        transition: 'border-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        border: 'none',
        color: textColor,
        backgroundColor: 'rgba(0,0,0,0.05)',

        ...this.props.inputStyle
      },
    }

    return (
      <div style={styles.containerStyle} className={this.props.containerClassName} >
        <div style={styles.labelContainerStyle}>
          <label onClick={() => this.input.focus()} htmlFor={id} style={styles.labelStyle} className={this.props.labelClassName}>{this.props.label}</label>
        </div>
        <div>
          <input
            id={id}
            name={this.props.name}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            autoComplete={this.props.autoComplete || 'off'}
            className={this.props.inputClassName}
            style={styles.inputStyle}
            placeholder={this.props.placeholder}
            type={this.props.type || 'text'}
            value={this.props.value}
            disabled={this.props.disabled}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            autoFocus={this.props.autoFocus ? true : false}
            ref={(r) => {
              this.props.onRef && this.props.onRef(r)
              return this.input = r;
            }}
          />
        </div>
      </div>
    );
  }
}

FormInput.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  id: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,

  textColor: PropTypes.string,
  labelColor: PropTypes.string,
  containerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  placeholder: PropTypes.string,

  errorText: PropTypes.string,
  type: PropTypes.string,
  focusColor: PropTypes.string,
  blurColor: PropTypes.string,
  disabledColor: PropTypes.string,

  textSize: PropTypes.number,
  labelBlurMarginTop: PropTypes.number,
  labelFocusMarginTop: PropTypes.number,

  icon: PropTypes.node,

  disabled: PropTypes.bool,
  LabelFixed: PropTypes.bool,
  autoFocus: PropTypes.bool,

  inputStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  errorStyle: PropTypes.object,
  labelContainerStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  blurUnderLineStyle: PropTypes.object,
  focusUnderLineStyle: PropTypes.object,

  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  onReady: PropTypes.func,
  onRef: PropTypes.func
}

export default FormInput;
