import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const uuidv1 = require('uuid/v1');

class Selector extends Component{
  constructor(props){
    super(props);
    this.state={
      focus: false
    }

    this.onFocus  = this.onFocus.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur   = this.onBlur.bind(this);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  onFocus(){
    // console.log('focus');
    if(!this.props.disabled){
      this.setState({
        focus: true
      });

      if (this.props.onFocus) {
        this.props.onFocus();
      }
    }
  }

  onBlur(){
    // console.log('blur');
    this.setState({
      focus: false
    });
    
    if(this.props.onBlur){
      this.props.onBlur();
    }
  }

  onChange(o, i){
    // console.log('o >>>>>>> ', o);
    this.props.onChange(o, i);

    this.setState({
      focus: false,
    })
  }

  componentDidMount() {
    if (this.props.onReady) {
      this.props.onReady();
    }

    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

 /*
  * Set the wrapper ref
  */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

 /*
  * Alert if clicked on outside of element
  */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.onBlur();
    }
  }

  render(){
    let id = this.props.id;
    let textColor = this.props.textColor || '#000';
    let maxHeight = this.props.maxHeight || '200px';

    let styles = {
      containerStyle:{
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

      selectorContainer: {
        padding: '0 10px',
        cursor: 'pointer',
        position: 'relative',
        width: '235px',
        height: '45px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        transition: 'border-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        border: 'none',
        color: textColor,
        backgroundColor: 'rgba(0,0,0,0.05)',

        ...this.props.selectorContainer
      },
      
      select: {
        MozAppearance: 'none',
        WebkitAppearance: 'none',
        fontSize: '16px',
        width: '90%',
        height: '100%',
        border: '0px',
        backgroundColor: 'rgba(0,0,0,0)',
        color: textColor,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',

        ...this.props.selectorStyle
      },
    }

    let options = this.props.options || [];

    return (
      <div style={styles.containerStyle} >
        {
          this.props.label ? (
            <div style={styles.labelContainerStyle}>
              <label onClick={this.onFocus} htmlFor={id} style={styles.labelStyle} className={this.props.labelClassName}>{this.props.label}</label>
            </div>
          ) : null
        }

        <div 
          style={styles.selectorContainer} 
          className={this.props.containerClassName}
        >
          <div style={{
            position: 'absolute',
            right: 10,
          }}>
            <div style={{
              margin: '3px',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderBottom: '6px solid',
              borderBottomColor: this.state.focus ? '#5855ff' : '#000',
            }}></div>
            <div style={{
              margin: '3px',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid',
              borderTopColor: this.state.focus ? '#5855ff' : '#000',
            }}></div>
          </div>
          
          <div
            ref={(r) => this.select = r}
            id={id}
            onClick={this.onFocus}
            style={styles.select}
            className={this.props.selectorClassName}
          >
            {this.props.value}
          </div>

          <div ref={this.setWrapperRef} className="cool-scroll-bar-19" style={{
            transition: 'max-height 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            maxHeight: this.state.focus ? maxHeight : 0,
            overflowX: 'hidden',
            overflowY: 'auto',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            margin: 'auto',
            width: '100%',
            zIndex: 99999,
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
            backgroundColor: '#fff',
          }} >
            <div>{this.props.placeholder}</div>
            {
              options.length ? (
                options.map((o, i) => (
                  <Option
                    selected={this.props.isSelected ? this.props.isSelected(o) : o.value === this.props.value}
                    key={i}
                    index={i}
                    data={o}
                    onSelect={() => this.onChange(o, i)}
                  />
                ))
              ) : null
            }
          </div>
        </div>
      </div>
    );
  }
}

class Option extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }

    this.onSelect = this.onSelect.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseOver() {
    this.setState({
      hover: true
    });
  }

  onMouseLeave() {
    this.setState({
      hover: false
    });
  }

  onSelect() {
    this.props.onSelect(this.props.data);
  }

  render() {
    return (
      <div onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} onClick={this.onSelect} style={{
        color: this.props.selected ? '#5855ff' : '#000',
        backgroundColor: this.state.hover ? 'rgba(0,0,0,0.1)' : '',
        textAlign: 'left',
        padding: '13px 10px',
        cursor: 'pointer',
      }} >
        {this.props.data.label}
      </div>
    )
  }
}

Selector.propTypes = {
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
  mode: PropTypes.string,

  textColor: PropTypes.string,
  containerClassName: PropTypes.string,
  selectorClassName: PropTypes.string,

  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,

  containerStyle: PropTypes.object,
  selectorContainer: PropTypes.object,
  selectorStyle: PropTypes.object,
  labelContainerStyle: PropTypes.object,
  labelStyle: PropTypes.object,

  options: PropTypes.array,
  onChange: PropTypes.func,
}

export default Selector;
