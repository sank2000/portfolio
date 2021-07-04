import Head from 'next/head';

export default function CustomHead() {
	return (
		<Head>
			<title>Santhosh | personal portfolio</title>
			<link rel='apple-touch-icon' sizes='180x180' href='/ico/apple-touch-icon.png' />
			<link rel='icon' type='image/png' sizes='32x32' href='/ico/favicon-32x32.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/ico/favicon-16x16.png' />
			<link rel='manifest' href='/ico/site.webmanifest' />
			<link rel='mask-icon' href='/ico/safari-pinned-tab.svg' color='#5bbad5' />
			<link rel='shortcut icon' href='/ico/favicon.ico' />

			<meta name='msapplication-TileColor' content='#da532c' />
			<meta name='msapplication-config' content='/ico/browserconfig.xml' />
			<meta name='theme-color' content='#252a34' />

			<meta name='title' content='Santhosh | personal portfolio' />
			<meta
				name='description'
				content='Santhosh is an aspiring UI/ UX designer & Full stack web developer, interested in designing  and building beautiful and functional websites and web applications.'
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
