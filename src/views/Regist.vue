<template>
	<div>
		<v-row>
			<v-col cols="12" sm="6">
				<v-text-field v-model="userId" label="ID" outlined></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				<v-text-field v-model="password" label="PW" outlined></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				<v-text-field v-model="email" label="Email" outlined></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				<v-text-field v-model="address" label="Address" outlined></v-text-field>
			</v-col>
		</v-row>
		<v-btn small>전송</v-btn>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	data() {
		return {
			userId: '',
			password: '',
			email: '',
			address: '',
		};
	},
	computed: {
		...mapState('registStore', ['dataList']),
	},
	methods: {
		...mapActions('registStore', ['getRegistList']),
		callStore() {
			this.getRegistList('?');
			console.log('this.dataList', this.dataList);
		},
		callApi() {
			this.$http
				.get('/api/regist/select')
				.then(res => {
					this.items = res.data;
					console.log(res.data);
					this.callStore();
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
};
</script>

<style></style>
