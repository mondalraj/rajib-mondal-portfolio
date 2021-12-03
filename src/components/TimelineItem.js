const TimelineItem = ({ data }) => {
    return (
        <div className="timeline-item relative">
            <div className="timeline-item-content text-md md:text-lg">
                <div className="timeline-date font-semibold tracking-wide pb-3 md:text-md">{data.date}</div>
                <div className="timeline-box">
                    <div className="timeline-name bg-yellow-300 text-black font-semibold tracking-wider">{data.name}</div>
                    {data.company && <div className="timeline-company pb-1 bg-yellow-400 text-black text-md  tracking-wider">Organization: {data.company}</div>}
                    <div className="text-justify timeline-description pb-2">{data.description}</div>
                    {data.link && <a href={data.link.url} target="_blank" rel="noopener noreferrer" className="underline tracking-wider text-md font-semibold">{data.link.text}</a>}
                </div>
            </div>
            <div className="circle"></div>

        </div>
    )
}

export default TimelineItem
