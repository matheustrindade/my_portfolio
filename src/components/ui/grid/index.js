import styled from 'styled-components'

export const Row = styled.div`
	display: flex
	${props => props.flexColumn ? `flex-direction: column;` : ``}
	margin: 0 -1rem;

`

export const Column = styled.div`
	flex: 0 0 ${props => {

		let size = 0

		if (!isNaN(Number(props.size))) {

			if (Number(props.size) < 0) {
				size = 0
			} else if (Number(props.size) < 12) {
				size = 12
			} else {
				size = props.size
			}

		} else {
			size = 0
		}

		return `${(Number(props.size) * 100) / 12}%`

	}};
	padding: 0 1rem;
`

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
`