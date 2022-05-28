import React, { useEffect, useState } from 'react';
import '../style/Nav.css';
import netflix from '../Netflix_2015_logo.svg.png';

const Nav = () => {
	const [show, handleShow] = useState();
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<div className={`nav ${show && 'nav_black'}`}>
			<img className='nav_logo' src={netflix} alt='ssss' />
			<img className='nav_avtar' src={netflix} alt='netflix logo Avtar' />
		</div>
	);
};

export default Nav;
