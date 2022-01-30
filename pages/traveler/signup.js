import {
	Box,
	FormControl,
	FormLabel,
	Text,
	Input,
	FormErrorMessage,
	InputGroup,
	InputRightElement,
	Button,
	InputLeftAddon,
	Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { EmailIcon, LockIcon, PhoneIcon } from '@chakra-ui/icons';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import { useForm } from 'react-hook-form';

export default function SignUp() {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();

	function onSubmit(values) {
		return new Promise((resolve) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				resolve();
			}, 1000);
		});
	}

	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const [showConfirmedPassword, setConfirmedShowPassword] = useState(false);
	const handleConfirmedShowPassword = () => {
		setConfirmedShowPassword(!showConfirmedPassword);
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
			<Flex justifyContent="center" mt="10rem">
				<form onSubmit={handleSubmit(onSubmit)} border="2px solid blue">
					<Box d="flex">
						<FormControl isInvalid={errors.travelerFirstName} w="250px" mr={16}>
							<FormLabel htmlFor="travelerFirstName">
								<Box d="flex">
									First name
									<Text color="red" ml={2}>
										*
									</Text>
								</Box>
							</FormLabel>
							<Input
								id="travelerFirstName"
								placeholder="first name"
								{...register('travelerFirstName', {
									required: 'This is required',
									minLength: {
										value: 4,
										message: 'Minimum length should be 4',
									},
								})}
							/>
							<FormErrorMessage>
								{errors.travelerFirstName && errors.travelerFirstName.message}
							</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={errors.travelerLastName} w="250px">
							<FormLabel htmlFor="travelerLastName">
								<Box d="flex">
									Last name
									<Text color="red" ml={2}>
										*
									</Text>
								</Box>
							</FormLabel>
							<Input
								id="travelerLastName"
								placeholder="last name"
								{...register('travelerLastName', {
									required: 'This is required',
									minLength: {
										value: 4,
										message: 'Minimum length should be 4',
									},
								})}
							/>
							<FormErrorMessage>
								{errors.travelerLastName && errors.travelerLastName.message}
							</FormErrorMessage>
						</FormControl>
					</Box>

					{/* Email address input  */}
					<FormControl isInvalid={errors.email} w="565px" mt={6}>
						<FormLabel htmlFor="email">
							<Box d="flex">
								Email address
								<Text color="red" ml={2}>
									*
								</Text>
							</Box>
						</FormLabel>

						<InputGroup>
							<InputLeftAddon>
								<EmailIcon />
							</InputLeftAddon>
							<Input
								type="email"
								id="email"
								placeholder="email address"
								{...register('email', {
									required: 'This is required',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'invalid email address',
									},
								})}
							/>
						</InputGroup>

						<FormErrorMessage>
							{errors.email && errors.email.message}
						</FormErrorMessage>
					</FormControl>

					{/* Phone number input  */}
					<FormControl isInvalid={errors.phoneNumber} w="565px" mt={6}>
						<FormLabel htmlFor="phoneNumber">
							<Box d="flex">
								Phone Number
								<Text color="red" ml={2}>
									*
								</Text>
							</Box>
						</FormLabel>

						<InputGroup>
							<InputLeftAddon>
								<PhoneIcon />
							</InputLeftAddon>
							<Input
								type="number"
								id="phoneNumber"
								placeholder="123 456 7890"
								{...register('phoneNumber', {
									required: 'This is required',
									minLength: {
										value: 10,
										message: 'Please enter a valid US number',
									},
									maxLength: {
										value: 10,
										message: 'Please enter a valid US number',
									},
								})}
							/>
						</InputGroup>

						<FormErrorMessage>
							{errors.phoneNumber && errors.phoneNumber.message}
						</FormErrorMessage>
					</FormControl>

					{/* password input  */}
					<FormControl isInvalid={errors.password} w="565px" mt={6}>
						<FormLabel htmlFor="password">
							<Box d="flex">
								Password
								<Text color="red" ml={2}>
									*
								</Text>
							</Box>
						</FormLabel>

						<InputGroup>
							<InputLeftAddon>
								<LockIcon />
							</InputLeftAddon>
							<Input
								type={!showPassword ? 'password' : 'text'}
								id="password"
								placeholder="********"
								{...register('password', {
									required: 'This is required',
									pattern: {
										message: 'confirmed password does not match',
									},
								})}
							/>
							<InputRightElement width="4.5rem">
								<Button h="1.75rem" size="sm" onClick={handleShowPassword}>
									{showPassword ? 'Hide' : 'Show'}
								</Button>
							</InputRightElement>
						</InputGroup>

						<FormErrorMessage>
							{errors.password && errors.password.message}
						</FormErrorMessage>
					</FormControl>

					{/* confirm password input  */}
					<FormControl isInvalid={errors.confirmPassword} w="565px" mt={6}>
						<FormLabel htmlFor="confirmPassword">
							<Box d="flex">
								Confirm Password
								<Text color="red" ml={2}>
									*
								</Text>
							</Box>
						</FormLabel>

						<InputGroup>
							<InputLeftAddon>
								<LockIcon />
							</InputLeftAddon>
							<Input
								type={!showConfirmedPassword ? 'password' : 'text'}
								id="confirmPassword"
								placeholder="********"
								{...register('confirmPassword', {
									required: 'This is required',
									pattern: {
										message: 'confirmed password does not match',
									},
								})}
							/>
							<InputRightElement width="4.5rem">
								<Button
									h="1.75rem"
									size="sm"
									onClick={handleConfirmedShowPassword}>
									{showConfirmedPassword ? 'Hide' : 'Show'}
								</Button>
							</InputRightElement>
						</InputGroup>

						<FormErrorMessage>
							{errors.confirmPassword && errors.confirmPassword.message}
						</FormErrorMessage>
					</FormControl>
					<Button
						width="570px"
						mt={4}
						colorScheme="teal"
						isLoading={isSubmitting}
						type="submit">
						Sign up
					</Button>
				</form>
			</Flex>
		</>
	);
}
