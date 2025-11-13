import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12">
  <h1 className="text-3xl font-bold mb-6 text-black pt-20">Privacy Policy</h1>

      <p className="text-gray-700 mb-2 font-medium">Effective Date: October 29, 2025</p>
      <p className="text-gray-700 mb-6">Website: <a href="https://www.namariqgroup.com" className="text-primary hover:underline">www.namariqgroup.com</a></p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">1. Introduction</h2>
        <p className="text-gray-700">Al Namariq Group (“we”, “our”, or “us”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">2. Information We Collect</h2>
        <p className="text-gray-700">We may collect the following types of data:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Personal Information:</strong> Name, email address, phone number, company name, job title, etc.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent on the website, and navigation paths.</li>
          <li><strong>Business Data:</strong> Inquiries related to our products, services, or quotations.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">3. How We Use Your Information</h2>
        <p className="text-gray-700">We use your information for the following purposes:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>To provide and improve our products and services.</li>
          <li>To respond to your inquiries or requests.</li>
          <li>To send business proposals, quotations, or updates.</li>
          <li>To comply with applicable UAE laws (such as VAT and Corporate Tax requirements).</li>
          <li>To enhance website functionality and user experience.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">4. Data Protection &amp; Security</h2>
        <p className="text-gray-700">We implement reasonable technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse. Access to personal data is restricted to authorized employees only.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">5. Sharing of Information</h2>
        <p className="text-gray-700">We do not sell or rent your data. We may share limited information with:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Affiliated Divisions:</strong> For business or service-related coordination.</li>
          <li><strong>Service Providers:</strong> Such as hosting, analytics, or email marketing partners.</li>
          <li><strong>Legal Authorities:</strong> When required under UAE law or by court order.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">6. Cookies</h2>
        <p className="text-gray-700">Our website uses cookies to improve user experience and website performance. You can manage or disable cookies in your browser settings.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">7. Third-Party Links</h2>
        <p className="text-gray-700">Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">8. Your Rights</h2>
        <p className="text-gray-700">You have the right to access, correct, or delete your personal data by contacting us at <a href="mailto:info@namariqgroup.com" className="text-primary hover:underline">info@namariqgroup.com</a>.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">9. Contact Us</h2>
        <p className="text-gray-700">If you have any questions regarding this Privacy Policy, please contact:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Al Namariq Group</li>
          <li>Email: <a href="mailto:info@namariqgroup.com" className="text-primary hover:underline">info@namariqgroup.com</a></li>
          <li>Phone: +971 6 748 2731</li>
          <li>Address: Ajman, United Arab Emirates</li>
        </ul>
      </section>

      <div className="mt-8">
        <Link href="/" className="text-primary hover:underline">Return to Home</Link>
      </div>
    </main>
  )
}
