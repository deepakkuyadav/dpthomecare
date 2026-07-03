import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { T } from "@/lib/lang";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Read the privacy policy of ${site.name} — how we collect, use and protect your information when you use our website and services.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }])} />
      <PageHero
        eyebrow={<T en="Legal" hi="कानूनी" />}
        title={<T en="Privacy Policy" hi="गोपनीयता नीति" />}
        subtitle={
          <T
            en="Your privacy matters to us. This policy explains how we handle the information you share with us."
            hi="आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। यह नीति बताती है कि आपके द्वारा साझा की गई जानकारी को हम कैसे संभालते हैं।"
          />
        }
        breadcrumbs={[
          { name: "Home", nameHi: "होम", path: "/" },
          { name: "Privacy Policy", nameHi: "गोपनीयता नीति", path: "/privacy-policy" },
        ]}
      />

      <section className="section">
        <div className="container-wide max-w-3xl prose-brand">
          <p className="text-sm text-ink-muted">
            <T en="Last updated: January 2026" hi="अंतिम अपडेट: जनवरी 2026" />
          </p>

          <p>
            <T
              en={
                <>
                  At {site.name} (“we”, “us”, “our”), we respect your privacy and are committed to protecting the
                  personal information you share with us. This Privacy Policy explains what information we collect, how
                  we use it, and the choices you have.
                </>
              }
              hi={
                <>
                  {site.name} (“हम”, “हमारा”) में हम आपकी गोपनीयता का सम्मान करते हैं और आपके द्वारा साझा की गई
                  व्यक्तिगत जानकारी की सुरक्षा के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि हम कौन-सी जानकारी
                  एकत्र करते हैं, उसका उपयोग कैसे करते हैं, और आपके पास क्या विकल्प हैं।
                </>
              }
            />
          </p>

          <h2><T en="Information We Collect" hi="हम कौन-सी जानकारी एकत्र करते हैं" /></h2>
          <p>
            <T
              en="When you contact us or submit an enquiry through our website, we may collect:"
              hi="जब आप हमसे संपर्क करते हैं या हमारी वेबसाइट के माध्यम से पूछताछ भेजते हैं, तो हम निम्नलिखित जानकारी एकत्र कर सकते हैं:"
            />
          </p>
          <ul>
            <li><Check /> <T en="Your name and contact details (phone number and email address)." hi="आपका नाम और संपर्क विवरण (फ़ोन नंबर और ईमेल पता)।" /></li>
            <li><Check /> <T en="Your business or location details, if you provide them." hi="आपके व्यवसाय या स्थान का विवरण, यदि आप उसे प्रदान करते हैं।" /></li>
            <li><Check /> <T en="The content of your enquiry or message." hi="आपकी पूछताछ या संदेश की सामग्री।" /></li>
            <li><Check /> <T en="Basic technical information such as browser type and pages visited." hi="बुनियादी तकनीकी जानकारी, जैसे ब्राउज़र का प्रकार और देखे गए पेज।" /></li>
          </ul>

          <h2><T en="How We Use Your Information" hi="हम आपकी जानकारी का उपयोग कैसे करते हैं" /></h2>
          <p><T en="We use the information we collect to:" hi="हम एकत्रित जानकारी का उपयोग निम्नलिखित के लिए करते हैं:" /></p>
          <ul>
            <li><Check /> <T en="Respond to your enquiries, quotes and support requests." hi="आपकी पूछताछ, कोटेशन और सहायता अनुरोधों का उत्तर देने के लिए।" /></li>
            <li><Check /> <T en="Process and fulfil orders or distributorship applications." hi="ऑर्डर या डिस्ट्रीब्यूटरशिप आवेदनों को प्रोसेस और पूरा करने के लिए।" /></li>
            <li><Check /> <T en="Improve our products, website and customer service." hi="हमारे उत्पादों, वेबसाइट और ग्राहक सेवा को बेहतर बनाने के लिए।" /></li>
            <li><Check /> <T en="Send you relevant updates, only where you have expressed interest." hi="आपको प्रासंगिक अपडेट भेजने के लिए, केवल तभी जब आपने रुचि व्यक्त की हो।" /></li>
          </ul>

          <h2><T en="Sharing of Information" hi="जानकारी साझा करना" /></h2>
          <p>
            <T
              en={
                <>
                  We do not sell or rent your personal information to third parties. We may share information only with
                  trusted service providers who help us operate our business, and only to the extent necessary — or
                  where required by law.
                </>
              }
              hi={
                <>
                  हम आपकी व्यक्तिगत जानकारी किसी तीसरे पक्ष को बेचते या किराए पर नहीं देते। हम जानकारी केवल उन
                  विश्वसनीय सेवा प्रदाताओं के साथ साझा कर सकते हैं जो हमारे व्यवसाय के संचालन में मदद करते हैं — और वह
                  भी केवल आवश्यक सीमा तक, या जहाँ कानून द्वारा आवश्यक हो।
                </>
              }
            />
          </p>

          <h2><T en="WhatsApp & Communication" hi="WhatsApp और संचार" /></h2>
          <p>
            <T
              en={
                <>
                  Our enquiry forms may open a pre-filled message in WhatsApp for your convenience. When you send that
                  message, your communication is handled according to WhatsApp's own privacy terms. You are always in
                  control of what you send.
                </>
              }
              hi={
                <>
                  आपकी सुविधा के लिए हमारे पूछताछ फ़ॉर्म WhatsApp में पहले से भरा हुआ संदेश खोल सकते हैं। जब आप वह
                  संदेश भेजते हैं, तो आपका संचार WhatsApp की अपनी गोपनीयता शर्तों के अनुसार संभाला जाता है। आप जो
                  भेजते हैं, उस पर नियंत्रण हमेशा आपका रहता है।
                </>
              }
            />
          </p>

          <h2><T en="Data Security" hi="डेटा सुरक्षा" /></h2>
          <p>
            <T
              en={
                <>
                  We take reasonable measures to protect the information you share with us against unauthorised access,
                  loss or misuse. However, no method of transmission over the internet is completely secure.
                </>
              }
              hi={
                <>
                  आपके द्वारा साझा की गई जानकारी को अनधिकृत पहुँच, हानि या दुरुपयोग से बचाने के लिए हम उचित उपाय करते
                  हैं। हालाँकि, इंटरनेट पर डेटा भेजने का कोई भी तरीका पूरी तरह सुरक्षित नहीं होता।
                </>
              }
            />
          </p>

          <h2><T en="Cookies" hi="कुकीज़" /></h2>
          <p>
            <T
              en={
                <>
                  Our website may use basic cookies and similar technologies to improve your browsing experience and
                  understand how the site is used. You can control cookies through your browser settings.
                </>
              }
              hi={
                <>
                  हमारी वेबसाइट आपके ब्राउज़िंग अनुभव को बेहतर बनाने और साइट के उपयोग को समझने के लिए बुनियादी कुकीज़
                  और इसी तरह की तकनीकों का उपयोग कर सकती है। आप अपने ब्राउज़र की सेटिंग्स से कुकीज़ को नियंत्रित कर
                  सकते हैं।
                </>
              }
            />
          </p>

          <h2><T en="Your Rights" hi="आपके अधिकार" /></h2>
          <p>
            <T
              en={
                <>
                  You may contact us at any time to ask what information we hold about you, to correct it, or to request
                  its deletion. We will respond to reasonable requests promptly.
                </>
              }
              hi={
                <>
                  आप किसी भी समय हमसे संपर्क करके यह पूछ सकते हैं कि हमारे पास आपकी कौन-सी जानकारी है, उसे ठीक
                  करवा सकते हैं, या उसे हटाने का अनुरोध कर सकते हैं। हम उचित अनुरोधों का शीघ्र उत्तर देंगे।
                </>
              }
            />
          </p>

          <h2><T en="Contact Us" hi="हमसे संपर्क करें" /></h2>
          <p>
            <T
              en={
                <>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href={`mailto:${site.email}`} className="font-semibold text-brand-blue">{site.email}</a> or call{" "}
                  <a href={`tel:${site.phoneIntl}`} className="font-semibold text-brand-blue">{site.phoneDisplay}</a>.
                  Our address is {site.address.full}.
                </>
              }
              hi={
                <>
                  इस गोपनीयता नीति के बारे में कोई भी प्रश्न हो, तो कृपया हमें{" "}
                  <a href={`mailto:${site.email}`} className="font-semibold text-brand-blue">{site.email}</a> पर लिखें या{" "}
                  <a href={`tel:${site.phoneIntl}`} className="font-semibold text-brand-blue">{site.phoneDisplay}</a> पर
                  कॉल करें। हमारा पता है: {site.address.full}।
                </>
              }
            />
          </p>
        </div>
      </section>
    </>
  );
}

function Check() {
  return <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />;
}
