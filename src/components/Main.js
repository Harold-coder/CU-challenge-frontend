import React from "react"

export default function Main() {
    return (
        <>
        <div className="main-header">
                <h1 className="h1-title">General Leaderboard</h1>
        </div>
        <main>
        <div className="main-leaderboard">
            <table>
                <tr>
                    <td className="number">1</td>
                    <td><img className="picture" src={require("../images/harold.png")} alt="harold"></img></td>
                    <td className="name">Harold</td>
                    <td className="points">25 <img className="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal"/></td>
                </tr>
                <tr>
                    <td className="number">2</td>
                    <td><img className="picture" src={require("../images/harold.png")} alt="harold"></img></td>
                    <td className="name">Jacob</td>
                    <td className="points">21</td>
                </tr>
                <tr>
                    <td className="number">3</td>
                    <td><img className="picture" src={require("../images/harold.png")} alt="harold"></img></td>
                    <td className="name">Tommy</td>
                    <td className="points">20</td>
                </tr>
                <tr>
                    <td className="number">4</td>
                    <td><img className="picture" src={require("../images/harold.png")} alt="harold"></img></td>
                    <td className="name">Frankie</td>
                    <td className="points">19</td>
                </tr>
                <tr>
                    <td className="number">5</td>
                    <td><img className="picture" src={require("../images/harold.png")} alt="harold"></img></td>
                    <td className="name">Zach</td>
                    <td className="points">17</td>
                </tr>
                <tr>
                    <td className="number">6</td>
                    <td><img className="picture" src={require("../images/harold.png")} alt="harold"></img></td>
                    <td className="name">Goadie</td>
                    <td className="points">15</td>
                </tr>
                <tr>
                    <td className="number">7</td>
                    <td><img className="picture" src={require("../images/harold.png")} alt="harold"></img></td>
                    <td className="name">Paarth</td>
                    <td className="points">13</td>
                </tr>
                <tr>
                    <td className="number">8</td>
                    <td><img className="picture" src={require("../images/harold.png")} alt="harold"></img></td>
                    <td className="name">Shaurya</td>
                    <td className="points">11</td>
                </tr>
                <tr>
                    <td className="number">8</td>
                    <td><img className="picture" src={require("../images/harold.png")} alt="harold"></img></td>
                    <td className="name">Shaurya</td>
                    <td className="points">11</td>
                </tr>
            </table>
        </div>
        </main>
        </>
    )
}