import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import assets from '../../constants/assets';
import Thumbnail from '../Thumbnail';
import Field from './Field';
import Label from './Label';
import './assets/select.scss';

const Select = props => {
  const classes = cx(
    'f-select',
    props.location && '--location'
  );

  const selectOptions = props.options.map((s, i) => (
    <option
      key={i}
      value={s.value}
    >{s.label}</option>
  ));

  return (
    <Field>
      {props.label && <Label for={props.id} text={props.label} />}
      <div className={classes}>
        { props.location && <Thumbnail src={assets.icon.pin} /> }
        <Thumbnail src={assets.icon.arrowSimple} />
        <select
          id={props.id}
          name={props.name ? props.name : props.id}
          className="f-select__options"
        >
          {selectOptions}
        </select>
      </div>
    </Field>
  );
};

Select.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string,
  label: propTypes.string,
  options: propTypes.array.isRequired,
  location: propTypes.bool,
};

export default Select;
