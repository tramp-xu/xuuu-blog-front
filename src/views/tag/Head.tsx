import React, { Component } from 'react'
import TagAdd from "./Add";
// name 是新增的 tag 名
type RefreshTag = () => void

interface IProps {
  refresh: RefreshTag
}

export default class TagHead extends Component<IProps> {

  
  public render() {
    return (
      <header className="header">
        <TagAdd refresh={this.props.refresh}></TagAdd>
      </header>
    )
  }
  
}
