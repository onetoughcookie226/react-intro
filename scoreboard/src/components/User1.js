import React, { PureComponent } from 'react'

export default class User1 extends PureComponent {
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
            <div>
                <p>
                    "User: "
                    <b>Dana</b>
                    <div>
                        <p>Dana is <b>{ this.state.active ? 'present' : 'not present' }</b></p>
                        <button onClick={this.toggle}>Toggle</button>
                    </div>
                </p>
            </div> 				
		</div>
</main>
	
	)
}
}