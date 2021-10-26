import React, { useEffect, useState } from "react";
import { Users } from "./users.jsx";

export const Newsletter = () => {
	const [users, setUsers] = useState([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	//this create the user at the api
	useEffect(() => {
		console.log("solo al inicio");

		fetch("https://gorest.co.in/public/v1/users", {
			method: "GET"
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				//console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(result => {
				console.log(result);
				setUsers(result.data);
				console.log(users);
			})

			.catch(error => {
				console.error(error);
			});
	}, []);

	const send = (name, email) => {
		fetch(`https://gorest.co.in/public/v1/users`, {
			method: "POST",
			Authorization: 'Bearer ACCESS-TOKEN" -XPOST',
			body: JSON.stringify({
				name: name,
				email: email,
				gender: "male",
				status: "active"
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				//console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(result => {
				console.log(result);
				setUsers(result.data);
				console.log(users);
			})

			.catch(error => {
				console.error(error);
			});
	};

	return (
		<div className="container">
			<div className="row">
				<form>
					<div className="form-group text-danger">
						<label htmlFor="exampleInputPassword1">
							Monster Name
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputPassword1"
							onKeyUp={e => {
								setName(e.target.value);
							}}
						/>
						<small
							id="emailHelp"
							className="form-text text-muted text-danger">
							It has to be spoky one!
						</small>
					</div>
					<div className="form-group text-danger">
						<label htmlFor="exampleInputEmail1">
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							onKeyUp={e => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-dark mt-2 border-success border"
						onClick={() => {
							send(name, email);
						}}>
						Go in..
					</button>
				</form>
			</div>
			<div className="row">
				<Users arr={users} />
			</div>
		</div>
	);
};
