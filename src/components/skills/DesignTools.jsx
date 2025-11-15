import { FigmaIcon } from '../icons/TechIcons';
import { FaWebflow } from 'react-icons/fa6';
import { SiAdobe } from 'react-icons/si';

const DesignTools = () => {
	return (
		<div className='section-card'>
			<h3>Design Tools</h3>
			<div className='tools-icons'>
				<div className='tool-icon figma' title='Figma'>
					<FigmaIcon />
				</div>
				<div className='tool-icon webflow' title='Webflow'>
					<FaWebflow />
				</div>

				<div className='tool-icon adobe' title='Adobe'>
					<SiAdobe />
				</div>
			</div>
		</div>
	);
};

export default DesignTools;
