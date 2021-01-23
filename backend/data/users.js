import bcrypt from "bcryptjs";

const users = [
	{
		name: "ace-commits",
		email: "ace-commits@ace-commits.com",
		password: bcrypt.hashSync("ace-commits12345"),
		isAdmin: true,
	},
	{
		name: "basilsh",
		email: "basilsh@basilsh.com",
		password: bcrypt.hashSync("lyl1444#"),
	},
	{
		name: "alaabuein",
		email: "alaabuein@abuein.com",
		password: bcrypt.hashSync("2222"),
	},
];

export default users;
