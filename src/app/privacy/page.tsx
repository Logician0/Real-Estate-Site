import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Shree Ram Properties',
  description: 'Privacy policy for Shree Ram Properties real estate website.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-secondary pt-24 pb-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
        
        <div className="bg-white p-8 rounded-xl card-shadow space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Shree Ram Properties ("we", "our", or "us") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Information Collection</h2>
            <p className="leading-relaxed mb-4">
              We collect several different types of information for various purposes to provide and improve our service to you.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal Data: Name, email address, phone number, address, etc.</li>
              <li>Usage Data: Browser type, IP address, pages visited, time spent, etc.</li>
              <li>Cookies: We use cookies to enhance your experience on our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Use of Data</h2>
            <p className="leading-relaxed">
              Shree Ram Properties uses the collected data for various purposes including but not limited to providing and maintaining the service, notifying you about changes, allowing you to participate in features, and providing support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Security of Data</h2>
            <p className="leading-relaxed">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-secondary rounded-lg">
              <p>Email: privacy@shreeramproperties.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: 123 Premium Street, Business District, City</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
