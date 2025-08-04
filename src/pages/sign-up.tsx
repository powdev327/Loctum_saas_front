import Layout from "../Layout";
import Signup from "../Sections/Authentication/Signup";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle="QuickLocum - Sign Up">
      <Signup />
    </Layout>
  );
};

export default SignUp;
