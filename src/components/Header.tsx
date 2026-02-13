import { portfolioData } from '../data/portfolio';

export const Header = () => {
    const { name } = portfolioData.personal;

    return (
        <header style={{
            padding: '2rem 0',
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline'
        }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{name}</h1>
            <nav>
                <a href="#projects" style={{ marginRight: '1.5rem', fontSize: '0.9rem' }}>Work</a>
                <a href="#contact" style={{ fontSize: '0.9rem' }}>Contact</a>
            </nav>
        </header>
    );
};
