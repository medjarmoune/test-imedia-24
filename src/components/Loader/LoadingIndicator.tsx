import React from 'react'
// @ts-ignore
import styled from "styled-components";


// styling
const LoadingWrap = styled.div`
  display: flex;
  margin-top: 7px;
  margin-left: 7px;
`;

const LoadingDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-left: 3px;
  animation: updown 0.3s infinite alternate;
  background: ${(props:any) => props.color ? props.color : 'rgb(37, 48, 85)'};
  &:nth-child(2) {
    animation-delay: 0.2s
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  @keyframes updown {
    to {
      opacity: 0.2;
      transform: translatey(-4px)
    }
  }
`;

const LoadingIndicator = ({color}:any) => {
    return (
        <LoadingWrap>
            <LoadingDot color={color}></LoadingDot>
            <LoadingDot color={color}></LoadingDot>
            <LoadingDot color={color}></LoadingDot>
        </LoadingWrap>
    );
}

export default LoadingIndicator
