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

const birthdate = new Date(1997, 4, 8)

const profile = {
  name: {
    first: 'Paul',
    last: 'Cosma',
    nick: 'saenai255'
  },
  pronouns: ['he', 'him'],
  gender: 'male',
  email: 'mailto:paul.cosma97@gmail.com',
  phone: 'tel:+40757995418',
  birthdate: () => <Fragment><Keyword>new</Keyword> <Func>Date</Func><Keyword>(</Keyword><Value>1997</Value><Comma/> <Value>5 <Symbol>-</Symbol> 1 <InlineComment>May</InlineComment></Value><Symbol>, </Symbol><Value>8</Value><Keyword>)</Keyword> <InlineComment>currently {Math.floor((new Date().getTime() - birthdate.getTime()) / 1000 / 60 / 60 / 24/ 365)}</InlineComment></Fragment>,
  address: {
    country: 'Romania',
    state: 'Cluj',
    city: 'Cluj-Napoca',
    street: '********************'
  },
  links: {
    linkedIn: 'https://www.linkedin.com/in/x-paul-cosma/',
    github: 'https://github.com/saenai255/',
    facebook: 'https://www.facebook.com/paul.cosma997',
    stackOverflow: 'https://stackoverflow.com/users/7091644/paul-cosma',
  },
  hobbies: [
    'programming',
    'reading tech books',
    'playing RPGs',
    'linux'
  ],
  expertise: {
    javascript: 'native',
    typescript: 'native',
    nodejs: 'native',
    react: 'expert',
    go: 'expert',
    aws: 'proficient',
    linux: 'daily driving openSUSE Tumbleweed',
  }
}

export default function Home() {
  const NewLine = makeNewLine();

  return (
    <div class={tw`p-4 mx-auto max-w-screen-2xl min-w-screen-2xl`}>
      <head>
        <title>main.js | Paul Cosma</title>
      </head>

      <link rel="stylesheet" href="/css/styles.css" />

      <div>
        <PageTab href="/main.js" active>main.js</PageTab>
        <PageTab href="/projects.js">projects.js</PageTab>
      </div>
      <NewLine /><Comment>=============================================</Comment>
      <NewLine /><Comment><Tab/>Welcome to my coding space</Comment>
      <NewLine /><Comment>=============================================</Comment>
      <NewLine /><Comment />
      <NewLine /><Comment>Here you'll be able to find info about me and my latest projects.</Comment>
      <NewLine /><Comment>Don't expect frequent updates tho.</Comment>
      <NewLine /><NewLine /><NewLine /><Keyword>@no_mangle</Keyword>
      <NewLine /><Keyword>export default</Keyword> <Attribute>function</Attribute> <Func>profile</Func><Keyword>() <LC/></Keyword>
      <NewLine /><Tab/><Keyword>return </Keyword><JsValue depth={1} NewLine={NewLine} value={profile} />
      <NewLine />
      <NewLine /><Comment><RawString>@TODO:</RawString> refactor this</Comment>
      <NewLine />
    </div>
  );
}


