import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Button, Text, Link } from '@chakra-ui/react';

function NavBar() {
	return (
		<>
			<Head>
				<title> Gypsy Choice | Travel Nurse Housing </title>
				<meta name="author" content="Affordable Short term rentls" />
				<meta
					name="description"
					content="Gypsy Choice is dedicated to connecting you with tens of thousands traveling healthcare professionals."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<Box
					d="flex"
					mt={3}
					mb={5}
					mx={2}
					justifyContent="space-between"
					alignItems="center">
					<Box ml={8}>
						<NextLink href="/" passHref>
							<Link> GypsyChoice </Link>
						</NextLink>
					</Box>
					<Box d="flex" mr={8}>
						<Button pr={3} variant="link" colorScheme="gray.600" fontSize="sm">
							<NextLink href="/signup" passHref>
								<Link>
									<Text> List Property </Text>
								</Link>
							</NextLink>
						</Button>
						<Box pr={3}>
							<Text fontWeight="extrabold"> | </Text>
						</Box>
						<Button variant="link" colorScheme="gray.600" fontSize="sm">
							<NextLink href="/traveler/signin" passHref>
								<Link>
									<Text> Sign In </Text>
								</Link>
							</NextLink>
						</Button>
					</Box>
				</Box>
			</header>

			<Box>
				<hr />
			</Box>
		</>
	);
}

export default NavBar;
