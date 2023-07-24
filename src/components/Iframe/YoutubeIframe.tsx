interface YoutubeIframeProps {
  width: string;
  height: string;
  src: string;
  title?: string;
}

export default function YoutubeIframe({ width, height, src, title }: YoutubeIframeProps) {
  const embedSrc = src.includes('embed')
    ? src
    : `https://www.youtube.com/embed/${src.split('/').at(-1)}`;

  return (
    <iframe
      width={width}
      height={height}
      src={embedSrc}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="shadow-lg"
    />
  );
}
