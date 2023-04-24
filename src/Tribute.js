import React from 'react'
import "./Tribute.css"

const Tribute = () => {
  return (
    <div className='tribute'>
      <div className='intro'>
        <div className='intro-left'>
            <img src='Intro.jpeg'/>
        </div>
        <div className='intro-right'>
        <h3>AB de Villers</h3>
        <p>AB de Villiers is a South African cricketer known for his explosive batting and acrobatic fielding. He is regarded as one of the greatest cricketers of all time and has a massive following around the world. In this tribute, we will celebrate the career of this cricketing legend and highlight some of his greatest achievements.</p>
        </div>
      </div>

      <div className='admire'>
        <div className='admire-left'>
            <h3>What I admire about AB de Villiers</h3>
            <p>AB de Villiers is widely admired for his exceptional cricketing abilities and his versatility on the field. Here are a few things that I admire about him:<br/><br/>

               <u>Batting prowess:</u> AB de Villiers is widely regarded as one of the most talented batsmen in the history of cricket. He has an unorthodox style of batting, which makes him unpredictable and difficult to bowl to. He has a wide range of shots in his arsenal and can hit the ball to all parts of the ground.<br/><br/>

               <u>Fielding skills:</u> AB de Villiers is also an outstanding fielder. He has taken some incredible catches and has also affected many run outs with his quick reflexes and athleticism.<br/><br/>

               <u>Humility:</u> Despite his incredible talent, AB de Villiers is known for his humility and grounded nature. He is always respectful towards his opponents and teammates, and is known to be a team player.<br/><br/>

               <u>Versatility:</u> AB de Villiers is a versatile cricketer who can play in any position in the batting order. He has also kept wickets for his team in the past, which shows his all-round abilities as a cricketer.<br/><br/>

               <u>Sportsmanship:</u> AB de Villiers is known for his fair play and sportsmanship on the field. He has been involved in many close games where he has acknowledged the efforts of his opponents, even when his team has come out on top.</p><br/>
        </div>
        <div className='admire-right'><img src='Admire.jpeg'/></div>
      </div>

        <div className='early'>
            <div className='early-left'><img src='Early.jpeg'/></div>
            <div className='early-right'>
                <h3>Early Life and Career</h3>
                <p>AB de Villiers was born on February 17, 1984, in Pretoria, South Africa. He grew up in a sporting family, with his father being a doctor and his mother a homemaker. De Villiers began playing cricket at a young age and quickly developed a passion for the sport.<br/><br/>

                   He made his debut for the South African cricket team in 2004 against England. He initially played as a wicketkeeper-batsman, but his outstanding fielding abilities soon saw him become a specialist batsman.</p>
            </div>
        </div>

        <div className='career'>
            <div className='career-left'>
                <h3>Career Highlights</h3>
                <p>AB de Villiers has had a remarkable career that spanned over 14 years. He has represented South Africa in 114 Test matches, 228 One Day Internationals (ODIs), and 78 Twenty20 Internationals (T20Is). He has scored more than 20,000 international runs and has taken over 500 catches.<br/><br/>
                AB de Villiers was also an integral part of the Royal Challengers Bangalore team in the Indian Premier League (IPL). He scored 4,395 runs in 154 matches for the team and was known for his ability to turn games on their head with his batting.</p>

            </div>
            <div className='career-right'><img src='Career.jpeg'/></div>
        </div>

        <div className='highlights'>
            <h3>Some of his career highlights include:</h3>
            <p><ul><li>Fastest 50, 100, and 150 in ODI cricket</li><br/>
                <li>Record for most consecutive innings without getting out in ODIs</li><br/>
                <li>Only batsman to score a century and take 10 catches in a single Test match</li><br/>
                <li>Highest individual score by a South African in Test cricket (278*)</li><br/>
                <li>Second-highest individual score by a South African in ODI cricket (176)</li><br/>
                <li>ICC ODI Player of the Year in 2010, 2014, and 2015</li><br/>
                <li>Named as one of Wisden's Cricketers of the Year in 2014</li></ul></p>

        </div>

          <div className='charity'>
            <div className='charity-left'>
              <h3>Charitable Works</h3>
              <p><ul>
                <li><u>Wildlife conservation:</u> AB de Villiers has worked with the Endangered Wildlife Trust to raise awareness and funds for conservation projects, and has also been involved in rhino conservation efforts.</li><br/>

                    <li><u>Children's education:</u> De Villiers has been a strong advocate for children's education, particularly in South Africa. He has supported initiatives aimed at improving access to education for underprivileged children, and has also donated money and resources to schools in need.</li><br/>

                   <li><u>Health and wellness:</u> De Villiers has been involved in several initiatives aimed at promoting health and wellness, both in South Africa and abroad. He has supported campaigns to raise awareness about mental health issues, and has also worked with organizations focused on improving access to healthcare services for disadvantaged communities.</li>
                </ul></p>
            </div>
             <div className='charity-right'><img src='Charity.jpeg'/></div>
          </div>

           <div className='retirement'>
            <div className='retirement-left'><img src='Retirement.jpeg'/></div>
            <div className='retirement-right'>
                <h3>Retirement</h3>
                <p>In May 2018, AB de Villiers announced his retirement from international cricket, citing fatigue and a desire to spend more time with his family. His retirement was met with sadness and disappointment from cricket fans around the world who had enjoyed watching him play.<br/><br/>

                    Despite retiring from international cricket, AB de Villiers has continued to play in various T20 leagues around the world. He is currently playing for the Lahore Qalandars in the Pakistan Super League.</p>
            </div>
        </div>
    </div>
  )
}

export default Tribute
