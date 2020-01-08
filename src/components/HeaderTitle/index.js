import React, { useState } from 'react';
import {Container, Title} from './styles';

const HeaderTitle = ({title}) => (
	<Container>
		<Title>{title}</Title>
	</Container>
);

export default HeaderTitle;
