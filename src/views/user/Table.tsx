import React, { Component } from 'react'
import { Table, Spin } from 'antd';
import { _searchUser } from "../../apis/user"
import dayjs from "dayjs"


class Editable extends Component {
  public state = {
    loading: false,
    record: [],
    editingId: '',
    curPage: 1,
    total: 0,
    columns: [
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username'
      },
      {
        title: '创建时间',
        dataIndex: 'createdDate',
        key: 'createdDate',
        render: (text: string) => {
          return <div> {dayjs(text).format("YYYY-MM-DD")} </div>
        }
      },
      {
        title: '权限等级',
        dataIndex: 'grade',
        key: 'grade'
      }
    ]
  }

  public componentDidMount() {
    this.getUsers()
  }

  public getUsers = async () => {
    this.setState({
      loading: true
    })
    try {
      const res = await _searchUser()
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
      <Spin spinning={this.state.loading}>
        <Table
          bordered
          columns={this.state.columns}
          dataSource={this.state.record}
          pagination={{pageSize: 10, current: this.state.curPage, total: this.state.total}}
          rowKey="id"
        />
      </Spin>
    );
  }
}

export default Editable;