import "./index.css";

type Props = {
  img: string;
  desc: string;
  demo: string;
  githubFE: string;
  githubBE?: string;
  isMobile: boolean;
};

const ImageCard = (props: Props) => {
  const { img, desc, demo, githubFE, githubBE, isMobile } = props;
  const githubTitle = githubBE ? "Sourc Code FE" : "Source Code";

  return (
    <>
      <div className='container'>
        <img src={img} alt='Avatar' className='image' />
        <div className='middle'>
          <div className='text'>{desc}</div>
          {!isMobile ? (
            <>
              <a href={demo} target='_blank'>
                Demo
              </a>
              <a href={githubFE} target='_blank'>
                {githubTitle}
              </a>
              {githubBE ? <a href={githubFE}>Source Code BE</a> : null}
            </>
          ) : null}
        </div>
      </div>

      {isMobile ? (
        <div className='mobile-cta'>
          <a href={demo} target='_blank'>
            Demo
          </a>
          <a href={githubFE} target='_blank'>
            {githubTitle}
          </a>
          {githubBE ? <a href={githubFE}>Source Code BE</a> : null}
        </div>
      ) : null}
    </>
  );
};

export default ImageCard;
