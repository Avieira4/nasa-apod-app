import YoutubeEmbed from "./YoutubeEmbed";

export default function Main({data}: any) {
    return (
        <main className="imgContainer">
            {data?.hdurl && <img src={data.url} alt={data.title || 'bg-img'} className="bgImage"/>}
            {!data?.hdurl && data?.url && <YoutubeEmbed embedUrl={data.url}/> }
        </main>
    )
}