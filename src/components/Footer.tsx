export const Footer = () => {
    return (
        <footer style={{
            marginTop: '6rem',
            borderTop: '1px solid var(--color-border)',
            paddingTop: '3rem',
            paddingBottom: '3rem',
            textAlign: 'center',
            color: 'var(--color-text-secondary)',
            fontSize: '0.9rem'
        }}>
            <p>&copy; {new Date().getFullYear()} Adebola Oyenuga. All rights reserved.</p>
        </footer>
    );
};
