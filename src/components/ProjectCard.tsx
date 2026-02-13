import type { Project } from '../data/portfolio';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <article
            className="section"
            style={{
                borderRadius: '16px',
                background: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                marginBottom: '4rem',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.08)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
            }}
        >
            {project.image && (
                <div style={{
                    width: '100%',
                    height: 'auto',
                    borderBottom: '1px solid var(--color-border)',
                    overflow: 'hidden',
                    backgroundColor: '#fafafa'
                }}>
                    <img
                        src={project.image}
                        alt={`${project.name} preview`}
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            )}

            <div style={{ padding: '2rem' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    marginBottom: '1rem',
                }}>
                    <h3 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 700 }}>
                        {project.url ? (
                            <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                                {project.name}
                                <span style={{ fontSize: '1rem', marginLeft: '0.5rem', opacity: 0.5 }}>↗</span>
                            </a>
                        ) : (
                            project.name
                        )}
                    </h3>
                    <span style={{ fontSize: '0.9rem', color: '#222', fontWeight: 500 }}>
                        {project.launchYear || project.tenure}
                    </span>
                </div>

                <div style={{ marginBottom: '1.5rem', fontSize: '0.95rem', color: 'var(--color-accent)', fontWeight: 500 }}>
                    {project.type} {project.role && ` • ${project.role}`}
                </div>

                <p style={{ marginBottom: '1.5rem', lineHeight: '1.7', color: '#222' }}>
                    {project.description || project.coreImpact}
                </p>

                {project.keyFeatures && (
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#222' }}>Key Features</h4>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', color: '#222', lineHeight: '1.6' }}>
                            {project.keyFeatures.map((feature, i) => (
                                <li key={i} style={{ marginBottom: '0.25rem' }}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.technicalDetails && (
                    <div style={{
                        marginBottom: '1.5rem',
                        padding: '1rem', borderRadius: '8px'
                    }}>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#222' }}>Technical Details</h4>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', color: '#222', lineHeight: '1.6' }}>
                            {project.technicalDetails.map((detail, i) => (
                                <li key={i} style={{ marginBottom: '0.25rem' }}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </article>
    );
};
