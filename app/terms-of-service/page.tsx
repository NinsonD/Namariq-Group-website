'use client'

import { useTranslation } from 'react-i18next'

export default function TermsOfService() {
  const { t } = useTranslation('common')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Al Namariq Group of Companies ("we," "our," or "us"),
              you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Al Namariq Group of Companies provides building materials, interior décor, insulation, water pump systems,
              IT solutions, and medical services. Our website serves as an information portal and contact point for our services.
            </p>

            <h2>3. User Responsibilities</h2>
            <h3>3.1 Account Information</h3>
            <p>If you create an account or submit information through our contact forms, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>

            <h3>3.2 Acceptable Use</h3>
            <p>You agree not to use our services to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful or malicious content</li>
              <li>Interfere with the proper functioning of our services</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>

            <h2>4. Intellectual Property Rights</h2>
            <p>
              All content, trademarks, service marks, and materials on our website are owned by or licensed to
              Al Namariq Group of Companies and are protected by copyright and other intellectual property laws.
              You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h2>5. Product and Service Information</h2>
            <p>
              Product specifications, pricing, and availability are subject to change without notice.
              We strive to provide accurate information but cannot guarantee the completeness or accuracy of all details.
              For the most current information, please contact our sales team directly.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Al Namariq Group of Companies shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>

            <h2>7. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Al Namariq Group of Companies from any claims, losses,
              liability, damages, and expenses arising from your use of our services or violation of these terms.
            </p>

            <h2>8. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our services at our sole discretion,
              without prior notice, for conduct that we believe violates these terms or is harmful to other users,
              us, or third parties, or for any other reason.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates,
              without regard to its conflict of law provisions.
            </p>

            <h2>10. Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms shall be resolved through negotiation. If negotiation fails,
              disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
            </p>

            <h2>11. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
              on our website. Your continued use of our services after changes constitutes acceptance of the new terms.
            </p>

            <h2>12. Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
            </p>

            <h2>13. Entire Agreement</h2>
            <p>
              These terms constitute the entire agreement between you and Al Namariq Group of Companies
              regarding the use of our services and supersede all prior agreements.
            </p>

            <h2>14. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p><strong>Email:</strong> legal@namariqgroup.com</p>
              <p><strong>Phone:</strong> +971 50 123 4567</p>
              <p><strong>Address:</strong> Dubai Industrial City, Phase 2, Plot No. 123, Dubai, UAE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
