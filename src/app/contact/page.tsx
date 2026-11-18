'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MessageCircle, Send, CheckCircle, Home, ChevronRight, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF4E9] py-8 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#6E5D57] mb-6">
          <Link href="/" className="hover:text-[#650D25] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8D8C0]" />
          <span className="text-[#650D25] font-semibold">Contact Us</span>
        </nav>

        {/* Page Banner */}
        <div className="bg-white rounded-3xl border border-[#D9A441]/50 p-6 sm:p-10 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#650D25]/10 text-[#650D25] mb-3">
            <Mail className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Support & Inquiries</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#650D25] tracking-tight mb-3">
            Contact & Editorial Inquiries
          </h1>

          <p className="text-base sm:text-lg text-[#392A25]/90 max-w-3xl leading-relaxed">
            Reach out with content suggestions, verified source references, or technical feedback. Our dedicated team reviews every submission with utmost care.
          </p>
        </div>

        {/* Main Grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Channels */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-3xl border border-[#E8D8C0] p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="font-heading text-xl font-bold text-[#650D25]">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF4E9] border border-[#D9A441] flex items-center justify-center text-[#650D25] shrink-0">
                    <Mail className="w-5 h-5 text-[#650D25]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8A7166] uppercase block">
                      Email Address
                    </span>
                    <a href="mailto:support@yaallah.in" className="text-sm font-bold text-[#650D25] hover:underline">
                      support@yaallah.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF4E9] border border-[#D9A441] flex items-center justify-center text-[#650D25] shrink-0">
                    <Clock className="w-5 h-5 text-[#650D25]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8A7166] uppercase block">
                      Response Timeline
                    </span>
                    <span className="text-sm text-[#392A25]">
                      Within 24–48 hours (excluding Friday prayers)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF4E9] border border-[#D9A441] flex items-center justify-center text-[#650D25] shrink-0">
                    <MapPin className="w-5 h-5 text-[#650D25]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8A7166] uppercase block">
                      Global Community
                    </span>
                    <span className="text-sm text-[#392A25]">
                      Serving Muslims in India, Pakistan, UK, USA, and worldwide.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8D8C0] text-xs text-[#6E5D57] leading-relaxed">
                <strong>Please note:</strong> YaAllah does not issue personal religious fatwas or promise supernatural cures. Duas are acts of faith between a servant and the Creator.
              </div>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E8D8C0] p-6 sm:p-10 shadow-sm">
              <h3 className="font-heading text-2xl font-bold text-[#650D25] mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[#6E5D57] mb-6">
                Fill in the details below and our editorial or support desk will respond shortly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#FAF4E9] border-2 border-[#D9A441] text-center space-y-3">
                  <CheckCircle className="w-10 h-10 mx-auto text-[#650D25]" />
                  <h4 className="font-heading text-lg font-bold text-[#650D25]">
                    JazakAllah Khair! Message Received
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6E5D57] max-w-md mx-auto">
                    We have safely received your communication. Our team will review and reply to your provided email address.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block mt-2 px-5 py-2 text-xs font-semibold text-[#650D25] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#392A25] uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Imran Khan"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8D8C0] bg-[#FAF4E9]/40 text-sm text-[#392A25] focus:outline-none focus:border-[#D9A441] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#392A25] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8D8C0] bg-[#FAF4E9]/40 text-sm text-[#392A25] focus:outline-none focus:border-[#D9A441] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#392A25] uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Question regarding Nad e Ali / Content Suggestion"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8D8C0] bg-[#FAF4E9]/40 text-sm text-[#392A25] focus:outline-none focus:border-[#D9A441] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#392A25] uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your inquiry or reflection in detail..."
                      className="w-full px-4 py-3 rounded-xl border border-[#E8D8C0] bg-[#FAF4E9]/40 text-sm text-[#392A25] focus:outline-none focus:border-[#D9A441] focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#650D25] text-white hover:bg-[#50091D] shadow-md hover:shadow-lg transition-all"
                  >
                    <Send className="w-4 h-4 text-[#E8C78D]" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
