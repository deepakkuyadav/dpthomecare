import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";

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
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully. By using our website, you agree to the conditions set out below."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Terms & Conditions", path: "/terms-conditions" }]}
      />

      <section className="section">
        <div className="container-wide max-w-3xl prose-brand">
          <p className="text-sm text-ink-muted">Last updated: January 2026</p>

          <p>
            Welcome to {site.name}. These Terms &amp; Conditions govern your use of our website and the services we
            offer. By accessing or using this website, you accept these terms in full.
          </p>

          <h2>Use of Our Website</h2>
          <p>
            You may use our website for lawful purposes only. You agree not to misuse the site, attempt to gain
            unauthorised access, or use it in any way that could damage or impair its availability.
          </p>

          <h2>Product Information</h2>
          <p>
            We make every effort to describe our products accurately, including their features, usage and packing
            sizes. However, product specifications, fragrances and packaging may be updated or improved over time.
            Images are for representation and may differ slightly from the actual product.
          </p>

          <h2>Enquiries, Orders & Pricing</h2>
          <ul>
            <li><Dot /> Submitting an enquiry does not constitute a confirmed order.</li>
            <li><Dot /> Prices, minimum order quantities and availability are confirmed by our team at the time of order.</li>
            <li><Dot /> Bulk and distributor pricing is subject to separate discussion and agreement.</li>
            <li><Dot /> We reserve the right to accept or decline any enquiry or order at our discretion.</li>
          </ul>

          <h2>Distributor & Dealer Applications</h2>
          <p>
            Applications to become a distributor or dealer are reviewed on a case-by-case basis. Submitting an
            application does not guarantee approval. Partnership terms, territories and investment requirements are
            agreed separately in writing.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website — including the {site.name} name, logo, text, product descriptions and
            design — is our property or used with permission and is protected by applicable laws. You may not
            reproduce or reuse it without our written consent.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services (such as social media or WhatsApp).
            We are not responsible for the content or practices of those third parties.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Our products should be used strictly as directed on their labels and in the usage instructions
            provided. We are not liable for damage or injury resulting from misuse, improper storage, or failure to
            follow safety instructions.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms &amp; Conditions from time to time. Continued use of the website after changes
            constitutes acceptance of the revised terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            For any questions regarding these terms, contact us at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand-blue">{site.email}</a> or call{" "}
            <a href={`tel:${site.phoneIntl}`} className="font-semibold text-brand-blue">{site.phoneDisplay}</a>.
          </p>
        </div>
      </section>
    </>
  );
}

function Dot() {
  return <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />;
}
