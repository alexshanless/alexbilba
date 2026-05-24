const Stack = () => {
	return (
		<div className='section-card'>
			<h3>Stack</h3>
			<div className='stack-list'>
				<div className='stack-row'>
					<span className='stack-label'>Frontend</span>
					<span className='stack-value'>React, Tailwind, Webflow</span>
				</div>
				<div className='stack-row'>
					<span className='stack-label'>Backend</span>
					<span className='stack-value'>AWS (Lambda, DynamoDB, Cognito, S3), Node</span>
				</div>
				<div className='stack-row'>
					<span className='stack-label'>Design</span>
					<span className='stack-value'>Figma, Adobe</span>
				</div>
				<div className='stack-row'>
					<span className='stack-label'>Automation</span>
					<span className='stack-value'>Make.com, Zapier, Monday.com</span>
				</div>
			</div>
		</div>
	);
};

export default Stack;
