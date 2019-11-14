import React, { Component } from 'react'
import { Table, Popconfirm, message, Spin, Button } from 'antd';
import EditableRow from "../../components/editableTable/EditableRow";
import EditableCell from "../../components/editableTable/EditableCell";
import EditableContext from '../../components/editableTable/context';
import TagHead from "./Head";
import { _searchTag, _deleteTag, _editTag } from "../../apis/tag"

const ButtonGroup = Button.Group

const columnsOpt = [
  {
    title: '标签名',
    dataIndex: 'name',
    key: 'name',
    editable: true
  },
  {
    title: '创建者',
    dataIndex: 'created_by',
    key: 'created_by'
  },
  {
    title: '关联文章数',
    dataIndex: 'count',
    key: 'count'
  }
];

class Editable extends Component {
  public state = {
    loading: false,
    record: [],
    editingId: '',
    curPage: 1,
    total: 0,
    columns: [
      ...columnsOpt,
      {
        title: '操作',
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
                          className="table-operate-btn"
                          onClick={() => this.save(form, record.id)}
                        >
                          保存
                        </span>
                      )
                    }
                  </EditableContext.Consumer>
                  <span className="table-operate-btn" onClick={() => this.cancel()}>取消</span>
                </div>
              ) : (
                <div className="g_flex-between">
                  <ButtonGroup>
                    <Button type="primary" size="small" icon="edit" onClick={() => this.edit(record.id)} />
                    
                    <Popconfirm
                      onConfirm={() => this.deleteTag(record)}
                      placement="topRight"
                      title="所有含有此标签的文章将删除此标签"
                    >
                      <Button type="primary" size="small" icon="delete" />
                    </Popconfirm>
                  </ButtonGroup>
                </div>
              )}
            </div>
          );
        }
      }
    ]
  }

  public componentDidMount() {
    this.getTags()
  }

  public getTags = async () => {
    this.setState({
      loading: true
    })
    try {
      const res = await _searchTag()
      this.setState({
        loading: false,
        record: res.data
      })
    } catch (error) {
      this.setState({
        loading: false
      })
      console.error(error)
    }
  }


  public isEditing = (record:any) => record.id === this.state.editingId

  public cancel = () => {
    this.setState({
      editingId: ''
    });
  }

  public save = (form:any, id:any) => {
    form.validateFields(async (error:any, row:any) => {
      console.log(row)
      if (error) {
        return;
      }
      await _editTag({
        id,
        ...row
      });
      this.setState({ editingId: '' });
      this.getTags()
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
      <>
        <TagHead refresh={this.getTags}></TagHead>
        <Spin spinning={this.state.loading}>
          <Table
            bordered
            columns={columns}
            components={components}
            dataSource={this.state.record}
            pagination={{pageSize: 10, current: this.state.curPage, total: this.state.total}}
            rowKey="id"
          />
        </Spin>
      </>
    );
  }

  private edit = (id:number) => {
    this.setState({ editingId: id });
  }
  private deleteTag = async (id:number) => {
    let res = await _deleteTag({id});
    this.getTags();
  }

}

export default Editable;