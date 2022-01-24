<template>
	<div>
		<table>
			<thead>
				<tr>
					<td>제품명</td>
					<td>가격</td>
					<td>카테고리</td>
					<td>배송료</td>
				</tr>
			</thead>
			<tbody>
				<tr :key="i" v-for="(product, i) in productList">
					<td>{{ product.product_name }}</td>
					<td>{{ product.price }}</td>
					<td>{{ product.category }}</td>
					<td>{{ product.delivery_price }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			productList: [],
		};
	},
	created() {
		this.getList();
	},
	methods: {
		async getList() {
			this.productList = await this.$api(
				'https://143c8a8b-6876-4de3-b683-b4d1cb1efbce.mock.pstmn.io/list',
				'get',
			);
			console.log(this.peopleList);
		},
	},
};
</script>

<style>
table {
	font-family: arial, sans-serif;
	border-collapse: collapse;
	width: 100%;
}
td,
th {
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
}
</style>
