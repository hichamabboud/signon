import NextLink from 'next/link';
import { EmailIcon } from '@chakra-ui/icons';
import {
	Box,
	Heading,
	Input,
	Text,
	Button,
	Stack,
	InputGroup,
	InputLeftAddon,
	Link,
} from '@chakra-ui/react';
import React from 'react';

export default function recoverPassword() {
	return (
		<Box w="500px">
			<Heading as="h2" size="md" mb={2} textAlign="center">
				<Text as="u" color="rgb(101, 63, 122)">
					Lost your password?
				</Text>
			</Heading>
			<form>
				<Stack spacing={4}>
					<InputGroup>
						<InputLeftAddon>
							<EmailIcon />
						</InputLeftAddon>
						<Input type="email" roundedLeft="0" placeholder="email" />
					</InputGroup>

					<Button bgColor="red" variant="solid">
						<Text fontSize="xl" color="white">
							Recover password
						</Text>
					</Button>
				</Stack>
			</form>
		</Box>
	);
}
