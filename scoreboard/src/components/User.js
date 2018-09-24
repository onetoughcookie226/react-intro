import React, { PureComponent } from 'react'

export default class User extends PureComponent {
  state = { active: true }
	toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

render() {
	return (
		<main>
		<div>
				<h3>User Board</h3>
					<div>
						<p>
							"User: "
							<b>Alice</b>
								<div>
								<p>Alice is <b>{ this.state.active ? 'present' : 'not present' }</b></p>
								<button onClick={this.toggle}>Toggle</button>
								</div>
						</p>
					</div>					
		</div>
</main>
	
	)
}
}