import React from 'react';
import {Renderer, RendererProps} from 'amis';
import Container from 'amis/lib/renderers/Container';

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

    return (
      //@ts-ignore
      <Container {...this.props} children={}>
        <p>Hello {target}! @amis-editor</p>
      </Container>
    );
  }
}
