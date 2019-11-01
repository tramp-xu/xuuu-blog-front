import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  .article-wrapper {
    flex: 1;
    padding: 20px;

    & > div {
      margin-bottom: 20px;
    }
  }
  

  .minor-info {
    padding: 20px;
    width: 25%;
    background: red;
  }
`;
export const SwapperWrapper = styled.div`
  .ant-carousel .slick-slide {
    text-align: center;
    height: 260px;
    line-height: 260px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;

export const ArticleStyle = styled.div`
  article {
    border: 1px solid #ebedf0;
    padding: 20px 0 10px;
    border-radius: 3px;
    

    header {
      display: flex;
      height: 40px;
      margin-bottom: 10px;
      padding: 0 10px;
      cursor: pointer;

      .title {
        flex: 1;
        font-size: 18px;
        font-weight: 700;
      }
      &:hover {
        .title {
          color: #40a9ff;
          text-decoration: underline;
        }
      }
    }


    .label {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.45);
      margin-right: 4px;
    }

    .short {
      padding: 0 10px;
    }

    footer {
      display: flex;
      padding-top: 10px;
      border-top: 1px dashed #ebedf0;
      padding: 10px;
    }
    .tags-wrapper {
      flex: 1;
    }
  }
`;

export const DetailWrapper = styled.div`
  padding: 20px 20px 20px 40px;

  .title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .info {
    color: #909090;
  }

  .content {
    margin: 20px 0 40px;
  }

  footer {
    display: flex;
    justify-content: space-between;
  }
`;