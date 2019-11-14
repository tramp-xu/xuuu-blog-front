import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import EditableContext from './context';

const FormItem = Form.Item;

interface IState {
  editing: boolean
}

interface IProps {
  editing: boolean
  dataIndex: number
  title: string
  record: any
  index: number
  inputType?: any
}


class EditableCell extends React.Component<IProps, IState> {
  public getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber></InputNumber>;
    }
    return <Input></Input>;
  }

  public render () {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {
          (form:any) => {
            const { getFieldDecorator } = form;
            return (
              <td {...restProps}>
                {
                  editing ? (
                    <FormItem style={{margin: 0}}>
                      {getFieldDecorator(dataIndex, {
                        rules: [{
                          required: true,
                          message: `Please Input ${title}`
                        }],
                        initialValue: record[dataIndex]
                      })(this.getInput())}
                    </FormItem>
                  ) : restProps.children
                }
              </td>
            );
          }
        }
      </EditableContext.Consumer>
    );
  }
}


export default EditableCell;
