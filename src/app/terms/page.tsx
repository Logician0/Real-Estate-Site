import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Shree Ram Properties',
  description: 'Terms and conditions for Shree Ram Properties real estate website.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-secondary pt-24 pb-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-5xl font-bold text-primary mb-8">Terms & Conditions</h1>
        
        <div className="bg-white p-8 rounded-xl card-shadow space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Use License</h2>
            <p className="leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on the Shree Ram Properties website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Disclaimer</h2>
            <p className="leading-relaxed">
              The materials on the Shree Ram Properties website are provided on an 'as is' basis. Shree Ram Properties makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Limitations</h2>
            <p className="leading-relaxed">
              In no event shall Shree Ram Properties or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Shree Ram Properties website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Accuracy of Materials</h2>
            <p className="leading-relaxed">
              The materials appearing on the Shree Ram Properties website could include technical, typographical, or photographic errors. Shree Ram Properties does not warrant that any of the materials on its website are accurate, complete, or current. Shree Ram Properties may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Links</h2>
            <p className="leading-relaxed">
              Shree Ram Properties has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Shree Ram Properties of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-secondary rounded-lg">
              <p>Email: suraj.logician@gmail.com</p>
              <p>Phone: +91 95086 35494</p>
              <p>Address: 123 Premium Street, Business District, City</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
