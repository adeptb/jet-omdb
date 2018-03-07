import React from 'react';

export default function TextBox({onChange, value = ''}) {
  return (
    <input type="text" value={value} onChange={e => onChange(e.target.value)} />
  );
}
