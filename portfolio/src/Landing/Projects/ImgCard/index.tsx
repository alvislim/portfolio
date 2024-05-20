import "./index.css";

type Props = {
  img: string;
  desc: string;
  demo: string;
  githubFE: string;
  githubBE?: string;
};

const ImageCard = (props: Props) => {
  const { img, desc, demo, githubFE, githubBE } = props;
  const githubTitle = githubBE ? "Sourc Code FE" : "Source Code";
  return (
    <div className='container'>
      <img src={img} alt='Avatar' className='image' />
      <div className='middle'>
        <div className='text'>{desc}</div>
        <a href={demo} target='_blank'>
          Demo
        </a>
        <a href={githubFE} target='_blank'>
          {githubTitle}
        </a>
        {githubBE ? <a href={githubFE}>Source Code BE</a> : null}
      </div>
    </div>
  );
};

export default ImageCard;
