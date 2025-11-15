import { useState, useEffect } from 'react';

const JokePopup = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [showBubble, setShowBubble] = useState(false);
	const [showButton, setShowButton] = useState(false);
	const [showEmoji, setShowEmoji] = useState(false);
	const [hasClosed, setHasClosed] = useState(false);
	const initialText = "Since you've scrolled all the way to the bottom of the page, do you want to read a joke?";
	const [bubbleText, setBubbleText] = useState(initialText);
	const [loading, setLoading] = useState(false);
	const [hasClickedOnce, setHasClickedOnce] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollHeight = document.documentElement.scrollHeight;
			const scrollTop = document.documentElement.scrollTop;
			const clientHeight = document.documentElement.clientHeight;

			if (scrollHeight - scrollTop - clientHeight < 100 && !isVisible && !hasClosed) {
				setIsVisible(true);
				setTimeout(() => setShowEmoji(true), 0);
				setTimeout(() => setShowBubble(true), 500);
				setTimeout(() => setShowButton(true), 1000);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isVisible]);

	const fetchJoke = async () => {
		if (loading) return;

		setHasClickedOnce(true);
		setLoading(true);
		setBubbleText('Thinking...');

		try {
			const response = await fetch('https://icanhazdadjoke.com/', {
				headers: {
					Accept: 'application/json',
				},
			});
			const data = await response.json();
			setBubbleText(data.joke);
		} catch (error) {
			setBubbleText('Oops! The joke machine broke. Try again?');
		} finally {
			setLoading(false);
		}
	};

	const handleClose = () => {
		setHasClosed(true);
		setIsVisible(false);
		setShowBubble(false);
		setShowButton(false);
		setShowEmoji(false);
		setTimeout(() => {
			setBubbleText(initialText);
			setHasClickedOnce(false);
		}, 300);
	};

	if (!isVisible) return null;

	return (
		<div className='joke-popup-container'>
			<button className='joke-close' onClick={handleClose}>
				×
			</button>

			{showBubble && (
				<div className={`joke-speech-bubble ${showBubble ? 'fade-in' : ''}`}>
					<p>{bubbleText}</p>
				</div>
			)}

			<div className='joke-bottom-section'>
				{showButton && (
					<button className={`joke-button ${showButton ? 'fade-in' : ''}`} onClick={fetchJoke}>
						{hasClickedOnce ? 'Another one!' : 'Tell me a joke!'}
					</button>
				)}

				{showEmoji && (
					<div className={`joke-emoji ${showEmoji ? 'fade-in' : ''}`}>👴</div>
				)}
			</div>
		</div>
	);
};

export default JokePopup;
