import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Heading,
	HStack,
	Image,
	Input,
	Stack,
	Text,
	Link,
	InputGroup,
	InputLeftAddon,
	InputRightElement,
	VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useState } from 'react';
import NavBar from '../../components/NavBar';

export default function SignIn() {
	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<>
			<Head>
				<title> List A Property | Travel Nurse Housing - </title>
				<meta name="author" content="Affordable Short term rentls" />
				<meta
					name="description"
					content="List your property with a trusted marketplace, that is dedicated to connecting you with tens of thousands traveling healthcare professionals."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<HStack spacing={8} mt={16}>
				<Box ml="50px" h="90vh" w="100%">
					<Image mt="12%" src="/traveler-in-airport.jpeg" alt="healthcare" />
				</Box>
				<Box h="80vh" w="100%" p={8}>
					<Stack spacing={4}>
						<Box>
							<Heading as="h2" size="md" mb={2}>
								<Text as="u" color="rgb(101, 63, 122)">
									Welcome Traveler
								</Text>
							</Heading>
							<Text>
								Do you need to create an account?
								<Button
									variant="link"
									colorScheme="gray.600"
									fontSize="sm"
									ml={2}>
									<NextLink href="/traveler/signup">
										<Link>
											<Text> Sign up here </Text>
										</Link>
									</NextLink>
								</Button>
							</Text>
						</Box>
						<form>
							<Stack spacing={4}>
								<InputGroup>
									<InputLeftAddon>
										<EmailIcon />
									</InputLeftAddon>
									<Input type="email" roundedLeft="0" placeholder="email" />
								</InputGroup>

								<InputGroup>
									<InputLeftAddon>
										<LockIcon />
									</InputLeftAddon>
									<Input
										type={!showPassword ? 'password' : 'text'}
										roundedLeft="0"
										placeholder="*******"
									/>
									<InputRightElement width="4.5rem">
										<Button h="1.75rem" size="sm" onClick={handleShowPassword}>
											{showPassword ? 'Hide' : 'Show'}
										</Button>
									</InputRightElement>
								</InputGroup>

								<Button bgColor="red" variant="solid">
									<Text fontSize="xl" color="white">
										Login
									</Text>
								</Button>

								<NextLink href="/traveler/signup" passHref>
									<Link>
										<Button variant="outline" w="100%" borderColor="#205493">
											<Text fontSize="md" color="#205493">
												Create an account
											</Text>
										</Button>
									</Link>
								</NextLink>
							</Stack>
						</form>
						<hr />
						<Box alignSelf="center">Forgot my password</Box>
					</Stack>
				</Box>
			</HStack>
		</>
	);
}
