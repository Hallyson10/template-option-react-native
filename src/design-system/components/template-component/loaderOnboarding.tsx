import React from 'react';
import {SvgXml} from 'react-native-svg';
import LogoLoaderOnBoarding from '../../../assets/on-boarding/logoLoaderSplash';
import BusLoaderOnBoarding from '../../../assets/on-boarding/busOnboardingLoader';
import ImageLoaderTop from '../../../assets/on-boarding/topMareLoader';
import ImageLoaderBottom from '../../../assets/on-boarding/bottomMareOnboarding';
import ImageLineLoaderBottom from '../../../assets/on-boarding/lineBottomLoader';
import ImageLineLoaderTop from '../../../assets/on-boarding/lineTopLoader';

import {Background, ViewCenter} from './styles';

export default function LoaderOnboarding() {
  return (
    <Background>
      <SvgXml xml={ImageLoaderTop} style={{position: 'absolute', right: 0}} />
      <SvgXml
        xml={ImageLineLoaderTop}
        style={{position: 'absolute', right: 0}}
      />
      <ViewCenter>
        <SvgXml xml={LogoLoaderOnBoarding} />
        <SvgXml xml={BusLoaderOnBoarding} />
      </ViewCenter>
      <SvgXml
        xml={ImageLoaderBottom}
        style={{position: 'absolute', bottom: 0}}
        width={'100%'}
      />
      <SvgXml
        xml={ImageLineLoaderBottom}
        style={{position: 'absolute', bottom: 0}}
      />
    </Background>
  );
}
