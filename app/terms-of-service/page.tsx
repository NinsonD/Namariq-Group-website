import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-black pt-20">Terms of Service</h1>

      <p className="text-gray-700 mb-2 font-medium">Effective Date: October 29, 2025</p>
      <p className="text-gray-700 mb-6">Website: <a href="https://www.namariqgroup.com" className="text-primary hover:underline">www.namariqgroup.com</a></p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">1. Acceptance of Terms</h2>
        <p className="text-gray-700">By accessing or using this website, you agree to be bound by these Terms of Service and all applicable laws. If you do not agree, please do not use our website.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">2. Company Overview</h2>
        <p className="text-gray-700">Al Namariq Group operates through multiple divisions, including:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Al Namariq Building Materials Trading LLC</li>
          <li>Al Namariq IT Solutions</li>
          <li>Skyline Décor</li>
          <li>Carewell Medical Center</li>
          <li>Al Namariq Water Pumps</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">3. Use of Website</h2>
        <p className="text-gray-700">You agree to use this website only for lawful purposes and not to:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Interfere with its operation or security.</li>
          <li>Upload harmful code, spam, or unauthorized content.</li>
          <li>Misrepresent your identity or affiliation with Al Namariq Group.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">4. Intellectual Property</h2>
        <p className="text-gray-700">All website content — including text, images, logos, graphics, and software — is the property of Al Namariq Group and protected under UAE and international copyright laws. Unauthorized use or duplication is strictly prohibited.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">5. Product &amp; Service Information</h2>
        <p className="text-gray-700">We strive to ensure that all product and service information is accurate and up-to-date. However, we reserve the right to modify or discontinue any part of the website without notice.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">6. Limitation of Liability</h2>
        <p className="text-gray-700">Al Namariq Group shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website, even if advised of such damages.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">7. Links to Third Parties</h2>
        <p className="text-gray-700">Our website may contain links to external sites not operated by us. We are not responsible for the content or practices of these external sites.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">8. Changes to Terms</h2>
        <p className="text-gray-700">We may revise these Terms of Service at any time. Continued use of the website after any changes constitutes acceptance of the new terms.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">9. Governing Law</h2>
        <p className="text-gray-700">These Terms are governed by the laws of the United Arab Emirates, and any disputes shall be resolved in the courts of Ajman, UAE.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">10. Contact Information</h2>
        <p className="text-gray-700">For questions about these Terms, please contact:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Al Namariq Group</li>
          <li>Email: <a href="mailto:info@namariqgroup.com" className="text-primary hover:underline">info@namariqgroup.com</a></li>
        </ul>
      </section>

      <div className="mt-8">
        <Link href="/" className="text-primary hover:underline">Return to Home</Link>
      </div>
    </main>
  )
}
