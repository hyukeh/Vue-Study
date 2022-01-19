<template>
	<div>
		<lable
			><input type="checkbox" v-model="text" @click="getData" />
			{{ text }}
		</lable>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: true,
		};
	},
	methods: {
		getData() {
			alert(this.text);
		},
	},
};
</script>

<style></style>
