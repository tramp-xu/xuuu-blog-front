import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;

  .content-wrapper {
    display: flex;
    border: 1px solid #bebebe;
    padding: 10px 20px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 4px -3px black;
    .write {
      flex: 1;
     
    }
    .read {
      flex: 1;
      margin-left: 10px;

      .title {
        line-height: 40px;
        color: rgba(0, 0, 0, 0.85);
      }
    }  
  }

  footer {
    .ant-btn {
      margin-right: 10px;
    }
  }
`