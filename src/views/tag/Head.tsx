import React, { Component } from 'react'
import { Input, Button } from "antd";
import TagAdd from "./Add";
// name 是新增的 tag 名
type RefreshTag = () => void

interface IProps {
  refresh: RefreshTag
}

export default class TagHead extends Component<IProps> {

  
  public render() {
    return (
      <div>
        <TagAdd refresh={this.props.refresh}></TagAdd>
      </div>
    )
  }
  
}
