import "./Poem.scss"
import makein from "../../assets/makein.png"

function Poem() {
    return (
        <div className="poem wrapper">
            <blockquote>
                <p>
                    Roses are red,<br />
                    Violets are blue,<br />
                    I love you but you said,<br />
                    Unless you win this issue!
                </p>
                <cite>━ The Issue ━</cite>
            </blockquote>
            <p id="arrow">↡</p>
            <img alt="makein chibi" src={makein} />
        </div>
    );
}

export default Poem;