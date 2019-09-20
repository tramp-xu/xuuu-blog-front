import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 0 20px;
  border-bottom: 1px solid #e8e8e8;
  align-items: center;
  
  .nav-menu {
    flex: 1;
    .ant-menu-horizontal {
      border-bottom: none;
    }
  }

  .user {
    font-weight: 700;
  }
`;