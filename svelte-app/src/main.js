import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		text: 'This text is actually a string passed down via component props!'
	}
});

export default app;