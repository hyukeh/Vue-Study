<template>
	<h1>full Name : {{ fullName }}</h1>
	<button type="button" @click="changeName">변경</button>
</template>

<script>
export default {
	data() {
		return {
			firstName: 'Seungwon',
			lastName: 'Go',
			fullName: '',
		};
	},
	watch: {
		firstName() {
			this.fullName = this.firstName + '' + this.lastName;
		},
		lastName() {
			this.fullName = this.firstName + '' + this.lastName;
		},
	},
	methods: {
		changeName() {
			this.fullName = 'Eunsol';
		},
	},
};
</script>

<style></style>
