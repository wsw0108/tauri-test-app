import React from 'react'
import { fs, path, notification } from '@tauri-apps/api'

type ResourcesState = {
  name?: string,
}

export default class ResourcesComponent extends React.Component<{}, ResourcesState> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  async componentWillMount() {
    try {
      const json = await fs.readTextFile('test.json', { dir: fs.BaseDirectory.Resource })
    } catch (err: any) {
      notification.sendNotification(err)
    }
    //const obj: { name: string } = JSON.parse(json)
    //this.setState({ name: obj.name })
    const resourceDir = await path.resourceDir()
    this.setState({ name: resourceDir })
  }

  render() {
    return (
      <div>
        <span>App name: {this.state.name}</span>
      </div>
    )
  }
}
