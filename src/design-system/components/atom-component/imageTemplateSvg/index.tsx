import React from 'react';
import {SvgXml} from 'react-native-svg';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageProps: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;
};
export default function Image({imageProps, props}: Props) {
  return <SvgXml xml={imageProps} {...props} />;
}
