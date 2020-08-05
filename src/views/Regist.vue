<template>
	<div>
		<v-row>
			<v-col cols="12" sm="6">
				<v-text-field
					v-model="userId"
					label="ID"
					single-line
					outlined
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				<v-text-field
					v-model="password"
					label="PW"
					single-line
					outlined
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				<v-text-field
					v-model="email"
					label="Email"
					single-line
					outlined
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				<v-text-field
					v-model="address"
					label="Address"
					single-line
					outlined
				></v-text-field>
			</v-col>
		</v-row>
		<v-btn small>전송</v-btn>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userId: '',
			password: '',
			email: '',
			address: '',
		};
	},
};
</script>

<style></style>
