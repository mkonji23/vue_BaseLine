<template>
	<div>
		<v-card>
			<v-card-title>
				사용자리스트
				<v-spacer></v-spacer>
				<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="Search"
					single-line
					hide-details
				></v-text-field>
			</v-card-title>
			<v-data-table
				:headers="headers"
				:items="items"
				:search="search"
			></v-data-table>
		</v-card>
		<div class="text-left pt-2">
			<v-btn @click="callApi()" small>전송</v-btn>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			search: '',
			headers: [
				{
					text: 'userId',
					align: 'start',
					sortable: false,
					value: 'userid',
				},
				{ text: 'password', value: 'password' },
				{ text: 'name', value: 'name' },
				{ text: 'address', value: 'address' },
			],
			items: [],
		};
	},
	created() {
		this.callApi();
	},
	methods: {
		callApi() {
			this.$http
				.get('/api/regist/select')
				.then(res => {
					this.items = res.data;
					console.log(res.data);
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
};
</script>

<style></style>
