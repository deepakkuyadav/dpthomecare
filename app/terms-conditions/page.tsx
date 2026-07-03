import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { T } from "@/lib/lang";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: `The terms and conditions governing the use of the ${site.name} website and services.`,
  path: "/terms-conditions",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms & Conditions", path: "/terms-conditions" }])} />
      <PageHero
        eyebrow={<T en="Legal" hi="कानूनी" />}
        title={<T en="Terms & Conditions" hi="नियम व शर्तें" />}
        subtitle={
          <T
            en="Please read these terms carefully. By using our website, you agree to the conditions set out below."
            hi="कृपया इन शर्तों को ध्यान से पढ़ें। हमारी वेबसाइट का उपयोग करके आप नीचे दी गई शर्तों से सहमत होते हैं।"
          />
        }
        breadcrumbs={[
          { name: "Home", nameHi: "होम", path: "/" },
          { name: "Terms & Conditions", nameHi: "नियम व शर्तें", path: "/terms-conditions" },
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
                  Welcome to {site.name}. These Terms &amp; Conditions govern your use of our website and the services we
                  offer. By accessing or using this website, you accept these terms in full.
                </>
              }
              hi={
                <>
                  {site.name} में आपका स्वागत है। ये नियम व शर्तें हमारी वेबसाइट और हमारी सेवाओं के आपके उपयोग को
                  नियंत्रित करती हैं। इस वेबसाइट का उपयोग करके आप इन शर्तों को पूर्ण रूप से स्वीकार करते हैं।
                </>
              }
            />
          </p>

          <h2><T en="Use of Our Website" hi="हमारी वेबसाइट का उपयोग" /></h2>
          <p>
            <T
              en={
                <>
                  You may use our website for lawful purposes only. You agree not to misuse the site, attempt to gain
                  unauthorised access, or use it in any way that could damage or impair its availability.
                </>
              }
              hi={
                <>
                  आप हमारी वेबसाइट का उपयोग केवल वैध उद्देश्यों के लिए कर सकते हैं। आप सहमत हैं कि आप साइट का
                  दुरुपयोग नहीं करेंगे, अनधिकृत पहुँच का प्रयास नहीं करेंगे, या इसे किसी ऐसे तरीके से उपयोग नहीं करेंगे
                  जिससे इसकी उपलब्धता को नुकसान पहुँचे।
                </>
              }
            />
          </p>

          <h2><T en="Product Information" hi="उत्पाद जानकारी" /></h2>
          <p>
            <T
              en={
                <>
                  We make every effort to describe our products accurately, including their features, usage and packing
                  sizes. However, product specifications, fragrances and packaging may be updated or improved over time.
                  Images are for representation and may differ slightly from the actual product.
                </>
              }
              hi={
                <>
                  हम अपने उत्पादों — उनकी विशेषताओं, उपयोग और पैकिंग साइज़ — का सटीक विवरण देने का पूरा प्रयास करते
                  हैं। हालाँकि, समय के साथ उत्पाद की विशिष्टताएँ, सुगंध और पैकेजिंग अपडेट या बेहतर की जा सकती हैं।
                  चित्र केवल प्रतिनिधित्व के लिए हैं और वास्तविक उत्पाद से थोड़े अलग हो सकते हैं।
                </>
              }
            />
          </p>

          <h2><T en="Enquiries, Orders & Pricing" hi="पूछताछ, ऑर्डर और मूल्य" /></h2>
          <ul>
            <li><Dot /> <T en="Submitting an enquiry does not constitute a confirmed order." hi="पूछताछ भेजना पुष्टि किया हुआ ऑर्डर नहीं माना जाता।" /></li>
            <li><Dot /> <T en="Prices, minimum order quantities and availability are confirmed by our team at the time of order." hi="मूल्य, न्यूनतम ऑर्डर मात्रा और उपलब्धता की पुष्टि ऑर्डर के समय हमारी टीम द्वारा की जाती है।" /></li>
            <li><Dot /> <T en="Bulk and distributor pricing is subject to separate discussion and agreement." hi="थोक और डिस्ट्रीब्यूटर मूल्य अलग से चर्चा और सहमति के अधीन हैं।" /></li>
            <li><Dot /> <T en="We reserve the right to accept or decline any enquiry or order at our discretion." hi="हम अपने विवेक से किसी भी पूछताछ या ऑर्डर को स्वीकार या अस्वीकार करने का अधिकार सुरक्षित रखते हैं।" /></li>
          </ul>

          <h2><T en="Distributor & Dealer Applications" hi="डिस्ट्रीब्यूटर और डीलर आवेदन" /></h2>
          <p>
            <T
              en={
                <>
                  Applications to become a distributor or dealer are reviewed on a case-by-case basis. Submitting an
                  application does not guarantee approval. Partnership terms, territories and investment requirements are
                  agreed separately in writing.
                </>
              }
              hi={
                <>
                  डिस्ट्रीब्यूटर या डीलर बनने के आवेदनों की समीक्षा प्रत्येक मामले के आधार पर की जाती है। आवेदन जमा
                  करना स्वीकृति की गारंटी नहीं है। साझेदारी की शर्तें, क्षेत्र और निवेश संबंधी आवश्यकताएँ अलग से लिखित
                  रूप में तय की जाती हैं।
                </>
              }
            />
          </p>

          <h2><T en="Intellectual Property" hi="बौद्धिक संपदा" /></h2>
          <p>
            <T
              en={
                <>
                  All content on this website — including the {site.name} name, logo, text, product descriptions and
                  design — is our property or used with permission and is protected by applicable laws. You may not
                  reproduce or reuse it without our written consent.
                </>
              }
              hi={
                <>
                  इस वेबसाइट की सभी सामग्री — जिसमें {site.name} नाम, लोगो, टेक्स्ट, उत्पाद विवरण और डिज़ाइन शामिल हैं
                  — हमारी संपत्ति है या अनुमति से उपयोग की गई है, और लागू कानूनों द्वारा संरक्षित है। हमारी लिखित
                  सहमति के बिना आप इसे पुनः प्रस्तुत या पुनः उपयोग नहीं कर सकते।
                </>
              }
            />
          </p>

          <h2><T en="Third-Party Links" hi="तृतीय-पक्ष लिंक" /></h2>
          <p>
            <T
              en={
                <>
                  Our website may contain links to third-party websites or services (such as social media or WhatsApp).
                  We are not responsible for the content or practices of those third parties.
                </>
              }
              hi={
                <>
                  हमारी वेबसाइट पर तृतीय-पक्ष वेबसाइटों या सेवाओं (जैसे सोशल मीडिया या WhatsApp) के लिंक हो सकते हैं।
                  उन तृतीय पक्षों की सामग्री या व्यवहार के लिए हम ज़िम्मेदार नहीं हैं।
                </>
              }
            />
          </p>

          <h2><T en="Limitation of Liability" hi="दायित्व की सीमा" /></h2>
          <p>
            <T
              en={
                <>
                  Our products should be used strictly as directed on their labels and in the usage instructions
                  provided. We are not liable for damage or injury resulting from misuse, improper storage, or failure to
                  follow safety instructions.
                </>
              }
              hi={
                <>
                  हमारे उत्पादों का उपयोग केवल उनके लेबल और दिए गए उपयोग निर्देशों के अनुसार ही किया जाना चाहिए।
                  दुरुपयोग, अनुचित भंडारण, या सुरक्षा निर्देशों का पालन न करने से होने वाले किसी नुकसान या चोट के लिए
                  हम उत्तरदायी नहीं हैं।
                </>
              }
            />
          </p>

          <h2><T en="Changes to These Terms" hi="इन शर्तों में बदलाव" /></h2>
          <p>
            <T
              en={
                <>
                  We may update these Terms &amp; Conditions from time to time. Continued use of the website after changes
                  constitutes acceptance of the revised terms.
                </>
              }
              hi={
                <>
                  हम समय-समय पर इन नियम व शर्तों को अपडेट कर सकते हैं। बदलाव के बाद वेबसाइट का निरंतर उपयोग
                  संशोधित शर्तों की स्वीकृति माना जाएगा।
                </>
              }
            />
          </p>

          <h2><T en="Contact Us" hi="हमसे संपर्क करें" /></h2>
          <p>
            <T
              en={
                <>
                  For any questions regarding these terms, contact us at{" "}
                  <a href={`mailto:${site.email}`} className="font-semibold text-brand-blue">{site.email}</a> or call{" "}
                  <a href={`tel:${site.phoneIntl}`} className="font-semibold text-brand-blue">{site.phoneDisplay}</a>.
                </>
              }
              hi={
                <>
                  इन शर्तों से संबंधित किसी भी प्रश्न के लिए हमें{" "}
                  <a href={`mailto:${site.email}`} className="font-semibold text-brand-blue">{site.email}</a> पर लिखें या{" "}
                  <a href={`tel:${site.phoneIntl}`} className="font-semibold text-brand-blue">{site.phoneDisplay}</a> पर
                  कॉल करें।
                </>
              }
            />
          </p>
        </div>
      </section>
    </>
  );
}

function Dot() {
  return <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />;
}
