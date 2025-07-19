export default function AboutCard({ title, text }) {
  return (
    <div className="about-subsection">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
} 