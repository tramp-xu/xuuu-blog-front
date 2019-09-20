import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  .article-wrapper {
    flex: 1;
    padding: 20px;
  }

  .minor-info {
    padding: 20px;
    width: 25%;
    background: red;
  }
`
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
`