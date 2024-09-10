export default function FinishScreen({ points, maxPoints, highscore }) {
    const pointPersentage = Math.ceil((points / maxPoints) * 100);

    let emoji;
    if (pointPersentage === 100) emoji = "🎖️";
    if (pointPersentage >= 80 && pointPersentage < 95) emoji = "🥇";
    if (pointPersentage >= 50 && pointPersentage < 80) emoji = "🥈";
    if (pointPersentage >= 25 && pointPersentage < 50) emoji = "🥉";
    if (pointPersentage < 25) emoji = "🥲";

    return (
        <>
            <p className="result">
                <span>{emoji}</span>
                You scored <strong>{points}</strong> out of {maxPoints} ({pointPersentage}%)
            </p>
            <p className="highscore">
                High Score: {highscore} points
            </p>
        </>
    )
}