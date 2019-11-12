import * as React from 'react';
import { Wapper } from './style'
import { Table, Button, Spin, Empty } from 'antd';
import { _searchTag } from "../../apis/tag"
import TagHead from "./Head";

const ButtonGroup = Button.Group;

export interface IState {
  loading: boolean
  record: any[]
}

const columns = [
  {
    title: '标签名',
    key: 'name',
    dataIndex: 'name',
    render: (text:string) => <a>{text}</a>
  },
  {
    title: '创建者',
    dataIndex: 'created_by',
    key: 'created_by',
    render: (text:string) => <a>{text}</a>,
  },
  {
    title: '操作',
    key: 'action',
    render: (text:string, record:any) => (
      <ButtonGroup>
        <Button type="primary" size="small" icon="edit" />
        <Button type="primary" size="small" icon="delete" />
      </ButtonGroup>
    ),
  },
];


export default class TagCpt extends React.Component<{}, IState> {

  public state = {
    loading: false,
    record: []
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
            this.state.record.length ? <Table columns={columns} dataSource={this.state.record} rowKey='id' /> : <Empty></Empty>
          }
          
        </Spin>
      </Wapper>
    );
  }
}
