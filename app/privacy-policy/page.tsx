import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";

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
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your privacy matters to us. This policy explains how we handle the information you share with us."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]}
      />

      <section className="section">
        <div className="container-wide max-w-3xl prose-brand">
          <p className="text-sm text-ink-muted">Last updated: January 2026</p>

          <p>
            At {site.name} (“we”, “us”, “our”), we respect your privacy and are committed to protecting the
            personal information you share with us. This Privacy Policy explains what information we collect, how
            we use it, and the choices you have.
          </p>

          <h2>Information We Collect</h2>
          <p>When you contact us or submit an enquiry through our website, we may collect:</p>
          <ul>
            <li><Check /> Your name and contact details (phone number and email address).</li>
            <li><Check /> Your business or location details, if you provide them.</li>
            <li><Check /> The content of your enquiry or message.</li>
            <li><Check /> Basic technical information such as browser type and pages visited.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li><Check /> Respond to your enquiries, quotes and support requests.</li>
            <li><Check /> Process and fulfil orders or distributorship applications.</li>
            <li><Check /> Improve our products, website and customer service.</li>
            <li><Check /> Send you relevant updates, only where you have expressed interest.</li>
          </ul>

          <h2>Sharing of Information</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share information only with
            trusted service providers who help us operate our business, and only to the extent necessary — or
            where required by law.
          </p>

          <h2>WhatsApp & Communication</h2>
          <p>
            Our enquiry forms may open a pre-filled message in WhatsApp for your convenience. When you send that
            message, your communication is handled according to WhatsApp's own privacy terms. You are always in
            control of what you send.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect the information you share with us against unauthorised access,
            loss or misuse. However, no method of transmission over the internet is completely secure.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use basic cookies and similar technologies to improve your browsing experience and
            understand how the site is used. You can control cookies through your browser settings.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may contact us at any time to ask what information we hold about you, to correct it, or to request
            its deletion. We will respond to reasonable requests promptly.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand-blue">{site.email}</a> or call{" "}
            <a href={`tel:${site.phoneIntl}`} className="font-semibold text-brand-blue">{site.phoneDisplay}</a>.
            Our address is {site.address.full}.
          </p>
        </div>
      </section>
    </>
  );
}

function Check() {
  return <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />;
}
