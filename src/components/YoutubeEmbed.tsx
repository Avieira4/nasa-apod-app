export default function YoutubeEmbed({embedUrl}: any) {
    return (
        <iframe
            src={embedUrl + '&controls=0'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    )   
}