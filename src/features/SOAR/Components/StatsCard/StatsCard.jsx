import "./StatsCard.css";

export default function StatsCard({
    title,
    value,
    change,
    type
}) {

    return (

        <div className="col-md-3">
                <div className="stats-card">

        <div className="stats-card-title">
            {title}
        </div>

        <div
            className={`stats-card-value ${type}`}
        >
            {value}
        </div>

        <div
            className={`stats-card-change ${type}`}
        >
            {change}
        </div>

        </div>
        </div>

    );
}