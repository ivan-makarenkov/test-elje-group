import * as React from 'react';
import styled from 'styled-components'

interface Props {
    className?: string
}

const ProgressBar: React.FC<Props> = (props) => {
    const BarWrapper = styled.div`
    position: absolute;
    width: 80%;
    height: 6px;
    background-color: #da4733;
  `;

    const Bar = styled.div`
    @keyframes loading {
      from {left: 0; width: 100%;z-index:100;}
      33.3333% {left: 0; width: 100%;z-index: 10;}
      to {left: 100%; width: 0;}
    }
    
    content: "";
    display: inline;
    position: absolute;
    width: 0;
    height: 100%;
    left: 50%;    
    background-color: #fdba2c;
    animation: loading 3s infinite linear;
  `;


    return <BarWrapper className={props.className}>
        <Bar/>
    </BarWrapper>
};

export default ProgressBar
