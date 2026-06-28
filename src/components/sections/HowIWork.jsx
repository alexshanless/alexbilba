const HowIWork = () => {
  const points = [
    {
      heading: 'I own the outcome, not just the code.',
      body: "You don't need someone to write code. You need someone accountable for whether the thing works under real load. That's the job I take — and the truth-telling that comes with it.",
    },
    {
      heading: 'I make the calls that save you later.',
      body: 'Which stack fits your stage. What\'s cheap now and what\'s cheap at 100k users. Where the cost and security traps hide before they find you. Cheap to get right early, brutal to fix late.',
    },
    {
      heading: "I've stood on every side of it.",
      body: 'Seven years across design, product, and engineering — as the designer, leading the developers, and making the architecture decisions myself. Most technical people see one layer. I hold the user, the system, and the delivery in one head.',
    },
  ];

  return (
    <div className='how-i-work'>
      {points.map((point, index) => (
        <div key={index} className='how-i-work-card section-card'>
          <h3>{point.heading}</h3>
          <p>{point.body}</p>
        </div>
      ))}
    </div>
  );
};

export default HowIWork;
