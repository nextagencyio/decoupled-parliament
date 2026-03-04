import Header from '../components/Header'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact the National Parliament of Aldoria. Reach your MP, submit petitions, book tours, or get information about parliamentary proceedings.',
  keywords: ['Contact Parliament', 'Find Your MP', 'Parliamentary Information', 'Visitor Services'],
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4 font-display">Contact Parliament</h1>
            <p className="text-base md:text-lg text-slate-600">
              Reach your representative, book a tour, or get information about parliamentary proceedings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-semibold text-primary-900 mb-6 font-display">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0"><Mail className="w-6 h-6 text-accent-500" /></div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900">Email</h3>
                    <p className="text-slate-600">info@parliament.ald</p>
                    <p className="text-slate-600">tours@parliament.ald</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0"><Phone className="w-6 h-6 text-accent-500" /></div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900">Phone</h3>
                    <p className="text-slate-600">+355 42 555 000</p>
                    <p className="text-sm text-slate-500">Monday to Friday, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0"><MapPin className="w-6 h-6 text-accent-500" /></div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900">Location</h3>
                    <p className="text-slate-600">Parliament House<br />Constitution Square<br />Aldoria City</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0"><Clock className="w-6 h-6 text-accent-500" /></div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900">Visitor Hours</h3>
                    <p className="text-slate-600">Monday - Saturday: 9:00 AM - 5:00 PM<br />Tour bookings close at 3:30 PM<br />Closed on public holidays and during recess</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-semibold text-primary-900 mb-6 font-display">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows={6} className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500" placeholder="Tell us how we can help you..." required />
                </div>
                <div>
                  <button type="submit" className="w-full bg-accent-500 text-primary-900 py-3 px-4 rounded-md hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-colors duration-200 font-semibold">Send Message</button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-8 md:mt-12 bg-primary-50 rounded-lg border border-slate-200 p-6 md:p-8">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-primary-900 mb-4 font-display">Explore Parliament</h2>
              <p className="text-sm md:text-base text-slate-600 mb-6">Learn more about how Parliament works and find your elected representative.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/members" className="inline-flex items-center justify-center px-6 py-3 border border-accent-500 text-accent-700 rounded-md hover:bg-accent-500 hover:text-primary-900 transition-colors duration-200 font-medium">Find Your MP</a>
                <a href="/legislation" className="inline-flex items-center justify-center px-6 py-3 bg-accent-500 text-primary-900 rounded-md hover:bg-accent-600 transition-colors duration-200 font-medium">Track Legislation</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
