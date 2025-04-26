import UserFeedbackStyle from "./UserFeedback.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {
  feedbackDataColumn1,
  feedbackDataColumn2,
  feedbackDataColumn3,
} from "../../../assets/data/CryptoWallet/UserFeedback";

import playIcon from "../../../assets/images/crypto/play.svg";
import pauseIcon from "../../../assets/images/crypto/pause.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const UserFeedback = () => {
  const handleFeedbackStopBtnClick = () => {
    const feedbackStopBtns = document.querySelectorAll(".feedback-stop-btn");
    const feedbackCardLists = document.querySelectorAll(".feedback-card-list");

    feedbackStopBtns.forEach((btn, index) => {
      btn.classList.toggle("active");
      feedbackCardLists[index].classList.toggle("active");
    });
  };

  return (
    <UserFeedbackStyle className="feedbacks-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <SectionTitle
            title="Customer love us to keep their asset safe and secure"
            subtitle="User 😍 Feedbacks"
            alignment="center"
            titleMaxW="650px"
            titleMargin="auto"
            parentClass="crypto md-mb-0"
          />
          <div className="layer-1">
            <button
              className="feedback-stop-btn"
              onClick={handleFeedbackStopBtnClick}
            >
              <img src={playIcon} alt="play icon" className="play" />
              <img src={pauseIcon} alt="pause icon" className="pause" />
            </button>
          </div>
          <div className="layer-2" />
          <div className="feedback-content">
            <div className="row">
              <div className="col-md-4">
                <div className="feedback-card-list up">
                  {feedbackDataColumn1.map((feedback, index) => (
                    <div className="feedback-card" key={index}>
                      <div className="people">
                        <div className="people-img">
                          <img src={feedback.image} alt="img" />
                        </div>
                        <div className="people-text">
                          <p>
                            {feedback.name} <span>{feedback.company}</span>
                          </p>
                        </div>
                      </div>
                      <p>{feedback.message}</p>
                    </div>
                  ))}
                </div>
                <div className="feedback-card-list up">
                  {feedbackDataColumn1.map((feedback, index) => (
                    <div className="feedback-card" key={index}>
                      <div className="people">
                        <div className="people-img">
                          <img src={feedback.image} alt="img" />
                        </div>
                        <div className="people-text">
                          <p>
                            {feedback.name} <span>{feedback.company}</span>
                          </p>
                        </div>
                      </div>
                      <p>{feedback.message}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-4">
                <div className="feedback-card-list down">
                  {feedbackDataColumn2.map((feedback, index) => (
                    <div className="feedback-card" key={index}>
                      <div className="people">
                        <div className="people-img">
                          <img src={feedback.image} alt="img" />
                        </div>
                        <div className="people-text">
                          <p>
                            {feedback.name} <span>{feedback.company}</span>
                          </p>
                        </div>
                      </div>
                      <p>{feedback.message}</p>
                    </div>
                  ))}
                </div>
                <div className="feedback-card-list down">
                  {feedbackDataColumn2.map((feedback, index) => (
                    <div className="feedback-card" key={index}>
                      <div className="people">
                        <div className="people-img">
                          <img src={feedback.image} alt="img" />
                        </div>
                        <div className="people-text">
                          <p>
                            {feedback.name} <span>{feedback.company}</span>
                          </p>
                        </div>
                      </div>
                      <p>{feedback.message}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-4">
                <div className="feedback-card-list up">
                  {feedbackDataColumn3.map((feedback, index) => (
                    <div className="feedback-card" key={index}>
                      <div className="people">
                        <div className="people-img">
                          <img src={feedback.image} alt="img" />
                        </div>
                        <div className="people-text">
                          <p>
                            {feedback.name} <span>{feedback.company}</span>
                          </p>
                        </div>
                      </div>
                      <p>{feedback.message}</p>
                    </div>
                  ))}
                </div>
                <div className="feedback-card-list up">
                  {feedbackDataColumn3.map((feedback, index) => (
                    <div className="feedback-card" key={index}>
                      <div className="people">
                        <div className="people-img">
                          <img src={feedback.image} alt="img" />
                        </div>
                        <div className="people-text">
                          <p>
                            {feedback.name} <span>{feedback.company}</span>
                          </p>
                        </div>
                      </div>
                      <p>{feedback.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>

      </div>
    </UserFeedbackStyle>
  );
};

export default UserFeedback;
