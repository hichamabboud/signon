import { useState } from 'react';
import { EmailIcon, LockIcon, PhoneIcon } from '@chakra-ui/icons';
import {
	Box,
	Text,
	Tabs,
	TabPanels,
	TabPanel,
	InputGroup,
	InputLeftAddon,
	TabList,
	Tab,
	Image,
	Input,
	InputRightElement,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
} from '@chakra-ui/react';
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
			<Box>
				<Tabs defaultIndex={1}>
					<TabPanels>
						<TabPanel>
							<Image
								boxSize="200px"
								fit="cover"
								src="/independent-landlord.png"
								alt="property-manager"
							/>
						</TabPanel>

						<TabPanel>
							<Image
								boxSize="200px"
								src="/property-manager.png"
								fit="cover"
								alt="independent-landlord"
							/>
						</TabPanel>
					</TabPanels>
					<TabList>
						<Tab> Independent Landlord </Tab>
						<Tab> Property Manager </Tab>
					</TabList>

					<TabPanels>
						<TabPanel>
							<form onSubmit={handleSubmit(onSubmit)}>
								<Box d="flex">
									<FormControl isInvalid={errors.firstName} w="250px" mr={16}>
										<FormLabel htmlFor="firstName">
											<Box d="flex">
												First name
												<Text color="red" ml={2}>
													*
												</Text>
											</Box>
										</FormLabel>
										<Input
											id="firstName"
											placeholder="first name"
											{...register('firstName', {
												required: 'This is required',
												minLength: {
													value: 4,
													message: 'Minimum length should be 4',
												},
											})}
										/>
										<FormErrorMessage>
											{errors.firstName && errors.firstName.message}
										</FormErrorMessage>
									</FormControl>

									<FormControl isInvalid={errors.lastName} w="250px">
										<FormLabel htmlFor="lastName">
											<Box d="flex">
												Last name
												<Text color="red" ml={2}>
													*
												</Text>
											</Box>
										</FormLabel>
										<Input
											id="lastName"
											placeholder="last name"
											{...register('lastName', {
												required: 'This is required',
												minLength: {
													value: 4,
													message: 'Minimum length should be 4',
												},
											})}
										/>
										<FormErrorMessage>
											{errors.lastName && errors.lastName.message}
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
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													message: 'invalid phone number format',
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
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													message: 'invalid email address',
												},
											})}
										/>
										<InputRightElement width="4.5rem">
											<Button
												h="1.75rem"
												size="sm"
												onClick={handleShowPassword}>
												{showPassword ? 'Hide' : 'Show'}
											</Button>
										</InputRightElement>
									</InputGroup>

									<FormErrorMessage>
										{errors.password && errors.password.message}
									</FormErrorMessage>
								</FormControl>

								{/* confirm password input  */}
								<FormControl
									isInvalid={errors.confirmPassword}
									w="565px"
									mt={6}>
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
											type={!showPassword ? 'password' : 'text'}
											id="confirmPassword"
											placeholder="********"
											{...register('confirmPassword', {
												required: 'This is required',
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													message: 'invalid email address',
												},
											})}
										/>
										<InputRightElement width="4.5rem">
											<Button
												h="1.75rem"
												size="sm"
												onClick={handleShowPassword}>
												{showPassword ? 'Hide' : 'Show'}
											</Button>
										</InputRightElement>
									</InputGroup>

									<FormErrorMessage>
										{errors.confirmPassword && errors.confirmPassword.message}
									</FormErrorMessage>
								</FormControl>
								<Button
									mt={4}
									colorScheme="teal"
									isLoading={isSubmitting}
									type="submit">
									Sign up
								</Button>
							</form>
						</TabPanel>

						{/* --------------------------------------------------------------------- Propert manager tab ------------------------------------------------------------------------------------------ */}
						<TabPanel>
							<form onSubmit={handleSubmit(onSubmit)}>
								<Box d="flex">
									<FormControl
										isInvalid={errors.managerFirstName}
										w="250px"
										mr={16}>
										<FormLabel htmlFor="managerFirstName">
											<Box d="flex">
												First name
												<Text color="red" ml={2}>
													*
												</Text>
											</Box>
										</FormLabel>
										<Input
											id="managerFirstName"
											placeholder="first name"
											{...register('managerFirstName', {
												required: 'This is required',
												minLength: {
													value: 4,
													message: 'Minimum length should be 4',
												},
											})}
										/>
										<FormErrorMessage>
											{errors.managerFirstName &&
												errors.managerFirstName.message}
										</FormErrorMessage>
									</FormControl>

									<FormControl isInvalid={errors.managerLastName} w="250px">
										<FormLabel htmlFor="managerLastName">
											<Box d="flex">
												Last name
												<Text color="red" ml={2}>
													*
												</Text>
											</Box>
										</FormLabel>
										<Input
											id="managerLastName"
											placeholder="last name"
											{...register('managerLastName', {
												required: 'This is required',
												minLength: {
													value: 4,
													message: 'Minimum length should be 4',
												},
											})}
										/>
										<FormErrorMessage>
											{errors.managerLastName && errors.managerLastName.message}
										</FormErrorMessage>
									</FormControl>
								</Box>

								{/* ----------------------------------------------------------------------Company information----------------------------------------------------------------------------------------  */}

								<Box d="flex" mt={6}>
									<FormControl isInvalid={errors.companyName} w="250px" mr={16}>
										<FormLabel htmlFor="companyName">
											<Box d="flex">
												Company name
												<Text color="red" ml={2}>
													*
												</Text>
											</Box>
										</FormLabel>
										<Input
											id="companyName"
											placeholder="company name"
											{...register('companyName', {
												required: 'This is required',
												minLength: {
													value: 4,
													message: 'Minimum length should be 4',
												},
											})}
										/>
										<FormErrorMessage>
											{errors.companyName && errors.companyName.message}
										</FormErrorMessage>
									</FormControl>

									<FormControl isInvalid={errors.companyWebsite} w="250px">
										<FormLabel htmlFor="companyWebsite">
											<Box d="flex">company website</Box>
										</FormLabel>
										<Input
											id="companyWebsite"
											placeholder="company website"
											{...register('companyWebsite', {
												required: 'This is required',
												minLength: {
													value: 4,
													message: 'Minimum length should be 4',
												},
											})}
										/>
										<FormErrorMessage>
											{errors.companyWebsite && errors.companyWebsite.message}
										</FormErrorMessage>
									</FormControl>
								</Box>

								{/* Email address input  */}
								<FormControl isInvalid={errors.companyEmail} w="565px" mt={6}>
									<FormLabel htmlFor="companyEmail">
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
											id="companyEmail"
											placeholder="email address"
											{...register('companyEmail', {
												required: 'This is required',
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													message: 'invalid email address',
												},
											})}
										/>
									</InputGroup>

									<FormErrorMessage>
										{errors.companyEmail && errors.companyEmail.message}
									</FormErrorMessage>
								</FormControl>

								{/* Phone number input  */}
								<Box d="flex">
									<FormControl
										isInvalid={errors.companyPhoneNumber}
										w="250px"
										mt={6}
										mr={16}>
										<FormLabel htmlFor="companyPhoneNumber">
											<Box d="flex">
												Company Number
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
												id="companyPhoneNumber"
												placeholder="123 456 7890"
												{...register('companyPhoneNumber', {
													required: 'This is required',
													pattern: {
														value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
														message: 'invalid phone number format',
													},
												})}
											/>
										</InputGroup>

										<FormErrorMessage>
											{errors.companyPhoneNumber &&
												errors.companyPhoneNumber.message}
										</FormErrorMessage>
									</FormControl>

									<FormControl
										isInvalid={errors.phoneExtention}
										w="250px"
										mt={6}>
										<FormLabel htmlFor="phoneExtention">
											<Box d="flex">Extention #</Box>
										</FormLabel>

										<InputGroup>
											<Input
												type="number"
												id="phoneExtention"
												placeholder="7890"
												{...register('phoneExtention', {
													pattern: {
														value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
														message: 'invalid phone number format',
													},
												})}
											/>
										</InputGroup>

										<FormErrorMessage>
											{errors.phoneExtention && errors.phoneExtention.message}
										</FormErrorMessage>
									</FormControl>
								</Box>

								{/* password input  */}
								<FormControl
									isInvalid={errors.managerPassword}
									w="565px"
									mt={6}>
									<FormLabel htmlFor="managerPassword">
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
											id="managerPassword"
											placeholder="********"
											{...register('managerPassword', {
												required: 'This is required',
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													message: 'invalid email address',
												},
											})}
										/>
										<InputRightElement width="4.5rem">
											<Button
												h="1.75rem"
												size="sm"
												onClick={handleShowPassword}>
												{showPassword ? 'Hide' : 'Show'}
											</Button>
										</InputRightElement>
									</InputGroup>

									<FormErrorMessage>
										{errors.managerPassword && errors.managerPassword.message}
									</FormErrorMessage>
								</FormControl>

								{/* confirm password input  */}
								<FormControl
									isInvalid={errors.confirmManagerPassword}
									w="565px"
									mt={6}>
									<FormLabel htmlFor="confirmManagerPassword">
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
											type={!showPassword ? 'password' : 'text'}
											id="confirmManagerPassword"
											placeholder="********"
											{...register('confirmManagerPassword', {
												required: 'This is required',
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													message: 'confirm password does not match',
												},
											})}
										/>
										<InputRightElement width="4.5rem">
											<Button
												h="1.75rem"
												size="sm"
												onClick={handleShowPassword}>
												{showPassword ? 'Hide' : 'Show'}
											</Button>
										</InputRightElement>
									</InputGroup>

									<FormErrorMessage>
										{errors.confirmManagerPassword &&
											errors.confirmManagerPassword.message}
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
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</>
	);
}
