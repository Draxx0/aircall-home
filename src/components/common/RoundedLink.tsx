const RoundedLink = ({
  path,
  url,
  alt = "icone du lien",
}: {
  path: string;
  url: string;
  alt?: string;
}) => {
  return (
    <li className="group w-8 h-8 rounded-full p-2 bg-white/10">
      <a href={url} target="_blank">
        <img
          src={path}
          alt={alt}
          // Should be rewind, on hover change color to main-500 currently img, as svg it should works ?
        />
      </a>
    </li>
  );
};

export default RoundedLink;
