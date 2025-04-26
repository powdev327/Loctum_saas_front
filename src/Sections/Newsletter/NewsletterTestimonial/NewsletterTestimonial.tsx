import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NewsletterTestimonialStyle from "./NewsletterTestimonial.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import g2Icon from "../../../assets/images/newslater/g2.svg";
import trustpilotIcon from "../../../assets/images/newslater/tp.svg";
import twitterIcon from "../../../assets/images/newslater/tw.svg";
import youtubeIcon from "../../../assets/images/newslater/yt.svg";
import Avater1 from "../../../assets/images/newslater/avater1.png";
import Avater2 from "../../../assets/images/newslater/avater2.png";
import Avater3 from "../../../assets/images/newslater/avater3.png";
import G2Small from "../../../assets/images/newslater/g2-small.svg";
import TpSmall from "../../../assets/images/newslater/tp-small.svg";
import TwSmall from "../../../assets/images/newslater/tw-small.svg";
import YtSmall from "../../../assets/images/newslater/yt-small.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const NewsletterTestimonial = () => {
  return (
    <NewsletterTestimonialStyle className="newsletter-testmonial-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <SectionTitle
          title="Trusted by million of users"
          subtitle="Testimonials"
          alignment="center"
          titleMaxW="410px"
          titleMargin="auto"
        />
        </ScrollAnimate>
        <Tabs className="newsletter-testmonial-tab">
          <ScrollAnimate delay={250}>
          <div className="newsletter-testmonial-tab-btns">
            <TabList>
              <Tab>
                <button className="testmonialTablinks">
                  <img src={g2Icon} alt="icon" />
                  G2 Review 4.8
                </button>
              </Tab>
              <Tab>
                <button className="testmonialTablinks">
                  <img src={trustpilotIcon} alt="icon" />
                  Trustpilot 4.9
                </button>
              </Tab>
              <Tab>
                <button className="testmonialTablinks">
                  <img src={twitterIcon} alt="icon" />
                  Twitter
                </button>
              </Tab>
              <Tab>
                <button className="testmonialTablinks">
                  <img src={youtubeIcon} alt="icon" />
                  Youtube
                </button>
              </Tab>
            </TabList>
          </div>
          </ScrollAnimate>
          <ScrollAnimate delay={200}>
          <div className="newsletter-testmonial-tab-content">
            <TabPanel className="testmonialTabcontent">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater1} alt="img" />
                      </div>
                      <p>
                        Corel Den <span>CO. Arterry</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      We use as filler text for layouts, non-readability is of
                      great importancebut because those who do not know how to
                      pursue pleasure
                      <span className="highlignt">
                        rationally encounter consequences
                      </span>
                      that are pleasure rationally encounter ❤️ ❤️
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={G2Small} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater1} alt="img" />
                      </div>
                      <p>
                        Leo Quode <span>CEO. Expresso Ltd.</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      Making this the first true 😍 generator on the Internet.
                      It uses a dictionary of over 200 Latin words, combined
                      with a handful of model sentence structures, to generate
                      👏👏
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={G2Small} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater2} alt="img" />
                      </div>
                      <p>
                        Aron French<span>Director. Tech Ton</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      The best <a href="#">@staco</a> is there anyone who loves
                      or pursues or desires to obtain pain of itself, because it
                      is pain but because
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={G2Small} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater3} alt="img" />
                      </div>
                      <p>
                        Aron French<span>Director. Tech Ton</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      Very denounce with righteous indignation and dislike men
                      who are so beguiled and
                      <span className="highlignt">
                        demoralized by the charms
                      </span>
                      of pleasure of the moment, so blinded by desire encounter
                      🥰
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={G2Small} alt="logo" />
                    </a>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="testmonialTabcontent">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater1} alt="img" />
                      </div>
                      <p>
                        Leo Quode <span>CEO. Expresso Ltd.</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      Making this the first true 😍 generator on the Internet.
                      It uses a dictionary of over 200 Latin words, combined
                      with a handful of model sentence structures, to generate
                      👏👏
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={TpSmall} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater2} alt="img" />
                      </div>
                      <p>
                        Aron French<span>Director. Tech Ton</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      The best <a href="#">@staco</a> is there anyone who loves
                      or pursues or desires to obtain pain of itself, because it
                      is pain but because
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={TpSmall} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater3} alt="img" />
                      </div>
                      <p>
                        Aron French<span>Director. Tech Ton</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      Very denounce with righteous indignation and dislike men
                      who are so beguiled and
                      <span className="highlignt">
                        demoralized by the charms
                      </span>
                      of pleasure of the moment, so blinded by desire encounter
                      🥰
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={TpSmall} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater1} alt="img" />
                      </div>
                      <p>
                        Corel Den <span>CO. Arterry</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      We use as filler text for layouts, non-readability is of
                      great importancebut because those who do not know how to
                      pursue pleasure
                      <span className="highlignt">
                        rationally encounter consequences
                      </span>
                      that are pleasure rationally encounter ❤️ ❤️
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={TpSmall} alt="logo" />
                    </a>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="testmonialTabcontent">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater2} alt="img" />
                      </div>
                      <p>
                        Aron French<span>Director. Tech Ton</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      The best <a href="#">@staco</a> is there anyone who loves
                      or pursues or desires to obtain pain of itself, because it
                      is pain but because
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={TwSmall} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater3} alt="img" />
                      </div>
                      <p>
                        Aron French<span>Director. Tech Ton</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      Very denounce with righteous indignation and dislike men
                      who are so beguiled and
                      <span className="highlignt">
                        demoralized by the charms
                      </span>
                      of pleasure of the moment, so blinded by desire encounter
                      🥰
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={TwSmall} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater1} alt="img" />
                      </div>
                      <p>
                        Corel Den <span>CO. Arterry</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      We use as filler text for layouts, non-readability is of
                      great importancebut because those who do not know how to
                      pursue pleasure
                      <span className="highlignt">
                        rationally encounter consequences
                      </span>
                      that are pleasure rationally encounter ❤️ ❤️
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={TwSmall} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater1} alt="img" />
                      </div>
                      <p>
                        Leo Quode <span>CEO. Expresso Ltd.</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      Making this the first true 😍 generator on the Internet.
                      It uses a dictionary of over 200 Latin words, combined
                      with a handful of model sentence structures, to generate
                      👏👏
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={TwSmall} alt="logo" />
                    </a>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="testmonialTabcontent">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater3} alt="img" />
                      </div>
                      <p>
                        Aron French<span>Director. Tech Ton</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      Very denounce with righteous indignation and dislike men
                      who are so beguiled and
                      <span className="highlignt">
                        demoralized by the charms
                      </span>
                      of pleasure of the moment, so blinded by desire encounter
                      🥰
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={YtSmall} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater1} alt="img" />
                      </div>
                      <p>
                        Corel Den <span>CO. Arterry</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      We use as filler text for layouts, non-readability is of
                      great importancebut because those who do not know how to
                      pursue pleasure
                      <span className="highlignt">
                        rationally encounter consequences
                      </span>
                      that are pleasure rationally encounter ❤️ ❤️
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={YtSmall} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater1} alt="img" />
                      </div>
                      <p>
                        Leo Quode <span>CEO. Expresso Ltd.</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      Making this the first true 😍 generator on the Internet.
                      It uses a dictionary of over 200 Latin words, combined
                      with a handful of model sentence structures, to generate
                      👏👏
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={YtSmall} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="newsletter-testmonial-card">
                    <div className="testmonial-people">
                      <div className="textmonial-img">
                        <img src={Avater2} alt="img" />
                      </div>
                      <p>
                        Aron French<span>Director. Tech Ton</span>
                      </p>
                    </div>
                    <p className="card-pragraph">
                      The best <a href="#">@staco</a> is there anyone who loves
                      or pursues or desires to obtain pain of itself, because it
                      is pain but because
                    </p>
                    <a href="#" className="card-gfooter-link">
                      View on
                      <img src={YtSmall} alt="logo" />
                    </a>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
          </ScrollAnimate>
        </Tabs>
      </div>
    </NewsletterTestimonialStyle>
  );
};

export default NewsletterTestimonial;
