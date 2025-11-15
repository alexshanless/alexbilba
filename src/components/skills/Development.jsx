import { JsIcon } from '../icons/TechIcons';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa6';
import { SiZapier, SiMake } from 'react-icons/si';

const Development = () => {
	return (
		<div className='section-card'>
			<h3>Development & Automations</h3>
			<div className='tools-icons'>
				<div className='tool-icon html' title='HTML5'>
					<FaHtml5 />
				</div>
				<div className='tool-icon css' title='CSS3'>
					<FaCss3Alt />
				</div>
				<div className='tool-icon js' title='JavaScript'>
					<JsIcon />
				</div>
				<div className='tool-icon react' title='React'>
					<FaReact />
				</div>
				<div className='tool-icon zapier' title='Zapier'>
					<SiZapier />
				</div>
				<div className='tool-icon make' title='Make.com'>
					<SiMake />
				</div>
			</div>
		</div>
	);
};

export default Development;
