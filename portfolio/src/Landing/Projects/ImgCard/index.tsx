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
    <div className='container-wrapper'>
      <div className='container'>
        <img src={img} alt='Avatar' className='image' />
        <div className='middle'>
          <div className='text'>{desc}</div>
        </div>
      </div>

      <div className='cta'>
        <a href={demo} target='_blank'>
          Demo
        </a>
        <a href={githubFE} target='_blank'>
          {githubTitle}
        </a>
        {githubBE ? (
          <a href={githubFE} target='_blank'>
            Source Code BE
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ImageCard;
