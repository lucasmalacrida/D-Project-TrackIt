import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-family: 'Lexend Deca', sans-serif;
		font-weight: 400;
	}

	h1 {
		font-family: 'Playball', cursive;
		font-weight: 400;
		font-size: 69px;
		line-height: 86px;
		color: #126BA5;
	}

	h2 {
		font-family: 'Playball', cursive;
		font-weight: 400;
		font-size: 39px;
		line-height: 49px;
		color: #FFFFFF;
	}

	a {
		&:-webkit-any-link {
			text-decoration: none;
			color: white;
			cursor: pointer;
		}
	}
`

export default GlobalStyle