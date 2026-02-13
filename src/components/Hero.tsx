import { portfolioData } from '../data/portfolio';

export const Hero = () => {
    // @ts-ignore
    const { summary, coreStack, image } = portfolioData.personal;

    return (
        <section className="section">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap-reverse' }}>
                {image && (
                    <div style={{ marginBottom: '2rem' }}>
                        <img
                            src={image}
                            alt="Profile"
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '4px solid var(--color-bg)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                )}
                <div style={{ flex: 1, minWidth: '300px' }}>

                    <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.5,
                        marginBottom: '3rem',
                        maxWidth: '650px'
                    }}>
                        {summary}
                    </p>
                </div>


            </div>

            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                <div>
                    <h3 style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Languages & Frameworks</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {coreStack.languages.map((item: string, i: number) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Design & Tools</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {coreStack.designTools.map((item: string, i: number) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
                    </ul>
                </div>
                {/* <div>
                    <h3 style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Expertise</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {coreStack.expertise.map((item: string, i: number) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
                    </ul>
                </div> */}
            </div>
        </section>
    );
};
