import React from "react";
import Container from "@mui/material/Container";
import { Typography, Divider } from "@mui/material";
import Navbar_Footer from "../container/Navbar_Footer";
import Definitions from "../components/privacy_policy/Definitions";
import Purposes from "../components/privacy_policy/Purposes";
import Sharing_Purposes from "../components/privacy_policy/Sharing_Purposes";

const Privacy_Policy = () => {
  return (
    <Navbar_Footer>
      <div id="privacy-policy">
        <Container maxWidth="md" className="py-10 text-white">
          <Typography variant="h4" className="mb-6 font-bold">
            Privacy Policy
          </Typography>

          <Typography variant="subtitle2" className="mb-4 text-gray-600">
            Last updated: February 14, 2025
          </Typography>

          <div className="space-y-4 text-justify text-sm md:text-base">
            <p>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You...
            </p>

            <p>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy. This Privacy
              Policy has been created with the help of the Privacy Policy
              Generator.
            </p>

            <Divider className="my-4" />

            <h2 className="font-semibold text-lg mt-6">
              Interpretation and Definitions
            </h2>

            <h3 className="font-semibold text-md mt-4">Interpretation</h3>

            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions...
            </p>

            <h3 className="font-semibold text-md mt-4">Definitions</h3>

            <p>For the purposes of this Privacy Policy:</p>

            <Definitions />

            <h2 className="font-semibold text-lg mt-6">
              Collecting and Using Your Personal Data
            </h2>

            <h3 className="font-semibold text-md mt-4">
              Types of Data Collected
            </h3>

            <p>
              <strong>Personal Data</strong>
            </p>

            <p>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information...
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Usage Data</li>
            </ul>

            <p>
              <strong>Usage Data</strong>
            </p>

            <p>
              Usage Data is collected automatically when using the Service...
            </p>

            <h3 className="font-semibold text-md mt-4">
              Use of Your Personal Data
            </h3>

            <p>The Company may use Personal Data for the following purposes:</p>

            <ul className="list-disc pl-5 space-y-2">
              <Purposes />
            </ul>

            <p>
              We may share Your personal information in the following
              situations:
            </p>

            <Sharing_Purposes />

            <h2 className="font-semibold text-lg mt-6">
              Retention of Your Personal Data
            </h2>

            <p>
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies. <br />{" "}
              <br /> The Company will also retain Usage Data for internal
              analysis purposes. Usage Data is generally retained for a shorter
              period of time, except when this data is used to strengthen the
              security or to improve the functionality of Our Service, or We are
              legally obligated to retain this data for longer time periods.
            </p>

            <h2 className="font-semibold text-lg mt-6">
              Transfer of Your Personal Data
            </h2>

            <p>
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction. <br />
              <br /> Your consent to this Privacy Policy followed by Your
              submission of such information represents Your agreement to that
              transfer. <br />
              <br /> The Company will take all steps reasonably necessary to
              ensure that Your data is treated securely and in accordance with
              this Privacy Policy and no transfer of Your Personal Data will
              take place to an organization or a country unless there are
              adequate controls in place including the security of Your data and
              other personal information.
            </p>

            <h2 className="font-semibold text-lg mt-6">
              Delete Your Personal Data
            </h2>

            <p>
              You have the right to delete or request that We assist in deleting
              the Personal Data that We have collected about You. <br />
              <br /> Our Service may give You the ability to delete certain
              information about You from within the Service. <br />
              <br /> You may update, amend, or delete Your information at any
              time by signing in to Your Account, if you have one, and visiting
              the account settings section that allows you to manage Your
              personal information. You may also contact Us to request access
              to, correct, or delete any personal information that You have
              provided to Us. <br />
              <br />
              Please note, however, that We may need to retain certain
              information when we have a legal obligation or lawful basis to do
              so.
            </p>

            <h2 className="font-semibold text-lg mt-6">
              Disclosure of Your Personal Data
            </h2>

            <h3 className="font-semibold text-md mt-4">
              Business Transactions
            </h3>

            <p>
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </p>

            <h3 className="font-semibold text-md mt-4">Law enforcement</h3>

            <p>
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </p>

            <h3 className="font-semibold text-md mt-4">
              Other legal requirements
            </h3>

            <p>
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of the Company</li>
              <li>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li>Protect against legal liability</li>
            </ul>

            <h2 className="font-semibold text-lg mt-6">
              Security of Your Personal Data
            </h2>

            <p>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </p>

            <h2 className="font-semibold text-lg mt-6">Children's Privacy</h2>

            <p>
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers. <br />
              <br />
              If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent's consent before We collect and use that
              information.
            </p>

            <h2 className="font-semibold text-lg mt-6">
              Links to Other Websites
            </h2>

            <p>
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit. <br />
              <br /> We have no control over and assume no responsibility for
              the content, privacy policies or practices of any third party
              sites or services.
            </p>

            <h2 className="font-semibold text-lg mt-6">
              Changes to this Privacy Policy
            </h2>

            <p>
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.{" "}
              <br />
              <br />
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              "Last updated" date at the top of this Privacy Policy. <br />
              <br /> You are advised to review this Privacy Policy periodically
              for any changes. Changes to this Privacy Policy are effective when
              they are posted on this page.
            </p>

            <h2 className="font-semibold text-lg mt-6">Contact Us</h2>

            <p>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>By email: support@moneysmithng.com</li>
            </ul>
          </div>
        </Container>
      </div>
    </Navbar_Footer>
  );
};

export default Privacy_Policy;
