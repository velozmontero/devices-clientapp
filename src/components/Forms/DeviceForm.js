import React from 'react';
import { FormInput, Selector } from '../Inputs';
import { FormButton } from '../Buttons';
import { device_filter_options } from '../../config';

const DeviceForm = (props) => {
  const { system_name, type, hdd_capacity } = props.form;
  const selected = device_filter_options.find(option => option.value === type);

  return (
    <div className="device-form-container">
      <FormInput
        autoComplete="new-password"
        label="System Name"
        labelBlurMarginTop={36}
        value={system_name}
        type="text"
        onChange={(e) => props.onFormChange({
          ...props.form,
          system_name: e.target.value
        })}
      />

      <Selector
        containerStyle={{
          margin: '0px 20px',
        }}
        autoComplete="new-password"
        label='Select Type'
        labelBlurMarginTop={36}
        isSelected={e => e.value === type}
        value={selected ? selected.value : ''}
        options={device_filter_options.slice(1)}
        onChange={(o) => props.onFormChange({
          ...props.form, 
          type: o.value
        })}
      />

      <FormInput
        autoComplete="new-password"
        label="HDD Capacity"
        labelBlurMarginTop={36}
        value={hdd_capacity}
        type="text"
        onChange={(e) => props.onFormChange({
          ...props.form,
          hdd_capacity: e.target.value.replace(/\D/g, '')
        })}
      />

      <FormButton 
        label={'SAVE'} 
        onClick={props.onSaveDevice} 
      />
    </div>
  )
}

export default DeviceForm;