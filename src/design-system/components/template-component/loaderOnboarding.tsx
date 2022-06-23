import React from 'react';
import LogoLoaderOnBoarding from '../../../assets/on-boarding/logoLoaderSplash';
import BusLoaderOnBoarding from '../../../assets/on-boarding/busOnboardingLoader';
import ImageLoaderTop from '../../../assets/on-boarding/topMareLoader';
import ImageLoaderBottom from '../../../assets/on-boarding/bottomMareOnboarding';
import {Background} from './styles';

import {ImageTemplateSvg} from '../atom-component';

export default function LoaderOnboarding() {
  return (
    <Background>
      <ImageTemplateSvg imageProps={ImageLoaderTop} />
      <ImageTemplateSvg imageProps={LogoLoaderOnBoarding} />
      <ImageTemplateSvg imageProps={BusLoaderOnBoarding} />
      <ImageTemplateSvg imageProps={ImageLoaderBottom} />
    </Background>
  );
}
