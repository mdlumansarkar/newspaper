import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {}
  articles = [
    {
        "status": "ok",
        "totalResults": 37,
        "articles": [
          {
            "source": {
              "id": "associated-press",
              "name": "Associated Press"
            },
            "author": "ALANNA DURKIN RICHER, CLAIRE RUSH",
            "title": "Police say man behind ballot box arsons has metalworking experience and may be planning more attacks - The Associated Press",
            "description": "Investigators say the man suspected of setting fires in ballot drop boxes in Oregon and Washington state is an experienced metalworker and may be planning additional attacks. Portland Police Bureau spokesman Mike Benner said Wednesday that authorities believe…",
            "url": "https://apnews.com/article/ballot-drop-box-fires-portland-vancouver-60fea753ceb761624e6aba49f0e9dd99",
            "urlToImage": "https://dims.apnews.com/dims4/default/bb07b3a/2147483647/strip/true/crop/5838x3284+0+304/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fab%2F66%2F99576375f3020d8bfe56fd48602e%2F8fa43287dcb543459c9b230ebd006163",
            "publishedAt": "2024-10-30T20:19:00Z",
            "content": "PORTLAND, Ore. (AP) The man suspected of setting fires in ballot drop boxes in Oregon and Washington state is an experienced metalworker and may be planning additional attacks, authorities said Wedne… [+3291 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Forbes"
            },
            "author": "Derek Saul",
            "title": "Microsoft Earnings: Stock Jumps As AI Drives Record Profits - Forbes",
            "description": "Microsoft is among the most profitable companies in the world, taking home about $25 billion last quarter.",
            "url": "https://www.forbes.com/sites/dereksaul/2024/10/30/microsoft-earnings-stock-jumps-as-ai-drives-record-profits/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/672290ebb4b730de1182e9cd/0x0.jpg?format=jpg&crop=2601,1463,x479,y911,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-10-30T20:07:08Z",
            "content": "Microsofts third calendar quarter earnings were the most robust in the companys five-decade history, as the Washington-based computing colossus enjoys a bump from the next generation of technological… [+1904 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "New York Post"
            },
            "author": "Whitney Vasquez",
            "title": "Zoë Kravitz conceals her ring finger in first outing as reason for Channing Tatum split is revealed - New York Post ",
            "description": "Zoë Kravitz hid her ring finger while stepping out for the first time since her shock split from fiancé Channing Tatum",
            "url": "https://nypost.com/2024/10/30/entertainment/zoe-kravitz-hides-her-ring-finger-in-first-outing-since-channing-tatum-split/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/10/92707483.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2024-10-30T20:01:41Z",
            "content": "Zoë Kravitz hid her ring finger while stepping out for the first time since calling off her engagement to fiancé Channing Tatum  and now, we know the reason behind their shock split.\r\nLenny Kravitz a… [+4900 chars]"
          },
          {
            "source": {
              "id": "fox-news",
              "name": "Fox News"
            },
            "author": "Emma Colton, Charles Creitz, Brooke Singman",
            "title": "Trump camp takes victory lap following election case legal win in battleground state - Fox News",
            "description": "A Pennsylvania court issued an injunction extending mail-in ballot applications in Bucks County by one day following a Trump campaign lawsuit.",
            "url": "https://www.foxnews.com/politics/trump-camp-takes-victory-lap-following-election-case-legal-win-battleground-state",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/10/77c41a0f-trumpmsg4.png",
            "publishedAt": "2024-10-30T19:51:00Z",
            "content": "The Trump campaign notched a legal victory on Wednesday, when a Pennsylvania court issued an injunction extending mail-in ballot applications by one day following a lawsuit from the Trump campaign. \r… [+5246 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hollywood Reporter"
            },
            "author": "Rick Porter",
            "title": "Grammys Shocker: Awards Moving to Disney From CBS - Hollywood Reporter",
            "description": "The annual music industry honors will run on ABC, Hulu and Disney+ starting in 2027 after more than half a century at CBS.",
            "url": "http://www.hollywoodreporter.com/tv/tv-news/grammy-awards-moving-to-disney-from-cbs-2027-1236049335/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/01/GettyImages-1389405760-H-2023.jpg?w=1296&h=730&crop=1",
            "publishedAt": "2024-10-30T19:30:47Z",
            "content": "The Grammys are getting a new home after more than 50 years on CBS.\r\nIn a major shakeup of the TV awards landscape, the Grammy Awards will move to Disney outlets beginning in 2027. ABC, Hulu and Disn… [+2271 chars]"
          },
          {
            "source": {
              "id": "the-hill",
              "name": "The Hill"
            },
            "author": "Sarah Fortinsky",
            "title": "More than 100 researchers call for pause in Musk Starlink launches - The Hill",
            "description": "Researchers are urging the federal government to pause further low-orbit internet satellite launches until a comprehensive review is conducted to determine the potential environmental damage that could result. In a letter to Julie Kearney, chief of the Federa…",
            "url": "https://thehill.com/policy/energy-environment/4962207-researchers-call-for-pause-musk-starlink-launches/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/10/AP24079114807234.jpg?w=1280",
            "publishedAt": "2024-10-30T19:02:36Z",
            "content": "Skip to content\r\nResearchers are urging the federal government to pause further low-orbit internet satellite launches until a comprehensive review is conducted to determine the potential environmenta… [+2234 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Alphabet earnings were 'bellwether' of tech earnings, says Wells Fargo's Ken Gawrelski - CNBC Television",
            "description": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
            "url": "https://www.youtube.com/",
            "urlToImage": "https://www.youtube.com/img/desktop/yt_1200.png",
            "publishedAt": "2024-10-30T18:21:24Z",
            "content": null
          },
          {
            "source": {
              "id": "associated-press",
              "name": "Associated Press"
            },
            "author": "WILL WEISSERT, CHRIS MEGERIAN",
            "title": "Harris promises to 'represent all Americans' after Biden's remark on Trump supporters and 'garbage' - The Associated Press",
            "description": "Kamala Harris is calling for Americans to “stop pointing fingers at each other” as she tries to push past comments made by President Joe Biden about Donald Trump’s supporters and “garbage.” Harris made her pitch in Raleigh, North Carolina, at the first of thr…",
            "url": "https://apnews.com/article/harris-biden-trump-election-garbage-supporters-3d2ea66e3027ddc4bc2b30c13bf7b554",
            "urlToImage": "https://dims.apnews.com/dims4/default/1d4fe45/2147483647/strip/true/crop/3717x2091+0+194/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc2%2F78%2F48cb3680a14fede7e925047b4548%2F2b272b9a9a7f4cd0ad7c8847fb2eaef3",
            "publishedAt": "2024-10-30T17:56:00Z",
            "content": "RALEIGH, N.C. (AP) Kamala Harris called Wednesday for Americans to stop pointing fingers at each other as she tried to push past comments made by President Joe Biden about Donald Trumps supporters an… [+5115 chars]"
          },
          {
            "source": {
              "id": "espn",
              "name": "ESPN"
            },
            "author": null,
            "title": "Interfering Yankees fans banned from Game 5 - ESPN",
            "description": "Two Yankees fans have been banned from attending Game 5 of the World Series after interfering with Dodgers star Mookie Betts in Game 4.",
            "url": "https://www.espn.com/mlb/story/_/id/42093437/sources-yankees-fans-interfered-mookie-betts-banned-world-series-game-5",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1030%2Fr1407845_1296x729_16%2D9.jpg",
            "publishedAt": "2024-10-30T17:48:51Z",
            "content": "Oct 30, 2024, 01:08 PM ET\r\nTwo New York Yankees fans have been banned from attending Game 5 of the World Series after interfering with Los Angeles Dodgers star Mookie Betts in Game 4.\r\nThe Yankees an… [+2179 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "PEOPLE"
            },
            "author": "https://www.facebook.com/peoplemag",
            "title": "Joe Exotic Announces Engagement to Fellow Prison Inmate: 'Wish I Would Have Met Him Long Ago' - AOL",
            "description": "Joe Exotic revealed from prison that he is engaged to a 33-year-old man from Mexico. The Oklahoma zookeeper, who is currently serving a 21-year sentence for a murder-for-hire plot against Carole Baskin, said he is hoping to get married in prison.",
            "url": "https://people.com/joe-exotic-announces-engagement-to-fellow-prison-inmate-8736885",
            "urlToImage": "https://people.com/thmb/rNxHysmv6Tk5eWST4oHgwfodauM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1203x607:1205x609)/Joseph-A-Maldonado-Joe-Exotic-103024-tout-a4a07250d9b84f8da3fc4c2a72be0d20.jpg",
            "publishedAt": "2024-10-30T17:48:04Z",
            "content": "Joe Exotic is getting married.\r\nThe Tiger King star, whose real name is Joseph Maldonado-Passage, got engaged while incarcerated. He announced the news on his social media, introducing the man he is … [+2489 chars]"
          },
          {
            "source": {
              "id": "nfl-news",
              "name": "NFL News"
            },
            "author": null,
            "title": "NFL Fantasy 2024 Start 'Em, Sit 'Em: Wide receivers for Week 9 - NFL.com",
            "description": "Which two rookie receivers should be in your lineup? How will Diontae Johnson perform as a Raven? Check out all of Michael F. Florio's WR starts and sits for Week 9 of the NFL fantasy football season.",
            "url": "https://www.nfl.com/news/nfl-fantasy-2024-start-em-sit-em-wide-receivers-for-week-9",
            "urlToImage": "https://static.www.nfl.com/image/upload/t_editorial_landscape_12_desktop/league/wvrnfgk89lrz1axzxocs",
            "publishedAt": "2024-10-30T17:40:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "2024-10-30T17:08:00Z",
            "content": "[Removed]"
          },
          {
            "source": {
              "id": null,
              "name": "Usda.gov"
            },
            "author": null,
            "title": "Federal and State Veterinary Agencies Share Update on HPAI Detections in Oregon Backyard Farm, Including First H5N1 Detections in Swine - USDA APHIS",
            "description": "There is no concern about the safety of the nation’s pork supply as a result of this finding.     Press Release  Contact: aphispress@usda.gov",
            "url": "https://www.aphis.usda.gov/news/agency-announcements/federal-state-veterinary-agencies-share-update-hpai-detections-oregon",
            "urlToImage": null,
            "publishedAt": "2024-10-30T16:58:05Z",
            "content": "There is no concern about the safety of the nations pork supply as a result of this finding. \r\n Press Release Contact:aphispress@usda.gov  \r\nWASHINGTON, Oct. 30, 2024 The U.S. Department of Agricultu… [+4116 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Jennifer Agiesta, Ariel Edwards-Levy, Edward Wu",
            "title": "CNN Polls: Harris has a narrow edge in Michigan and Wisconsin, while she and Trump remain tied in Pennsylvania - CNN",
            "description": "Vice President Kamala Harris maintains a narrow advantage in two of the three “blue wall” states that collectively represent her clearest path to an Electoral College victory over former President Donald Trump, according to new CNN polls conducted by SSRS.",
            "url": "https://www.cnn.com/2024/10/30/politics/cnn-polls-michigan-wisconsin-pennsylvania-blue-wall/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/harristrump-102624.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-10-30T16:55:00Z",
            "content": "Vice President Kamala Harris maintains a narrow advantage in two of the three blue wall states that collectively represent her clearest path to an Electoral College victory over former President Dona… [+8308 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Financial Times"
            },
            "author": null,
            "title": "US GDP rose at a 2.8% rate in third quarter on strong consumer spending - Financial Times",
            "description": "Final reading before presidential election was shy of expectations, but shows biggest economy is in robust health",
            "url": "https://www.ft.com/content/77fc8220-fda6-46d5-98f1-67451d2c9cca",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F136753b9-07c6-440a-aa24-370a2ca6002f.jpg?source=next-barrier-page",
            "publishedAt": "2024-10-30T16:27:46Z",
            "content": "wasnow HK$209 per 3 months\r\nThe new FT Digital Edition: todays FT, cover to cover on any device. This subscription does not include access to ft.com or the FT App.\r\n\u003Cul\u003E\u003Cli\u003E\u003C/li\u003EGlobal news &amp; ana… [+2668 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Brad Smith",
            "title": "Meta set to report Q3 earnings amid AI investment focus - Yahoo Finance",
            "description": "Meta Platforms (META) is set to release its third quarter financial results after the market closes today. With the tech giant investing heavily in...",
            "url": "https://finance.yahoo.com/video/meta-set-report-q3-earnings-161506707.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/asEIjKL1xCU8kCvgkcNyqA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY-/https://s.yimg.com/os/creatr-uploaded-images/2024-10/899f0260-96d3-11ef-bfef-af43e1932e2f",
            "publishedAt": "2024-10-30T16:15:06Z",
            "content": "Meta Platforms (META) is set to release its third quarter financial results after the market closes today. With the tech giant investing heavily in artificial intelligence, investors will be closely … [+319 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "SFGate"
            },
            "author": "Sam Mauhay-Moore",
            "title": "Mystery fungus could lead to 'worst case scenario' for Calif. species - SFGATE",
            "description": "California wildlife officials recently confirmed the presence of a dangerous fungus that could pose a threat to the state’s diverse bat population.",
            "url": "https://www.sfgate.com/bayarea/article/mystery-fungus-found-california-species-19872228.php",
            "urlToImage": "https://s.hdnux.com/photos/01/45/04/66/26496411/3/rawImage.jpg",
            "publishedAt": "2024-10-30T16:14:42Z",
            "content": "FILE: Humboldt Redwoods State Park.\r\nRobert Holmes/Corbis via Getty Images\r\nCalifornia wildlife officials recently confirmed the presence of a dangerous fungus that could pose a threat to the states … [+3941 chars]"
          },
          {
            "source": {
              "id": "usa-today",
              "name": "USA Today"
            },
            "author": "Christopher Cann",
            "title": "Officials call for hate crime charges after Jewish man shot walking to Chicago synagogue - USA TODAY",
            "description": "As Chicago police search for a motive after a Jewish man was shot walking to a synagogue, community leaders are calling for hate crime charges.",
            "url": "https://www.usatoday.com/story/news/nation/2024/10/30/chicago-shooting-jewish-synagogue/75934186007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/08/28/USAT/74982924007-usatsi-23692054.jpg?crop=6331,3562,x0,y329&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2024-10-30T16:08:27Z",
            "content": "Jewish community leaders in Chicago are calling for hate crime charges against a suspect accused of shooting a man who was walking to a synagogue before firing at police and emergency responders.\r\nPo… [+4645 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "LBC"
            },
            "author": "Will Conroy",
            "title": "First case of potentially deadly mpox virus strain detected in the UK - LBC",
            "description": "The first UK case of a potentially deadly strain of the mpox virus has been detected in London.",
            "url": "https://www.lbc.co.uk/news/first-case-of-potentially-deadly-mpox-virus-strain-detected-in-the-uk/",
            "urlToImage": "https://images.lbc.co.uk/images/685128?width=1200&crop=16_9&signature=hodVDxiPBMf-WaFLeyJtKrNo0_w=",
            "publishedAt": "2024-10-30T15:29:00Z",
            "content": "30 October 2024, 15:29 | Updated: 30 October 2024, 15:35\r\nThe UK Health Security Agency (UKHSA) said the risk to the UK population 'remains low'.\r\nPicture: \r\nAlamy\r\nBy Will Conroy\r\nThe first UK case … [+2644 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "2024-10-30T15:20:02Z",
            "content": "[Removed]"
          }
        ]
      }
  ]

  constructor(){
      super();
      this.state = {
          articles:this.articles,
          loading:false
        }
    }
    
    render() {
    return <> 
    
    <div><h2 style={{margin:'15px'}}>NewsMonkey -- Top Headlines</h2></div>
    <div className='container my-3'>
        <div className='row'>
            <div className='col-md-4'>
            <NewsItem title = "Bangladesh is a free country" description = "This is Note fare for us to hide someone is a great sucessful life." textUrl = "https://dims.apnews.com/dims4/default/bb07b3a/2147483647/strip/true/crop/5838x3284+0+304/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fab%2F66%2F99576375f3020d8bfe56fd48602e%2F8fa43287dcb543459c9b230ebd006163"/>
            </div>

            <div className='col-md-4'>
            <NewsItem title = "Bangladesh is a free country" description = "This is Note fare for us to hide someone is a great sucessful life." textUrl = "https://dims.apnews.com/dims4/default/bb07b3a/2147483647/strip/true/crop/5838x3284+0+304/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fab%2F66%2F99576375f3020d8bfe56fd48602e%2F8fa43287dcb543459c9b230ebd006163"/>
            </div>

            <div className='col-md-4'>
            <NewsItem title = "Bangladesh is a free country" description = "This is Note fare for us to hide someone is a great sucessful life." textUrl = "https://dims.apnews.com/dims4/default/bb07b3a/2147483647/strip/true/crop/5838x3284+0+304/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fab%2F66%2F99576375f3020d8bfe56fd48602e%2F8fa43287dcb543459c9b230ebd006163"/>
            </div>
    
    </div>
    </div>
    </>
  }
}

export default News