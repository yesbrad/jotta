import React from 'react';
import {Container, MainContainer, CardContainer, HeaderWrapper, HeaderText} from './styles';

const Header = ({children}) => {
	return (
		<Container>
			<HeaderWrapper>
				<HeaderText>Jotta</HeaderText>
			</HeaderWrapper>
			<MainContainer>
				{children}
			</MainContainer>
		</Container>
	);
};

export default Header;
