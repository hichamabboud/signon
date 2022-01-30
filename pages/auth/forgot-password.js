import { Input } from '@chakra-ui/react';
import React from 'react';

export default function forgotPSWD() {
	return (
		<>
			<form>
				<Input placeholder="Please enter your email" type="email" />
			</form>
		</>
	);
}
