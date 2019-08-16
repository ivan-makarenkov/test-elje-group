import * as React from 'react';
import styled from 'styled-components'

interface Props {
    href: string
    className?: string
    clickHandler?(): any
}

const CloseBtn: React.FC<Props> = (props) => {
    const Btn = styled.a`
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    cursor: pointer;
    
    &:hover {
      &::before,
      &::after {
        background-color: #444;
      }
    }
    
    &::before,
    &::after {
      position: absolute;
      left: 15px;
      content: '';
      height: 40px;
      width: 3px;
      background-color: #000;
    }
    
    &::before {
      transform: rotate(45deg);
    }
    
    &::after {
      transform: rotate(-45deg);
    }
  `;

    return <Btn href={props.href} className={props.className} onClick={props.clickHandler}/>
};

export default CloseBtn
