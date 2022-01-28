import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar />
		</>
	);
}

{
	/* <footer className={styles.footer}>
	<a
		href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
		target="_blank"
		rel="noopener noreferrer">
		Gypsy Choice
		<span className={styles.logo}>
			<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
		</span>
	</a>
</footer>; */
}
