/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import Tab from '../components/Tab.tsx'
import makeNewLine from '../components/CodeLine.tsx'
import Comment from '../components/Comment.tsx'
import InlineComment from '../components/InlineComment.tsx'
import JsValue from '../components/JsValue.tsx'
import Keyword from '../components/Keyword.tsx'
import Attribute from '../components/Attribute.tsx'
import Func from '../components/Func.tsx'
import { Comma, LC } from '../components/Misc.tsx';
import Value from '../components/Value.tsx'
import RawString from '../components/RawString.tsx'
import Symbol from '../components/Symbol.tsx'
import PageTab from '../components/PageTab.tsx'

const projects = [
  {
    name: 'CloudMargin',
    type: 'fintech',
    link: 'https://cloudmargin.com',
    inProgress: true,
    summary: [
      'CloudMargin is the single-instance collateral',
      'management platform built to drive efficiency and',
      'reduce risk and costs for the world\'s banks,',
      'buy-side institutions, outsourcers and corporates.'
    ],
    period: [2021, new Date().getFullYear()],
    role: 'Full-stack Software Engineer',
    technologies: ['typescript', 'mysql', 'react', 'docker', 'aws']
  },
  {
    name: 'Pacstall',
    type: ['ui', 'devops', 'cli'],
    link: 'https://pacstall.dev',
    inProgress: true,
    summary: [
      'An Arch User Repository implementation',
      'for Debian, Ubuntu and derivatives.'
    ],
    period: [2021, 2022],
    role: 'Frontend Software Engineer',
    technologies: ['typescript', 'go', 'react', 'docker', 'linux']
  }
]

export default function Home() {
  const NewLine = makeNewLine();

  return (
    <div class={tw`p-4 mx-auto max-w-screen-2xl min-w-screen-2xl`}>
      <head>
        <title>projects.js | Paul Cosma</title>
      </head>

      <link rel="stylesheet" href="/css/styles.css" />

      <div>
        <PageTab href="/main.js">main.js</PageTab>
        <PageTab active href="/projects.js">projects.js</PageTab>
      </div>
      <NewLine /><Comment>=============================================</Comment>
      <NewLine /><Comment><Tab/>My latest projects</Comment>
      <NewLine /><Comment>=============================================</Comment>
      <NewLine /><Comment />
      <NewLine /><NewLine /><NewLine />
      <NewLine /><Keyword>export default</Keyword> <Attribute>function</Attribute> <Func>projects</Func><Keyword>() <LC/></Keyword>
      <NewLine /><Tab/><Keyword>return </Keyword><JsValue depth={1} NewLine={NewLine} value={projects} />
      <NewLine />
      <NewLine /><Comment><RawString>@FIXME:</RawString> maybe add smaller projects too..?</Comment>
      <NewLine />
    </div>
  );
}


