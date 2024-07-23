import { ReactComponent as nextjs} from '../src/icon/antd.svg'
import { ReactComponent as antd} from '../src/icon/antd.svg'
import { ReactComponent as react} from '../src/icon/react.svg'
import { ReactComponent as typescript} from '../src/icon/typescript.svg'
import { ReactComponent as javascript} from '../src/icon/javascript.svg'
import { ReactComponent as reactRouter} from '../src/icon/react-router.svg'
import { ReactComponent as bootstrap} from '../src/icon/bootstrap.svg'
import { ReactComponent as mui} from '../src/icon/mui.svg'
import { ReactComponent as reduxSaga} from '../src/icon/redux-saga.svg'
import { ReactComponent as github} from '../src/icon/github.svg'
import { ReactComponent as redux} from '../src/icon/redux.svg'
import { ReactComponent as sass} from '../src/icon/sass.svg'
import { ReactComponent as expressjs} from '../src/icon/express.svg'
import { ReactComponent as nodejs} from '../src/icon/nodejs.svg'
import { ReactComponent as csharp} from '../src/icon/csharp.svg'
import { ReactComponent as mssql} from '../src/icon/mssql.svg'
import { ReactComponent as tailwindCss} from '../src/icon/tailwindCss.svg'
import { ReactComponent as jquery} from '../src/icon/jquery.svg'


export const skills: any = {
  nextjs: { imgSrc: nextjs ,skillName:"Nextjs" },
  react: { imgSrc: react ,skillName:"React" },
  typescript: { imgSrc: typescript, skillName: "TypeScript",  },
  javascript: { imgSrc: javascript, skillName: "JavaScript",  },
  reactRouter: { imgSrc:reactRouter,skillName:"react-router", },
  bootstrap: { imgSrc: bootstrap,skillName:"Bootstrap" },
  mui: { imgSrc: mui,skillName:"MUI" },
  reduxSaga: { imgSrc: reduxSaga ,skillName:"Redux-Saga" },
  github: { imgSrc: github,skillName:"Github" },
  redux: { imgSrc: redux,skillName:"Redux" },
  jquery: { imgSrc: jquery,skillName:"jquery" },
  sass: { imgSrc: sass,skillName:"Sass" },
  expressjs: { imgSrc: expressjs,skillName:"express.js" },
  nodejs: { imgSrc: nodejs,skillName:"Node.js" },
  antd: { imgSrc: antd ,skillName:"Ant Design" },
  'c#': { imgSrc: csharp,skillName:"c#" },
  mssql: { imgSrc: mssql,skillName:"mssql" },
  tailwindCss: { imgSrc: tailwindCss,skillName:"tailwindCss" },
}

export const projectsInfo: any = {
  project_0:
      {
        project__img: `imgs/portfolio.png`,
        project__title: 'Portfolio',
        project__para: '지금 보고 계시는 포트폴리오를 제작하였습니다.',
        project__contribution: '100%',
        project__detail: '반응형을 적용하였습니다.',
        project__stack: 'React, Typescript,  React-router, Sass, tailwindcss',
        project__src: 'https://github.com/DevMinwoo-Jung/Portfolio_for_Job',
        project__live: 'https://devminwoo-jung.github.io/Portfolio_for_Job/'
      },
    project_2:
        {
            project__img: 'imgs/mydiary.png',
            project__title: 'my Diary',
            project__para: '나만의 메모장을 구현했습니다.',
            project__contribution: '100%',
            project__detail: '프론트는 React와 Nextjs를 사용하였고 백엔드는 Node.js, Sequlizer, express.js를 사용했으며 서버는 aws를 사용했습니다.',
            project__stack: 'React, Typescript, Next.js, Ant Design, styled-components, Redux, Redux-Saga... etc, Back - Node.js, Sequlizer, express.js... etc ',
            project__src: 'https://github.com/DevMinwoo-Jung/mydiary',
            project__live: 'http://mydiary93.com/'
        },
    project_1:
    {
        project__img: 'imgs/mydiary.png',
        project__title: 'my Diary',
        project__para: '나만의 메모장을 구현했습니다.',
        project__contribution: '100%',
        project__detail: '프론트는 React와 Nextjs를 사용하였고 백엔드는 Node.js, Sequlizer, express.js를 사용했으며 서버는 aws를 사용했습니다.',
        project__stack: 'React, Typescript, Next.js, Ant Design, styled-components, Redux, Redux-Saga... etc, Back - Node.js, Sequlizer, express.js... etc ',
        project__src: 'https://github.com/DevMinwoo-Jung/mydiary',
        project__live: 'http://mydiary93.com/'
    },        
}

export const Zai = [
  {
    "project": "삼성 DS 일정관리",
    "duration": "2023.09 ~ 2024.01",
    "duties": "전반적인 UI 구성, 프론트엔드 개발"
  },
  {
    "project": "자사 솔루션 c# 마이그레이션 4.6 -D 6.0",
    "duration": "2024.03 ~ 2024.04",
    "duties": "프론트, 백 전담"
  },
  {
    "project": "자사 문서보안 프레임워크을 활용한 파일 upload and download 프로젝트",
    "duration": "2024.05 ~ 2024.07",
    "duties": "프론트, 백 전담"
  },
  {
    "others": "자사 프로젝트 유지보수",
    "duration": "2022.10 ~ Now",
    "duties": "기존 프로젝트 유지보수, 기존 프로젝트에 새로운 IIS 구성, 인증서 교체, 원격지원을 통한 고객응대 etc"
  },
]

export const emain = [
  {
    "project": "이메인텍 포승그린파워 그룹웨어 구축",
    "duration": "2020.06 ~ 2021.04",
    "duties": "JSP를 활용한 페이지 개발"
  }
]