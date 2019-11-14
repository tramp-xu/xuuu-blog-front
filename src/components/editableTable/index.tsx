import React, { Component } from 'react'
import { Table, Popconfirm, Input, message, Spin } from 'antd';
import EditableRow from "./EditableRow";
import EditableCell from "./EditableCell";
import EditableContext from './context';

const columnsOpt = [
  {
    title: '标签名',
    dataIndex: 'name',
    key: 'name',
    editable: true
  },
  {
    title: '创建时间',
    dataIndex: 'createDate',
    key: 'createDate'
  },
  {
    title: '关联文章数',
    dataIndex: 'relatedCount',
    key: 'relatedCount'
  }
];

class Editable extends Component {
  public state = {
    loading: false,
    records: [],
    editingId: '',
    curPage: 1,
    total: 0,
    columns: [
      ...columnsOpt,
      {
        title: '编辑标签',
        key: 'operation',
        width: '120px',
        render: (text:string, record:any) => {
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <div className="g_flex-between">
                  <EditableContext.Consumer>
                    {
                      form => (
                        <span
                          className="g_cursor-pointer g_hover-primary"
                          onClick={() => this.save(form, record.id)}
                        >
                          Save
                        </span>
                      )
                    }
                  </EditableContext.Consumer>
                  <Popconfirm
                    onConfirm={() => this.cancel()}
                    title="Sure to cancel"
                  >
                    <span className="g_cursor-pointer g_hover-primary">Cancel</span>
                  </Popconfirm>
                </div>
              ) : (
                <div className="g_flex-between">
                  <i
                    className="anticon_user g_cursor-pointer g_hover-primary"
                    onClick={() => this.edit(record.id)}
                  >&#xe8cf;</i>

                  <Popconfirm
                    onConfirm={() => this.deleteTag(record.id)}
                    placement="topRight"
                    title="所有含有此标签的文章将删除此标签"
                  >
                    <i
                      className="anticon_user g_cursor-pointer g_hover-primary"
                    >&#xe613;</i>
                  </Popconfirm>
                </div>
              )}
            </div>
          );
        }
      }
    ]
  }

  public isEditing = (record:any) => record._id === this.state.editingId

  public cancel = () => {
    this.setState({
      editingId: ''
    });
  }

  public save = (form:any, _id:any) => {
    form.validateFields(async (error:any, row:any) => {
      if (error) {
        return;
      }
      console.log(row)
    });
  }

  public render() {
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell
      }
    };

    const columns = this.state.columns.map((col:any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record:any) => ({
          record,
          inputType: col.dataIndex === 'tagLevel' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });
    return (
      <Spin spinning={this.state.loading}>
        <Table
          bordered
          columns={columns}
          components={components}
          dataSource={this.state.records}
          pagination={{pageSize: 10, current: this.state.curPage, total: this.state.total}}
          rowKey="id"
        />
      </Spin>
    );
  }

  private edit = (id:number) => {
    console.log(id)
  }
  private deleteTag = (id:number) => {
    console.log(id)
  }
}

export default Editable;