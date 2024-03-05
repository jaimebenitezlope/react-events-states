import { useState } from 'react';
import { USERS } from '../../constants/users';

const Users = () => {
	const [userCounter, setUserCounter] = useState(0);
	const currentUser = USERS[userCounter];
	const isFirstUser = userCounter === 0;
	const isLastUser = userCounter === USERS.length - 1;

	return (
		<>
			<h1>Slide Users</h1>
			<img src={currentUser.profileImage} alt='' />
			<h2>{currentUser.name}</h2>
			<p>{currentUser.username}</p>
			<p>{currentUser.email}</p>
			<button
				disabled={isFirstUser}
				onClick={() => setUserCounter(userCounter - 1)}
			>
				Previus
			</button>
			<button
				disabled={isLastUser}
				onClick={() => setUserCounter(userCounter + 1)}
			>
				Next
			</button>
		</>
	);
};

export default Users;
