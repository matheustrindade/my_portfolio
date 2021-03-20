import React, { memo } from 'react'
import styled from 'styled-components'
import { Container } from '../components/ui/grid'

const EntryContainer = styled(Container)`
	align-items: center;
	background-color: ${props => props.theme.base.main};
	display: flex;
	height: 100vh;
	justify-content: center;
	overflow: hidden;
`



const EntryButton = styled.a`
	background-color: transparent;
	border: none;
	color: ${props => props.theme.text.main};	
	font-size: 4rem;
	line-height: 4rem;
	letter-spacing: 1rem;
	overflow: hidden;
	padding: 1rem 2rem;
	position: relative;
	

	&::after,
	&::before,
	& span::after,
	& span::before {
		background: ${props => props.theme.text.main};
		content: '';
		position: absolute;
		transition: transform 300ms ease;
		width: .125rem;
	}


	&::after {
		height: 100%;
		right: 0;
		transform: translateY(100%);
		top: 0;
	}

	&::before {
		height: 100%;
		left: 0;
		transform: translateY(-100%);
		top: 0;
		width: .125rem;
	}
	
	& span::after {
		bottom: 0;
		height: .125rem;
		left: 0;
		transform: translateX(calc(-100% - .125rem));
		width: 100%;
	}

	& span::before {
		height: .125rem;
		left: 0;
		top: 0;
		transform: translateX(calc(100% + .125rem));
		width: 100%;
	}

	&:hover::after,
	&:hover::before {
		transform: translateY(0);
	}

	&:hover span::after,
	&:hover span::before {
		transform: translateX(0);
	}
`

const Entry = memo(() => <EntryContainer>
	<EntryButton>
		entrar
		<span></span>
	</EntryButton>
</EntryContainer>)


export default Entry