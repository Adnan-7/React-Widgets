import React, { useEffect, useState, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange(option)}
        className='item'>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div ref={ref} className='ui form'>
        <div className='field'>
          <label className='label'> {label}</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
            <i className='dropdown icon'></i>
            <div className='tex'> {selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
      {/* <h4 style={{ color: selected.value, marginTop: '80px' }}>
        The text is {selected.value}{' '}
      </h4> */}
    </div>
  );
};

export default Dropdown;
