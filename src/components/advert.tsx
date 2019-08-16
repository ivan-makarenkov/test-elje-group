import * as React from 'react';
import styled from 'styled-components'

import ProgressBar from "./progress-bar";
import CloseBtn from "./close-btn";

interface AdvertProps {
    landscapeImg: string
    portraitImg: string
}

export const Advert: React.FC<AdvertProps> = (props) => {

    const [timeHasPassed, changeTimeHasPassed] = React.useState(false);
    const [imageSrc, setImageSrc] = React.useState(props.landscapeImg);
    const [showAdvert, setShowAdvert] = React.useState(true);

    const initCounter = () => {
        setTimeout(() => {
            changeTimeHasPassed(true);
        }, 3000);
    };

    React.useEffect(() => {
        initCounter();
        changeSrcByOrientation();
        if ((window.screen.orientation) && ('onchange' in window.screen.orientation)) {
            window.screen.orientation.addEventListener('change', onOrientationChange)
        } else if ('onorientationchange' in window) {
            window.addEventListener('orientationchange', onOrientationChange)
        }
        return () => {
            if ((window.screen.orientation) && ('onchange' in window.screen.orientation)) {
                window.screen.orientation.removeEventListener('change', onOrientationChange)
            } else if ('onorientationchange' in window) {
                window.removeEventListener('orientationchange', onOrientationChange)
            }
        };
    }, []);

    const onOrientationChange = () => {
        changeSrcByOrientation();
    };

    const changeSrcByOrientation = () => {
        let angle = 0;
        if (window.screen.orientation) {
            angle = Math.abs(window.screen.orientation.angle);
        }
        if (angle == 90) {
            setImageSrc(props.landscapeImg);
        } else {
            setImageSrc(props.portraitImg);
        }
    };

    const closeAdvert = () => {
        setShowAdvert(false);
    };

    const Img = styled.img`
      max-height: 100vh;
      max-width: 100vw;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;

    const ProgressBarStyled = styled(ProgressBar)`
      bottom: 30px;
      z-index: 2;
      left: 50%;
      transform: translateX(-50%);
    `;

    const CloseBtnStyled = styled(CloseBtn)`
      top: 18px;
      right: 18px;
      z-index: 2;
    `;
    if (!showAdvert) {
        return <main/>;
    }
    return <main>
        {timeHasPassed && <CloseBtnStyled href={'#'} clickHandler={closeAdvert}/>}
        <Img src={imageSrc} alt=""/>
        {!timeHasPassed && <ProgressBarStyled/>}
    </main>

};
