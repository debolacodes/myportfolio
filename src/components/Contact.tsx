import { portfolioData } from '../data/portfolio';

export const Contact = () => {
    const { contact } = portfolioData.personal;

    return (
        <section id="contact" className="section" style={{ marginTop: '8rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Let's Connect</h2>
            <p style={{ marginBottom: '2rem', maxWidth: '600px' }}>
                Adebola Oyenuga combines high-level academic training with a proven track record of delivering
                complex, consumer-facing software in the fintech, agritech, and healthtech sectors.
            </p>

            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.25rem' }}>Email</span>
                    <a href={`mailto:${contact.email}`} style={{ fontSize: '1.1rem' }}>{contact.email}</a>
                </div>
                <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.25rem' }}>Phone</span>
                    <a href={`tel:${contact.phone.replace(/[\s()]/g, '')}`} style={{ fontSize: '1.1rem' }}>{contact.phone}</a>
                </div>
                <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.25rem' }}>Full Portfolio</span>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
