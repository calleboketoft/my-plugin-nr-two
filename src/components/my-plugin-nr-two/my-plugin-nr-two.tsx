import { Component } from '@stencil/core';
import { pluginComm } from 'plugin-comm'
@Component({
  tag: 'my-plugin-nr-two',
  shadow: true
})
export class MyPluginNrTwoComponent {
  render() {
    return (
      <div>
        Plugin nr two &nbsp;&nbsp;
        <button onClick={ () => this.sendDataToPlatform() }>
          Send data to platform
        </button>
      </div>
    );
  }

  componentDidLoad() {
    console.log('registering plugin callback for "my-plugin-nr-two"')
    pluginComm.pluginRegisterDataCallback('my-plugin-nr-two', this.dataFromPlatform.bind(this))
  }

  dataFromPlatform (data) {
    console.log('Data received from platform in plugin two', data)
  }

  sendDataToPlatform () {
    const dataForPlatform = {someData: 'from plugin to platform'}
    pluginComm.pluginSendDataToPlatform(dataForPlatform)
  }

  componentDidUnload(){
    console.log('Plugin nr two: removed from DOM and now unregistering')
    pluginComm.pluginUnregisterDataCallback('my-plugin-nr-two')
  }
}
