import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  width: 400px;

  .add-row {
    display: flex;
    margin-bottom: 10px;
  }

  .todoList-item {
    border: 1px solid #eee;
    padding: 6px 1em;
    border-width: 1px 1px 0;
    padding-right: 20px;
    position: relative;

    &:last-child {
      border-bottom: 1px solid #eee;
    }

    .delete-icon {
      position: absolute;
      top: 50%;
      right: 4px;
      transform: translateY(-50%);

      &:hover {
        color: #1890ff;
        cursor: pointer;
      }
    }
  }
`;