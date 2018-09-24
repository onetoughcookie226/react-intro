import React, { PureComponent } from 'react'
import Title from './Title';

import User from './User'
import User1 from './User1'
import User2 from './User2'

export default class UserBoard extends PureComponent {
//     state = { active: true }
// 	toggle = () => {
//     this.setState({
//       active: !this.state.active
//     })
//   }

render() {
    return(
        <div>
            <Title content="helloooo" />
            <User />
            <User1 />
            <User2 />
        </div>     
    )
    }
}

// export default UserBoard;
