import './SectionTitle.scss'

function SectionTitle({ title, description }) {
    return (
        <div>
            <div className="head-title">
                <h1><span>{title}</span></h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default SectionTitle;