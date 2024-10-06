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
    project_1:
    {
        project__img: 'imgs/weather_clothes.png',
        project__title: 'weather with clothes',
        project__para: '공공 API를 활용하여 우리 동네의 날씨를 알 수 있는 앱을 구현하였습니다.',
        project__contribution: '100%',
        project__detail: 'React와 Typescript를 사용하였습니다.',
        project__stack: 'React, Typescript, TwailwindCss, Redux, Redux-Saga',
        project__src: 'https://github.com/DevMinwoo-Jung/weather_with_clothes/',
        project__live: 'https://devminwoo-jung.github.io/weather_with_clothes/'
    },        
    project_2:
    {
        project__img: 'imgs/let_me_know_seoul_festival.png',
        project__title: 'Let me know Seoul festival',
        project__para: '서울 열린데이터 광장에서 제공하는 API를 활용하여 서울에서 진행중인 문화/공연 정보를 알 수 있는 앱을 구현하였습니다.',
        project__contribution: '100%',
        project__detail: 'Next.js Typescript를 사용하였습니다.',
        project__stack: 'React, Typescript, TwailwindCss, Redux, Redux-Toolkit, React-query',
        project__src: 'https://github.com/DevMinwoo-Jung/let_me_know_seoul_festival/',
        project__live: 'https://devminwoo-jung.github.io/let_me_know_seoul_festival/'
    }, 
}

export const Zai = [
  {
    "project": "삼성 DS 일정관리",
    "duration": "2023.09 ~ 2024.01",
    "duties": "프론트엔드 구조 설계 및 구현"
  },
  {
    "project": "자사 솔루션 c# 마이그레이션 4.6 -> 6.0",
    "duration": "2024.03 ~ 2024.04",
    "duties": "프론트, 백 전담"
  },
  {
    "project": "자사 문서보안 프레임워크을 활용한 파일 upload and download 프로젝트",
    "duration": "2024.05 ~ 2024.07",
    "duties": "프론트, 백 전담"
  },
  {
    "project": "자사 프로젝트 유지보수",
    "duration": "2022.10 ~ Now",
    "duties": ["Outlook, OWA 대용량 첨부 add-in 어플리케이션 개발", "자사 솔루션 관리자 페이지 개발/유지보수", "자사 솔루션 c# 4.6에서 6으로 마이그레이션", "자사 솔루션 유지보수 및 고객 원격 응대"]
  }, 
]

export const emain = [
  {
    "project": "이메인텍 포승그린파워 그룹웨어 구축",
    "duration": "2020.06 ~ 2021.04",
    "duties": "JSP를 활용한 페이지 개발"
  }
]

// const prevPr = [
//   [의사소통의 기본은 역지사지]
// ‘상대방의 처지에서 생각하자’가 좌우명입니다. 어릴 적부터 정직함과 타인을 배려하는 자세를 강조하셨던 부모님의 영향으로 자신의 입장에서만 생각하기보다는 상대방의 처지에서 생각해보고 그 의견에 귀 기울일 줄 아는 사람으로 성장하였습니다. 그래서 문제가 발생하면 저의 의견을 강하게 피력하기보다는 상대방과 ‘다름’을 수용하고 처지를 바꿔 생각하는 습관이 있습니다. 호서대학교 국제업무팀에서 일할 때는 일본의 시즈오카, 오사카 등 자매학교 학생들이 2주간 한국 문화 체험 프로그램을 기획 운영하는 업무를 맡았습니다. 이전의 설문조사 결과를 보니 프로그램에 대한 불만이 많았습니다. 주로 한국 전통문화 체험에 치중되어 연령대가 20대 초반임을 고려하면 수요와 동떨어져 만족도가 낮았습니다. 이를 보며 외국인들에게 문화 체험이란 무엇인가 생각해보았고 전통문화 체험 외에도 한류에 초점을 맞춰 한국문화 체험 안을 기획하였습니다. 인사동 가기, 코엑스 SM타운 방문 등을 일정에 포함해 만족도를 끌어냈고 결과적으로 이전 학생들의 입소문 덕분에 참여 인원수가 2배 가까이 늘기도 하였습니다. 상대방의 처지에서 생각할 줄 아는 저의 의사소통 역량은 팀워크를 높여 긍정적인 시너지를 창출할 것입니다.

// 수정하기삭제하기
// 성격의 장단점
// [꼼꼼함, 실수의 최소화와 효율의 향상]
// 꼼꼼한 성격으로 주변으로부터 믿음직하다는 말을 자주 듣습니다. 어떤 일을 하든 간에 진행 과정에서 놓칠 수 있는 사소한 실수나 문제를 잘 잡아내는 경향이 있습니다. 교육센터, 그리고 이전 회사에서 여러 프로젝트를 진행하며 오류를 체크 하였습니다. 오류를 확인하고 스스로 해결하고자 최대한 노력하였습니다. Front 단에서 view에 단순한 오탈자부터 back 단에서 일어난 오류까지 다양한 오류를 검사해서 프로젝트의 완성도를 높이고자 노력하였습니다. 이러한 경험을 토대로 꼼꼼하고 완벽을 추구하는 개발자가 될 것입니다.

// [장고 끝에 악수를 피하고자]
// 신중한 성격이다 보니 무언가를 결정하는 데 오랜 시간이 걸리는 편입니다. 한정된 시간 안에 성과를 도출해야 하는 프로젝트 특성상 시간 관리의 중요성을 인지하고 있습니다. 성과에 직접적인 영향을 미치는 요소를 빠르게 파악하는 전략적 사고 연습을 반복하고 있으며, 계획에 차질이 없도록 하고자 일의 우선순위를 두고 처리하는 습관을 키우고 있습니다.
// 수정하기삭제하기
// 업무 관련 역량
// [기본을 탄탄히]
// 프론트엔드 개발을 독학하며 통합개발환경으로 Visual Studio Code를 선택하였습니다. vs code를 활용하여 Javascript의 기본 문법인 if, else if 조건문과 map. filter, object 등의 JavaScript method를 익혀 vanilla Javascript로 물고기를 잡는 미니게임 프로젝트를 만들어본 경험이 있습니다. 리액트는 life cycle과 state와 props 등의 기초를 배우며 YouTube clone 코딩을 하였고 나아가서 react hooks까지 학습하였습니다. 스스로 프로젝트 하나를 끝내보고자 react hooks를 사용하여 가계부를 만들었고 firebase를 이용하여 google, git hub 로그인과 database 연동을 하였으며 cloudinary를 이용한 이미지 업로드를 구현해보았으며 이외에도 react-slick, styled-component 라이브러리를 이용해 보았습니다. 또한 이들 프로젝트를 배포하여 사용자가 직접 경험할 수 있게 깃허브를 이용한 배포까지 완료하였습니다. Typescript는 union, enum등의 기본 문법과 interface, class, 캡슐화, 추상화 등의 OOP 개념을 학습하였습니다. 개인적인 학습 기록과 소스 관리를 위해 source tree, cmder을 통해 형상 관리를 하였습니다. JavaScript, html과 CSS 학습을 위해 MDN을 애용하였으며 react, typescript 공식 사이트를 참고하며 공부하였고, 이들을 영어로 보는 데 문제가 없습니다. 이 외에도 Stack Overflow를 포함한 영어 사이트, 블로그를 참고하여 기본기를 다졌습니다.


// 수정하기삭제하기
// 지원 동기
// [상상하던 것이 현실이 된 기쁨]
// 현재의 수준에서 만족하지 않고 더욱 발전하고 싶은 개발 욕구를 충족하고 싶어 지원하게 되었습니다. 대학 졸업 후 학교에서 2년 동안 일하며 교직원 포털 사이트에서 Excel 파일로 정리된 수많은 학생의 정보를 열람을 할 수 있었습니다. 웹 페이지에서 화면을 클릭해서 학생들의 데이터를 입력하면 Excel 파일에도 반영이 되고 전산실에 요청 한 번으로 보던 페이지가 바뀌고 존재하던 부문이 없어지고 새로운 부문이 생기는 등 업무를 하며 이러한 것들은 어떻게 만들고 관리하나 막연히 궁금하였습니다. 그렇게 개발에 대한 막연한 궁금증을 시작으로 주변 지인들에게 질문을 시작했습니다. 처음으로 코딩했던 것이 더하기 빼기 등의 간단한 기능만 있는 계산기를 따라서 코딩하였고, 개발에 대한 것을 배우고 싶어 국비 지원학원을 통해 웹 개발의 기본을 공부하였습니다. 여러 번의 프로젝트를 진행하고 막연히 궁금하던 것을 스스로 구현 해 보며 이는 성취감으로 다가왔고 웹 개발 분야에서 성장하여 역량을 펼치고 싶은 욕심이 커졌습니다. 성취감을 양분 삼아 많은 것을 보고 배우며 든든한 개발자로 성장하고 싶습니다.
// 수정하기삭제하기
// 입사 후 포부
// [소통하는 능동적인 개발자] 
// ‘개발자의 생명은 의사소통 능력’이라는 칼럼을 읽은 적이 있습니다. 기업의 지속적인 발전을 위해서 조직 구성원 간의 소통과 업무에 대한 전문성이 있어야 한다고 생각합니다. 저는 소통하는 개발자가 되어 회사의 성공적인 프로젝트 수행에 일조할 것입니다.
// 입사 후 능동적인 태도를 바탕으로 기본을 지키는 개발자가 되겠습니다. 코딩하며 오류를 마주하거나, 난관에 닥쳤을 때 개발사에서 제공하는 공식 문서나 선배 개발자분들이 앞서 경험하고 해결했던 발자취를 참고하여 능동적인 해결 능력을 기르겠습니다.
// 그리고 협업의 자세를 가진 개발자가 되겠습니다. 개발자는 혼자가 아닌 다른 이들과 소통하며 협업하는 직업이라 생각합니다. 열린 마음으로 다양한 이들의 의견을 경청하고 수용하는 태도를 기르고 제 의견을 논리 정연하게 설명하며 다른 이에게 공감하는 능력을 기르겠습니다.
// 마지막으로 초심을 되새기며 배움을 게을리하지 않는 개발자가 되겠습니다. 드림코딩, 애플코딩, 인프런등을 통해 배운 지식을 더욱 탄탄히 쌓고자 합니다. 웹 개발 공부뿐만 아니라 여러 사람과 함께 하는 공부, 그리고 여러 개발자 포럼에 참여하여 최신 흐름을 읽을 수 있는 개발자가 되겠습니다.

// ]