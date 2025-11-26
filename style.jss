// style.jss — экспорт объекта со стилями (пример для использования в React/Vue/Vanilla с runtime)
// Примечание: в статическом HTML этот файл не применится автоматически, используйте style.css.
export const styles = {
  ':root': {
    '--bg': '#f8fafc',
    '--card': '#ffffff',
    '--accent': '#06b6d4',
    '--muted': '#64748b',
    '--radius': '12px',
  },
  'body': {
    margin: 0,
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    background: 'var(--bg)',
    color: '#0f172a',
  },
  '.container': {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '20px',
  },
  '.site-header': {
    background: '#fff',
    borderBottom: '1px solid rgba(15,23,42,0.04)'
  },
  '.header-inner': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px'
  },
  '.brand': {
    fontWeight: 700,
    fontSize: '20px'
  },
  '.nav a': {
    margin: '0 10px',
    color: '#0f172a',
    textDecoration: 'none'
  },
  '.btn': {
    padding: '10px 14px',
    borderRadius: '10px',
    border: '1px solid rgba(15,23,42,0.06)',
    cursor: 'pointer',
    fontWeight: 600
  },
  '.btn.primary': {
    background: 'linear-gradient(90deg,var(--accent),#2dd4bf)',
    color: '#fff',
    border: 'none'
  },
  '.main-grid': {
    display: 'grid',
    gridTemplateColumns: '1fr 320px',
    gap: '24px',
    alignItems: 'start',
    paddingTop: '20px'
  },
  '.signup-card': {
    background: 'var(--card)',
    padding: '18px',
    borderRadius: 'var(--radius)',
    boxShadow: '0 8px 18px rgba(2,6,23,0.06)'
  },
  '.features': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: '16px',
    margin: '28px 0'
  }
};
