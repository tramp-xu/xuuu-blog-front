import * as React from 'react';
import { Wapper } from './style'
import { _searchTag, _deleteTag } from "../../apis/tag"
import Editable from "./Table";

export default class TagCpt extends React.Component {
  public render() {
    return (
      <Wapper>
        <Editable ></Editable>
      </Wapper>
    );
  }

}
