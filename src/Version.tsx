import React from 'react'
import { app } from '@tauri-apps/api'

type VersionState = {
  AppVersion?: string,
  TauriVersion?: string,
}

export default class VersionComponent extends React.Component<{}, VersionState> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  async componentWillMount() {
    const version = await app.getVersion();
    const tauriVersion = await app.getTauriVersion();
    const state: VersionState = {
      AppVersion: version,
      TauriVersion: tauriVersion,
    }
    this.setState(state)
  }

  render() {
    return (
      <div>
        <span>App version: {this.state.AppVersion}, Tauri version: {this.state.TauriVersion}</span>
      </div>
    )
  }
}
