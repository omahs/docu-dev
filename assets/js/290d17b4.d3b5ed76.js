"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={id:"reward",sidebar_label:"Testnet Staking Rewards Program"},i="Testnet Staking Rewards Program",s={unversionedId:"node/reward",id:"node/reward",title:"Testnet Staking Rewards Program",description:"To help achieve our goal of a fully decentralized and scaled blockchain, we designed a staking rewards program during",source:"@site/docs/node/reward.mdx",sourceDirName:"node",slug:"/node/reward",permalink:"/docu-dev/docs/node/reward",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/node/reward.mdx",tags:[],version:"current",frontMatter:{id:"reward",sidebar_label:"Testnet Staking Rewards Program"},sidebar:"nodeSidebar",previous:{title:"Routability",permalink:"/docu-dev/docs/node/routability"},next:{title:"Frequently Asked Questions",permalink:"/docu-dev/docs/node/faq"}},l={},d=[{value:"Episodes",id:"episodes",level:2},{value:"Scoring Formula",id:"scoring-formula",level:3},{value:"Registration",id:"registration",level:3},{value:"From scores to rewards",id:"from-scores-to-rewards",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testnet-staking-rewards-program"},"Testnet Staking Rewards Program"),(0,r.kt)("p",null,"To help achieve our goal of a fully decentralized and scaled blockchain, we designed a staking rewards program during\nthe testnet phase."),(0,r.kt)("p",null,"People that consistently run a node and produce blocks will be rewarded mainnet Massa tokens when mainnet launches."),(0,r.kt)("p",null,"Staking is what improves the security of the network. By buying rolls (freezing your coins) and producing your share of\nthe blocks, you help honest nodes collectively protect against potential attackers, who must not reach 51% of the block\nproduction. On mainnet, staking is incentivized through block rewards: for each block produced, you get some Massa. On\ntestnet however, you get testnet Massa which has no value, this is why we will reward you with mainnet Massa for\nlearning to set up your node and stake right now, which also helps us improve the staking user experience."),(0,r.kt)("p",null,"On July 16th we launched the first public version of Massa, the first testnet. More than 350 nodes were connected at the\nsame time after one week, which overloaded our bootstrap nodes which were the only nodes accepting connections. By\nsetting your node up to be routable (with a public IP), you become a real peer in the peer-to-peer network: you not only\nconnect to existing routable nodes, but you offer other people the possibility to access the network through your\nconnection. We will therefore also reward how often your node is publicly accessible."),(0,r.kt)("h2",{id:"episodes"},"Episodes"),(0,r.kt)("p",null,"We have release cycles of 1 month each, called \u201cepisodes\u201d, the first one started in August 2021. At the beginning of an\nepisode, participants have a few days to set up their nodes with the newest version before scoring starts, but it\u2019s also\npossible to join anytime during the episode."),(0,r.kt)("p",null,"Throughout the episode, you can ask for coins in the Discord faucet (on channel testnet-faucet). No need to abuse the\nfaucet, we don\u2019t reward you based on the number of rolls."),(0,r.kt)("p",null,"At the end of an episode, all nodes stop by themselves and become useless/unusable. Participants have to download and\nlaunch the new version for the next episode. Make sure you keep the same node private key and wallet!"),(0,r.kt)("h3",{id:"scoring-formula"},"Scoring Formula"),(0,r.kt)("p",null,"The score of a node for a given episode is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Score = (produced_blocks/selected_slots) * (active_cycles/nb_cycles_episode) * (50 + 40 * routable_samples/routability_trials + 30 * total_maxim_factor/routability_trials)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"50 points of the score are based on staking:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(produced_blocks / selected_slots ) * (active_cycles / nb_cycles_episode)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"active_cycles")," is the number of cycles in the episode during which the address had active rolls."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nb_cycles")," is the total number of cycles in the episode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"produced_blocks")," is the number of final blocks produced by the staker during the episode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selected_slots")," is the number of final slots for which the staker was selected to create blocks during the\nepisode. If ",(0,r.kt)("inlineCode",{parentName:"li"},"selected_slots = 0"),", the staking score is set to 0."),(0,r.kt)("li",{parentName:"ul"},"The maximum score is supposed to be reached if, during the whole episode, the node has rolls and produces all\nblocks when it is selected to."))))),(0,r.kt)("li",{parentName:"ul"},"40 points of the score are based on the routability of the node: how often the node can be reached by other nodes.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"routable_samples / routability_trials",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"routability_trials is the number of connection trials that resulted in a successful connection."),(0,r.kt)("li",{parentName:"ul"},"Maximum score is achieved if the node can always be reached by other nodes."))))),(0,r.kt)("li",{parentName:"ul"},"30 points of the score incentivize node diversity: the network is more decentralized if nodes are spread across countries and providers than if they are all hosted at the same location/provider.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"total_maxim_factor / routability_trials"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"total_maxim_factor")," is the total amount of maxim_factor accumulated at each cycle. The ",(0,r.kt)("inlineCode",{parentName:"li"},"maxim_factor")," is a\nvalue between 0 and 1 representing the distance between this node\u2019s IP address and the IP addresses of other\nnodes in a given cycle."),(0,r.kt)("li",{parentName:"ul"},"Maximum score is reached when running the node at home or with a provider that is not used to run other Massa\nnodes.")))))),(0,r.kt)("p",null,"We encourage every person to run only one node. Running multiple nodes with the same staking keys will result in roll\nslashing in the future. Running multiple nodes with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"node_privkey.key")," also reduces network health and will be\na point of attention for rewards."),(0,r.kt)("h3",{id:"registration"},"Registration"),(0,r.kt)("p",null,"To validate your participation in the testnet staking reward program, you have to register with your Discord account.\nWrite something in the ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet-rewards-registration")," channel of our Discord and our bot will DM you instructions."),(0,r.kt)("h3",{id:"from-scores-to-rewards"},"From scores to rewards"),(0,r.kt)("p",null,"The launch of mainnet is planned for 2023."),(0,r.kt)("p",null,"By this time, people will be able to claim their rewards through a KYC process (most likely including video/liveness) to\nensure that the same people don\u2019t do multiple claims, and comply with KYC/AML laws."),(0,r.kt)("p",null,"The testnet score of a person will be the sum of all their episode scores."),(0,r.kt)("p",null,"The mainnet reward will depend on the testnet score. More info on mainnet rewards will come later."))}p.isMDXComponent=!0}}]);