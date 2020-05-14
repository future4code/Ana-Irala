import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends React.Component {
	state = {
		input: ""

	}

	onChangeComentario = (event) => {
		const novoComentario = event.target.value
		this.setStatus({ comentario : novoComentario })
    }

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={''}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
