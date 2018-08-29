import React from 'react';

const userOutput = (props) => {
	const style = {
      margin: '10px auto',
      width: '200px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    }
	return (
		<div style={style} className="userOutput">
			<p>Hello, {props.name}!</p>
			<p>{props.children}</p>
		</div>
	)
}

export default userOutput;