<script>
	import headslam from '../assets/headslam.gif';
</script>

<style>
	h1, figure {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Chem is Hard</title>
</svelte:head>

<h1>Chem is very hard</h1>

<figure>
	<img alt="headslam" src="{headslam}">
	<figcaption>Hopefully this site helps you do good on your next chemistry thing</figcaption>
</figure>

