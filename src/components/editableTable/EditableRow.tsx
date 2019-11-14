import React from 'react';
import EditableContext from './context';
import {Form} from 'antd';

function EditableFormRow({form, ...props}:any) {
  return (
    <EditableContext.Provider value={form}>
      <tr {...props}></tr>
    </EditableContext.Provider>
  )
}

const EditableRow = Form.create()(EditableFormRow);

export default EditableRow;