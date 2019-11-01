import * as React from 'react';
import { Modal, Icon } from 'antd';

const { confirm } = Modal;

export interface ITodoListItemProps {
  title: string,
  index: number,
  confirmDelete: (index: number) => void
}



export default function TodoListItem (props: ITodoListItemProps) {
  const {confirmDelete, title, index} = props

  const showDeleteConfirm = (index: number, title: string) => {
    confirm({
      title: '确认删除此任务?',
      content: `确认删除 ${title} 此任务`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        confirmDelete(index)
      }
    });
  }
  
  return (
    <div className="todoList-item">
      { title }
      <Icon className="delete-icon" type="close-circle" theme="filled" onClick={() => showDeleteConfirm(index, title)} />
    </div>
  );
}
