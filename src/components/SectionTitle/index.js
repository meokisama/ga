import './SectionTitle.scss'

function SectionTitle({ title, description, titleType }) {
    return (
        <div>
            <div className={titleType}>
                <h1><span>{title}</span></h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default SectionTitle;