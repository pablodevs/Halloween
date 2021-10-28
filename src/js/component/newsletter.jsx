import React, { useEffect, useState } from "react";
import { Users } from "./users.jsx";

export const Newsletter = () => {
	const [users, setUsers] = useState([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const uri = `https://gorest.co.in/public/v1/users/2349`;

	useEffect(() => {
		fetch(uri, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "aplication/json",
				Authorization: `Bearer 92def7b3dcf709e48bd3db1711675006927f9b1c037b8fb54af935b572282563`
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(resp => {
				console.log(resp.data);
				setUsers([...users, resp.data]);
			})

			.catch(error => {
				console.error(error);
			});
	}, []);

	const send = async (e, name, email) => {
		e.preventDefault();
		//setUsers([...users, { name: name, email: email }]);

		const resp = await fetch(uri, {
			method: "PATCH",
			body: JSON.stringify({
				name: name,
				gender: "male",
				email: email,
				status: "active"
			}),
			headers: {
				"Content-Type": "application/json",
				Accept: "aplication/json",
				Authorization: `Bearer 92def7b3dcf709e48bd3db1711675006927f9b1c037b8fb54af935b572282563`
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(resp => {
				console.log(resp.data);
				setUsers([...users, resp.data]);
			})

			.catch(error => {
				console.error(error);
			});
	};

	return (
		<div
			className="container-fluid section"
			style={{ backgroundColor: "black" }}>
			<div className="row">
				<div className="col-4 mx-auto ">
					<form className="p-3 rounded">
						<div className="form-group text-danger">
							<label htmlFor="exampleInputPassword1">
								Enter a Monster Name
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
								It has to be a spooky one!
							</small>
						</div>
						<div className="form-group text-danger">
							<label htmlFor="exampleInputEmail1">
								Introduce a scary Email address
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
						<div className="row">
							<button
								type="submit"
								className="col-auto py-2 px-3  btn btn-dark mt-2 mx-auto"
								onClick={e => {
									send(e, name, email);
								}}>
								Add to death list...
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className="row">
				<Users arr={users} />
			</div>
		</div>
	);
};
