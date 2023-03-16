import { createGlobalStyle } from "styled-components";

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

    form {
        display: flex;
        flex-direction: column;
    }

	input {
		box-sizing: border-box;
		border: 1px solid #D4D4D4;
		border-radius: 5px;
		width: 310px;
		height:45px;
		margin: 0px auto 6px;

		padding-left: 11px;
		font-family: 'Lexend Deca', sans-serif;
		font-weight: 400;
		font-size: 20px;
		line-height: 25px;

		&::placeholder {
			color: #DBDBDB;
		}
	}

	button {
        display: block;
        margin: 0px auto;
        border-radius: 5px;
        background-color: #52B6FF;
        color: white;
		text-align: center;
    }
`;

export default GlobalStyle;