import * as React from 'react';
import { Wapper } from './style'
import { Table, Button, Spin, Empty, Modal } from 'antd';
import { _searchTag, _deleteTag } from "../../apis/tag"
import TagHead from "./Head";
import Editable from "../../components/editableTable";

const ButtonGroup = Button.Group;
const confirm = Modal.confirm

export interface IState {
  loading: boolean
  record: any[]
}

const columns = [
  {
    title: '标签名',
    key: 'name',
    dataIndex: 'name',
    render: (text:string) => <span>{text}</span>
  },
  {
    title: '创建者',
    dataIndex: 'created_by',
    key: 'created_by',
    render: (text:string) => <span>{text}</span>
  }
];


export default class TagCpt extends React.Component<{}, IState> {

  public state = {
    loading: false,
    record: [],
    columns: [...columns,
      {
        title: '操作',
        key: 'action',
        render: (record:any) => (
          <ButtonGroup>
            <Button type="primary" size="small" icon="edit" />
            <Button type="primary" size="small" icon="delete" onClick={() => this.showEditConfirm(record)} />
          </ButtonGroup>
        ),
      },]
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

  public render() {
    return (
      <Wapper>
        <TagHead refresh={this.getTags}></TagHead>
        <Spin tip='Loading' spinning={this.state.loading}>
          {
            this.state.record.length ? <Table columns={this.state.columns} dataSource={this.state.record} rowKey='id' /> : <Empty></Empty>
          }
          
        </Spin>
        <Editable></Editable>
      </Wapper>
    );
  }

  private deleteTag = async (id:number) => {
    try {
      await _deleteTag({id})
    } catch (error) {
      console.log(error)
    }
  }

  private showEditConfirm = (record:any) => {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this
    confirm({
      title: '提示',
      content: `是否删除${record.name}标签?`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        await _this.deleteTag(record.id)
        _this.getTags()
      }
    })
  }
}
