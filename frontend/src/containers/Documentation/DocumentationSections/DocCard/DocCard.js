import React from "react";

export default  [
  {
    header:  'Design Documentation',
    body: '     I started building this website with the purpose of organizing a few different facets of my life.\n' +
      '            I spend an inordinate amount of time organizing my life from the different websites, email, my banking,\n' +
      '            my news sources my finance, my slack etc etc. I wanted to build a place where I could organize and\n' +
      '            integrate different things.'
  },
  {
    header: 'Stock Page',
    body: 'This is the first iteration of this site which contains two features. One of which being a search for the stock market and' +
      ' list of stocks on a watch list. The website lets a user search for any stock by it’s symbol (e.g. NFLX) and it will return the ' +
      'last days closing price and percentage change for that stock. It will also show a graph of the stock price of the last year. ' +
      'This graph can also be zoomed in on a more granular level as well'
  },
  {
    header: 'News Feed',
    body: `I've also built a news feed with images laid out in a unique stye. I listened to a podcast recently on Pintrest 
    and it mentioned how they we’re the ones who invented/pioneered the infinite scroll feature that is common on many websites. 
    I wanted to create a similar infinite scrolling feature but for an image based news feed. 
`
  },
  {
    header: 'Plans for the Future',
    body: 'In the future I plan on building out todo lists/Kanban, integrating my email and every other tool I use. ' +
      'This website is really a sandbox for me to play around with new technologies. I plan on using some logging ' +
      'technologies and do other things beyond the scope of the course and that also require a backend. '
  },
  {
    header: 'The 3 APIs Used',
    body: '1)\tNews API. This is a popular news aggregator api. I use this in two places. ' +
      'One when searching for a stock or from my watch list I get the news and for the image based news board on the news tab.\n' +
      'The second being\tMarketstack API. This is a stock market API which provides stock market data for the stocks page. \n' +
      'The third was\tGoogle Charts API. This is used to graph the data from the stock market API as an area chart.\n'
  },
  {
    header: 'Persona 1: The News Fanatic',
    body: 'Lots of news aggregators are quite drab (see google news for an example). ' +
      'This news feed is set up in a way in which brings images to the ' +
      'forefront and would work well for someone who learns visually. '
  },
  {
    header: 'Persona 2: The Stock Broker',
    body: 'While this site has a long way to go before it matches the Bloomberg terminal for features. ' +
      'Having quick access for someone to both news and stocks on their site could be quite useful. '
  },
  {
    header: 'Persona 3: The Designer',
    body: 'While the website is set up right now to fetch news articles I enjoy (tech/business) and images along with it. ' +
      'I think a good application would be someone interested in news from a more artistic/design. ' +
      'A nature or architecture or art news feed would look very good given the design and photo centric layout '
  },
  {
    header: 'Persona Scenarios',
    body: '\n' +
      'Scenario 1) The News Fanatic – Who doesn’t need their daily news fix? This user could make use of customizing their feed (The api is set to retrieve certain queries right now the code)  in their own particular way. Whether they like politics or certain websites this person could customize the website to fit their needs. \n' +
      '\n' +
      'Scenario 2) The Stock Broker. This person needs to check the daily changes of a few stocks without much hassle. This person is tired with the cluttered UI of Yahoo Finance and just needs some simple information and the latest news on how much they made investing in Tesla Stock. \n' +
      '\n' +
      'Scenario 3) The Designer – The designer loves reading national geographic and architectural digest. They’ve set up the news feed to view their favorite sites – the big images make it easy for them to see what \n' +
      '\n' +
      'Scenario 4) The News Fanatic – After reading a bunch of stories about how much money people were making investing in Tesla stock the news fanatic decided to try their hand at day trading. Lo and behold they should have done some more research from reading the stock news feed as they managed to buy Tesla right at the peak of the bubble. \n' +
      '\n' +
      'Scenario 5) The Stock Broker – This financial wizard wants to check out a new potential stock buy Lyft – they search for the company in the search bar by the company’s ticker LYFT and then find out it has been down about 65% since it’s IPO and has been hurting since COVID. Maybe not. \n'
  },
  {
    header: 'Constraints',
    body: '\n' +
      '1)\tNeed to improve search for news after putting in a ticker – works well if ticker is commonly talked about in the news but shows few results if it is a low volume stock. \n' +
      '\n' +
      '2)\tYou will need the API keys for NewsAPI and MarketWatch \n' +
      '\n' +
      '3)\tCould add some more queries for the news api on the infinite list\n',
  },
  {
    header: 'Design Artifacts',
    body: 'See the git repository for my commits/progress I made on this. That should give you the best idea of the work I put in on this. ' +
      'Happy to add you to my github repo as well. '
  },
  {
    header: 'Sources for code',
    body: 'https://material-ui.com/, https://github.com/devias-io/react-material-dashboard UI libraries which I used quite a few components from \n' +
      ' https://github.com/codeBelt/react-redux-architecture used as a guide for organization of folders/ general structure for redux but wrote my own code for state control in the app. \n' +
      'https://github.com/santiq/bulletproof-nodejs  node js template backend (not used for course but forked for my own uses)\n' +
      'create-react-app -> used for react app framework\n'
  },
  {
    header: 'Sources for code cont.',
    body: `I also did go to stack overflow on occasion but I am completely confident if I did miss that I copied a piece of code that I can fully explain it. ' +
      'I think the project I did goes well beyond the scope of the course so I don't think this should be an issue regardless.`
  },
  {
    header: 'Reflective Diary',
    body: 'I realized this was a fairly entry level HTML, CSS and JS course. I need this course for my degree at Oregon State University so as I’ve already worked in the software development industry a while I thought it would be best to take it at Athabasca where I could challenge the course. \n' +
      '\n' +
      'I didn’t want to just do a project where I didn’t learn anything so I have set myself up for the future to use this project as a sandbox for learning new technologies. I set the backend up in Typescript as that is not something I’m super familiar with (The backend is not required for you to run the app). While on the frontend side the thing that I did learn while doing this project was a redux selector https://medium.com/@matthew.holman/what-is-a-redux-selector-a517acee1fe8. I have used redux (js state management library) in other applications before but I have never used a selector. I love learning about programming and challenging myself is key so I keep interested. \n' +
      '\n' +
      'On future projects including continuing on this one where I want to integrate my email, my banking, my podcasts etc. I think it’s important to keep trying out new techniques. It would have been very easy for me to slap together a more simple project for this but I decided that I want to make something that could actually create some value for myself if I keep working on it. Similarly the choice to learn typescript came down to that as well. I know JS well – but have never used TS. I think it’s often easy to go with what’s most comfortable so getting out of that comfort zone is important. \n'
  },
  {

  }
]