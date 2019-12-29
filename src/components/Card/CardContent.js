import React from 'react';
import styled from "styled-components"

const CardInnerContainer = styled.div`
  width: 288px;
  height: 144px;
  object-fit: contain;
  border-radius: 8px;
  border: solid 1px #eeeeee;
  background-color: #ffffff;
  //padding: 14px 16px 9px 16px;
`;

const ChildContainer = styled.div`
  
`

const FlexContainer = styled.div`
  display: flex;
`

const MainHeaderContainer = styled.div`
  margin: 14px 16px 0 16px;
`

const CardButtonContainer = styled(FlexContainer)`
  justify-content: flex-end;
  margin-top: 5px;
`

const CardLargeBtn = styled.div`
  margin-left: 4px;
  width: 72px;
  border-radius: 15px;
  border: solid 1px #979797;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  color: #323434;
  vertical-align: middle;
  line-height: 24px;
`

const TitleContainer = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #000000;
`

const DescriptionContainer = styled.div`
  width: 256px;
  height: 60px;
  margin-top: 11px;
  font-size: 14px;
  font-weight: bold;
  color: #323434;
  word-wrap: break-word;
  overflow: hidden;
`

const DateContainer = styled.div`

`

const CardSmallBtn = styled(CardLargeBtn)`
  width: 32px;
`

export default class CardContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <CardInnerContainer>
        <ChildContainer>
          <MainHeaderContainer>
            <TitleContainer>
              NEXTERS\
              <span style={{ float: 'right', fontSize: '12px', color: 'rgba(0, 0, 0, 0.45)', marginTop: '2px' }}>
                since 2015
              </span>
            </TitleContainer>
            <DescriptionContainer>
              asdasdasdasdasdasdjkldsfjklsdjfklsdjfklsdjklfjsdklsdifgjfidghjiodfghudfhguifdhgiudfghuidfghdfiuh
            </DescriptionContainer>
          </MainHeaderContainer>
          <CardButtonContainer style={{ marginRight: '5px' }}>
            <CardLargeBtn>
              웹페이지
            </CardLargeBtn>
            <CardSmallBtn>
              f
            </CardSmallBtn>
            <CardSmallBtn>
              m
            </CardSmallBtn>
          </CardButtonContainer>
        </ChildContainer>
      </CardInnerContainer>
    )
  }
}

