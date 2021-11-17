import {Page, PageBody, Preview} from '../components/styled/PageElements';

function UserDataDeletion() {
  return (
    <Page>
        <PageBody>
          <h1>User data deletion</h1>

          <p>You can request deletion of your personal user data at any time by sending an email to dimitar.i.kostov@gmail.com with following attributes:</p>

          <Preview>Subject: Personal user data deletion request
              <br />
              Content:
              <br />
              To whom it may concern,
              <br />
              This notice is to inform you that I would like to have my personal data deleted from your records. My contact information is as follows:
              <br />

              Full Legal Name: [fill your name here]
              <br />

              Email: [fill your email here]
              <br />

              The reason I am requesting deletion of my personal data is as follows: consent is being revoked for personal data processing.
              <br />
              The information that I am specifically aware of, that you process or retain, is as follows:
              <br />

              [fill here the personal data you are aware that the site is collecting e.g. email, first name, etc.]
              <br />

              If you process other personal data that belongs to me, which I may not be aware of, please consider this request to apply to that data, as well. 
              <br />
              I would like all of my personal data deleted from your systems.
              <br />
              Please respond in writing to confirm that my request has been honored.
              <br />

              Sincerely,
              <br />
              [fill your name here]
          </Preview>
      </PageBody>
    </Page>
  );
}

export default UserDataDeletion;
