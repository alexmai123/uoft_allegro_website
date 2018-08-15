import React from 'react';
import moment from 'moment';
import * as _ from 'underscore';

const dummytitle = 'Some multi line \n Title\n with like\n a lot of lines';
const dummydate = '2017-03-21';
const dummytext = 'Lorem ipsum dolor sit amet, ex pri viris lobortis, eum hinc numquam id, et euismod abhorreant eos. Eu propriae corrumpit mediocritatem eum, inani latine epicurei ad vis. Ut per quis graecis hendrerit, in pri civibus repudiandae, eruditi vivendo lobortis et his. Ut atqui audire epicurei sea, cum error soluta equidem at, est hinc voluptua ei.';
const imageURL = "../img/pic01.jpg";

const EventPost = ({
  title = dummytitle,
  created = dummydate,
  text = dummytext,
  image = imageURL,
  isMainPost = false
},b, c) => {
  const header = _.map(title.split('\n'), d => <div className="inline">{d}<br /></div>);
  console.log(b,c);
  return (
    <article className={isMainPost && "post featured"}>
      <header className={isMainPost && 'major'}>
        <span className="date">{moment(created).calendar()}</span>
        <h2><a href="#main">{header}</a></h2>
        <p>{text}</p>
      </header>
      <a href="#" className="image main"><img src={image} alt="" /></a>
      <ul className="actions">
        <li><a href="#" className="button big" onClick={() => {b.push('')}}>Full Story</a></li>
      </ul>
    </article>
  )
};

let a = 'abc/n asd'.split('/n')

export default EventPost;
