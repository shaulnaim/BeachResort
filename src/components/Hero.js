import React from 'react';

export default ({ children, hero="defaultHero" }) => {
	return <header className={hero}> {children} </header>;
}
