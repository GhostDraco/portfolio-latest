import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Back-end & API Developer | Full-Stack Developer',
				place: 'Freelance / Anime & Automation Projects',
				timePeriod: '2021 - Present',
				description: (
					<ul>
						<li>
							Worked as a <strong>Back-end & API Developer</strong> on multiple
							<strong> Hindi Anime websites</strong>, managing servers,
							databases, and API systems.
						</li>
						<li>
							Developed scalable <strong>REST APIs</strong> using
							<strong> Node.js</strong>, <strong>Python</strong>, and
							<strong> PHP</strong>.
						</li>
						<li>
							Built complete frontend interfaces using
							<strong> HTML</strong>, <strong>CSS</strong>, and
							<strong> JavaScript</strong>.
						</li>
						<li>
							Created and maintained multiple
							<strong> Telegram Bots</strong> for automation, anime content,
							and system workflows.
						</li>
						<li>
							Comfortable working across multiple languages and technologies
							to deliver full end-to-end solutions.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Technical Skills',
		items: [
			{
				title: 'Languages & Technologies',
				place: 'Project-Based Experience',
				timePeriod: 'Ongoing',
				description: (
					<ul>
						<li>
							<strong>Backend:</strong> Node.js, Python, PHP, REST API
							Development
						</li>
						<li>
							<strong>Frontend:</strong> HTML, CSS, JavaScript
						</li>
						<li>
							<strong>Databases & Tools:</strong> API Integration, Automation,
							Telegram Bots
						</li>
						<li>
							Quick learner with experience across multiple programming
							languages.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Higher Secondary (12th Grade)',
				place: 'West Bengal, India',
				timePeriod: 'Currently Studying',
				description: (
					<ul>
						<li>
							18-year-old developer currently pursuing
							<strong> 12th standard</strong>.
						</li>
						<li>
							Balancing academics with real-world development and freelance
							projects.
						</li>
					</ul>
				),
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section className='about-me container' id='about-me'>
			<div>
				<SectionTitle title='About' subTitle='ME' />
			</div>

			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						 Hi, I'm <strong>Flexyy Joren</strong>.
					</p>

					<p>
						I’m an <strong>18-year-old Full-Stack Developer</strong> from
						<strong> West Bengal, India</strong>, currently studying in
						<strong> 12th grade</strong>.
					</p>

					<p>
						My core strength lies in <strong>backend and API development</strong>,
						where I build secure, fast, and scalable systems using
						<strong> Node.js</strong>, <strong>Python</strong>, and
						<strong> PHP</strong>.
					</p>

					<p>
						On the frontend side, I create clean and responsive interfaces using
						<strong> HTML</strong>, <strong>CSS</strong>, and
						<strong> JavaScript</strong>.
					</p>

					<p>
						I have worked on several <strong>Hindi Anime websites</strong> and
						built many <strong>Telegram Bots</strong> for automation, content
						delivery, and custom features.
					</p>

					<p>
						I enjoy learning new technologies, experimenting with ideas, and
						building complete end-to-end projects from scratch.
					</p>
				</div>

				<div>
					{timeline.map(({ items, title }, idx) => (
						<div className='timeline' key={idx}>
							<h1>{title}</h1>

							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div className='timeline-list' key={idx}>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>
											{description}
										</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};