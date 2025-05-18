import Head from 'next/head';

export default function CustomHead() {
	return (
		<Head>
			<title>Santhosh | personal portfolio</title>
			<link rel='icon' type='image/png' href='/ico/favicon-96x96.png' sizes='96x96' />
			<link rel='icon' type='image/svg+xml' href='/ico/favicon.svg' />
			<link rel='shortcut icon' href='/ico/favicon.ico' />
			<link rel='apple-touch-icon' sizes='180x180' href='/ico/apple-touch-icon.png' />
			<meta name='apple-mobile-web-app-title' content='Santhosh' />
			<link rel='manifest' href='/ico/site.webmanifest' />

			<meta name='msapplication-TileColor' content='#00bfff' />
			<meta name='msapplication-config' content='/ico/browserconfig.xml' />
			<meta name='theme-color' content='#252a34' />

			<meta name='title' content='Santhosh | personal portfolio' />
			<meta
				name='description'
				content='Santhosh is a full-stack developer who creates scalable, high-performance web applications, focusing on innovation, efficiency, and user experience.'
			/>
			<meta
				name='keywords'
				content='san, sank2000,santhosh, portfolio, personal website, santhosh k'
			/>
			<meta name='robots' content='index, follow' />
			<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
			<meta name='language' content='English' />
			<meta name='author' content='Santhosh K' />
		</Head>
	);
}
