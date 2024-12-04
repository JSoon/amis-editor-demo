import React from 'react';
import {Renderer, RendererProps} from 'amis';
import Container from 'amis/lib/renderers/Container';
import demoImage from './assets/dataVisualization/demo.png';

export interface RendererDemoProps extends RendererProps {
  target: string;
}
@Renderer({
  type: 'renderer-demo',
  name: 'renderer-demo'
})
export default class RendererDemoRenderer extends React.Component<RendererDemoProps> {
  render() {
    const {target, width, height} = this.props;
    console.log(this.props);

    return (
      //@ts-ignore
      <Container
        {...this.props}
        bodyClassName="h-full"
        children={() => (
          <img
            src={demoImage}
            style={{
              display: 'block',
              width: '100%',
              height: '100%'
            }}
          />
        )}
      />
    );
  }
}
