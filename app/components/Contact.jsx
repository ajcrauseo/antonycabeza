import { SectionWrapper } from '../hoc';

import { ContactForm } from '.';

const Contact = ({
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID,
  EMAIL_JS_PUBLIC_KEY,
}) => {
  return (
    <SectionWrapper>
      <span className='hash-span' id='contact'>
        &nbsp;
      </span>

      <ContactForm
        EMAIL_JS_SERVICE_ID={EMAIL_JS_SERVICE_ID}
        EMAIL_JS_TEMPLATE_ID={EMAIL_JS_TEMPLATE_ID}
        EMAIL_JS_PUBLIC_KEY={EMAIL_JS_PUBLIC_KEY}
      />
    </SectionWrapper>
  );
};

export default Contact;
