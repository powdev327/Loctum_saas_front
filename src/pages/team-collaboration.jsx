import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import TeamBanner from "../Sections/Banner/TeamBanner/TeamBanner";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";
import TeamFaq from "../Sections/TeamCollaboration/TeamFaq/TeamFaq";
import TeamCounter from "../Sections/TeamCollaboration/TeamCounter/TeamCounter";
import MeetVirtually from "../Sections/TeamCollaboration/MeetVirtually/MeetVirtually";
import TeamMainFeature from "../Sections/TeamCollaboration/TeamMainFeature/TeamMainFeature";
import UsefulFeature from "../Sections/TeamCollaboration/UsefulFeature/UsefulFeature";
import TeamBestPricing from "../Sections/TeamCollaboration/TeamBestPricing/TeamBestPricing";
import FooterThree from "../Sections/Footer/FooterThree";

const TeamCollaboration = () => {
  return (
    <Layout pageTitle="QuickLocum - Team Collaboration">
      <Header variant="v3" />
      <TeamBanner />
      <TeamMainFeature />
      <UsefulFeature />
      <TeamCounter />
      <MeetVirtually />
      <TeamBestPricing />
      <TeamFaq />
      <StartMeeting />
      <FooterThree />
    </Layout>
  );
};

export default TeamCollaboration;
