type SkillName = {
  javascript:string;
  typescript:string;
  html: string;
  css: string;
  react: string;
  styledComponents: string;
  reactRouter: string;
  nextjs: string;
  bootstrap: string;
  mui: string;
  redux: string;
  github: string;
  sass: string;
  swr: string
}

type SkillDesc = {
  imgSrc: string;
  skillName: string;
  customLabel: string;
  skillDesc: string[];
}

export const skills: any = {
  javascript: { imgSrc: "imgs/icon/javascript.png", skillName: "JavaScript",customLabel: "Advanced", 
  skillDesc: ['array와 forEacrh의 차이, map, filter, reduce, split 등의 메서드.', '호이스팅, this, 클로저, promise async,await, call by value, call by reference', 'event Loop, 얕은 복사와 깊은 복사의 차이, mutable vs immutable의 차이와 예시']},
  typescript: { imgSrc: "imgs/icon/typescript.png", skillName: "TypeScript", customLabel: "Basic", 
  skillDesc: ['type과 interface의 차이', '동적언어와 정적언어의 차이', '타입스크립트의 장점', '실제 프로젝트에 적용해 본 경험이 있습니다.']},
  html: { imgSrc:"imgs/icon/html.png",skillName:"HTML", customLabel: "Advanced", skillDesc: ["ES6 문법을 잘 히애하고 있습니다", "map, filter, reduce, split 등의 메서드를 사용하여 개발 할 수 있습니다.", "This를 정확히 이해하고 있습니다."]},
  css: { imgSrc:"imgs/icon/css.png",skillName:"css", customLabel: "Advanced", skillDesc: ["ES6 문법을 잘 히애하고 있습니다", "map, filter, reduce, split 등의 메서드를 사용하여 개발 할 수 있습니다.", "This를 정확히 이해하고 있습니다."]},
  react: { imgSrc:"imgs/icon/react.png",skillName:"React", customLabel: "Advanced", skillDesc: ["ES6 문법을 잘 히애하고 있습니다", "map, filter, reduce, split 등의 메서드를 사용하여 개발 할 수 있습니다.", "This를 정확히 이해하고 있습니다."]},
  styledComponents: { imgSrc:"imgs/icon/styledComponents.svg",skillName:"styled-components", customLabel: "Basic", skillDesc: ["ES6 문법을 잘 히애하고 있습니다", "map, filter, reduce, split 등의 메서드를 사용하여 개발 할 수 있습니다.", "This를 정확히 이해하고 있습니다."]},
  reactRouter: { imgSrc:"imgs/icon/reactRouter.png",skillName:"react-router", customLabel: "Advanced", 
  skillDesc: ["ES6 문법을 잘 히애하고 있습니다", "map, filter, reduce, split 등의 메서드를 사용하여 개발 할 수 있습니다.", "This를 정확히 이해하고 있습니다."]},
  nextjs: { imgSrc:"imgs/icon/firebase.png",skillName:"Nextjs", customLabel: "Basic", skillDesc: ["ES6 문법을 잘 히애하고 있습니다", "map, filter, reduce, split 등의 메서드를 사용하여 개발 할 수 있습니다.", "This를 정확히 이해하고 있습니다."]},
  bootstrap: { imgSrc:"imgs/icon/bootstrap.png",skillName:"Bootstrap",customLabel: "Advanced", skillDesc: ["ES6 문법을 잘 히애하고 있습니다", "map, filter, reduce, split 등의 메서드를 사용하여 개발 할 수 있습니다.", "This를 정확히 이해하고 있습니다."]},
  mui: { imgSrc:"imgs/icon/mui.png",skillName:"MUI",customLabel: "Intermediate", skillDesc: ["ES6 문법을 잘 히애하고 있습니다", "map, filter, reduce, split 등의 메서드를 사용하여 개발 할 수 있습니다.", "This를 정확히 이해하고 있습니다."]},
  redux: { imgSrc:"imgs/icon/redux.png",skillName:"Redux", customLabel: "Intermediate", skillDesc: ["ES6 문법을 잘 히애하고 있습니다", "map, filter, reduce, split 등의 메서드를 사용하여 개발 할 수 있습니다.", "This를 정확히 이해하고 있습니다."]},
  github: { imgSrc:"imgs/icon/github.png",skillName:"Github", customLabel: "Intermediate", skillDesc: ["ES6 문법을 잘 히애하고 있습니다", "map, filter, reduce, split 등의 메서드를 사용하여 개발 할 수 있습니다.", "This를 정확히 이해하고 있습니다."]},
  sass: { imgSrc:"imgs/icon/sass.png",skillName:"Sass", customLabel: "Advanced", skillDesc: ["ES6 문법을 잘 히애하고 있습니다", "map, filter, reduce, split 등의 메서드를 사용하여 개발 할 수 있습니다.", "This를 정확히 이해하고 있습니다."]},
  swr: { imgSrc:"imgs/icon/swr.png",skillName:"SWR", customLabel: "Advanced", skillDesc: ["ES6 문법을 잘 히애하고 있습니다", "map, filter, reduce, split 등의 메서드를 사용하여 개발 할 수 있습니다.", "This를 정확히 이해하고 있습니다."]},
}

export const projectsInfo: any = {
  project_one:
      {
        project__img: `imgs/miniGame.png`,
        project__title: 'MiniGame',
        project__para: '일정하게 움직이는 물고기를 시간내에 클릭하는 게임입니다.',
        project__contribution: '100%',
        project__making__duration: '10일',
        project__detail: 'Vanila Javascript를 이용한 Mini Game으로 Javasciprt의 class, this가 그리키는 것이 무엇인지 등의 문법 이해와 DOM요소의 조작 방식을 이해하는데 도움이 되었습니다.',
        project__stack: 'Vanila Javascript',
        project__src: 'https://github.com/DevMinwoo-Jung/miniGame',
        project__live: 'https://devminwoo-jung.github.io/miniGame/'
      },
  project_two:
      {
        project__img: `imgs/financialLedger.png`,
        project__title: 'Financial-ledger',
        project__para: '가계부를 제작하였습니다.',
        project__contribution: '100%',
        project__making__duration: '3주',
        project__detail: 'React hooks를 이용하여 가계부를 제작하여 props, usestate등 리액트 전반을 이해할 수 있는데 도움이 되었으며 cloudinary, firebase API를 이용하여 이미지 업로드, db사용을 하였습니다. 또한 react-router를 이용하였습니다.',
        project__stack: 'Javascript, React, React-router, cloudinary, firebase',
        project__src: 'https://github.com/DevMinwoo-Jung/financial_ledger',
        project__live: 'https://devminwoo-jung.github.io/financial_ledger/'
      },
  project_three:
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
    project_four:
        {
            project__img: `imgs/rsz_homepage.png`,
            project__title: 'Portfolio',
            project__para: '지금 보고 계시는 포트폴리오를 제작하였습니다.',
            project__contribution: '100%',
            project__making__duration: '5일',
            project__detail: 'React, React-router 사용하였고 Sass, tailwindcss를 적용해 보았습니다.',
            project__stack: 'React, Javascript,  React-router, Sass, tailwindcss',
            project__src: 'https://github.com/DevMinwoo-Jung/Portfolio_for_Job',
            project__live: 'https://devminwoo-jung.github.io/Portfolio_for_Job/'
        },
}