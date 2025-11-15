import { useState, useEffect } from 'react';

const BioCard = () => {
	const titles = ['Developer', 'UI/UX Designer', 'PM'];
	const [shuffledTitles, setShuffledTitles] = useState(titles);

	useEffect(() => {
		const shuffled = [...titles].sort(() => Math.random() - 0.5);
		setShuffledTitles(shuffled);
	}, []);

	return (
		<div className='bio-card'>
			<h1>Alex Bilba</h1>
			<p className='title'>{shuffledTitles.join(' × ')}</p>
			<p className='bio-text'>
				Started coding websites. Then clients needed designs, project
				management, and automations. So I learned it all. <br />
				7+ years later, I'm a Seattle-based freelancer who builds complete
				digital solutions in Webflow and React, automates workflows, and somehow
				keeps everything running. Crazy? Maybe. But it gets the job done.
			</p>
		</div>
	);
};

export default BioCard;
