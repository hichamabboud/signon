import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import NavBar from '../../components/NavBar';

export default function SignUp() {
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
			<Box>Landlord Sign Up </Box>
		</>
	);
}
