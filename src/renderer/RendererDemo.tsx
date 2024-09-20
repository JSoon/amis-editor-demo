import React from 'react';
import {Renderer, RendererProps} from 'amis';

export interface RendererDemoProps extends RendererProps {
  target: string;
}
@Renderer({
  type: 'renderer-demo',
  name: 'renderer-demo'
})
export default class RendererDemoRenderer extends React.Component<RendererDemoProps> {
  render() {
    const {target} = this.props;

    return <p>Hello {target}! @amis-editor</p>;
  }
}
