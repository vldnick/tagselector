// https://github.com/gregberge/svgr/issues/83#issuecomment-785996587
// @ts-ignore
import React, { SVGProps } from 'react';

const SvgrMock = React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  // eslint-disable-next-line react/jsx-props-no-spreading
  (props, ref) => <svg ref={ref} {...props} />,
);

SvgrMock.displayName = 'SvgrMock';

export const ReactComponent = SvgrMock;
export default SvgrMock;
