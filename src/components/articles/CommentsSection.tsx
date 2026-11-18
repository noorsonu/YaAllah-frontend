'use client';

import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle, User } from 'lucide-react';

interface CommentsSectionProps {
  postTitle: string;
  initialCount?: number;
}

export default function CommentsSection({ postTitle, initialCount = 12 }: CommentsSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const mockComments = [
    {
      id: 'c1',
      author: 'Mohammad Tariq',
      date: '3 days ago',
      content: 'SubhanAllah, reciting this wazifa regularly with sincere Tawbah has brought immense tranquility into my daily life. JazakAllah Khair for compiling the exact Arabic and pronunciation.',
    },
    {
      id: 'c2',
      author: 'Fatima Zohra',
      date: '1 week ago',
      content: 'I was looking for the verified Hadith reference for this specific prayer. The clarity of the transliteration and English translation makes it easy for non-Arabic speakers to learn.',
    },
    {
      id: 'c3',
      author: 'Shahid Nadeem',
      date: '2 weeks ago',
      content: 'May Allah bless the team behind YaAllah.in for maintaining authentic Sunnah supplications without commercial distractions.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setComment('');
    }
  };

  return (
    <section className="mt-12 pt-10 border-t-2 border-[#E8D8C0]">
      <div className="flex items-center gap-2 mb-8">
        <MessageSquare className="w-5 h-5 text-[#650D25]" />
        <h3 className="font-heading text-2xl font-bold text-[#650D25]">
          Community Reflections & Comments ({initialCount})
        </h3>
      </div>

      {/* Existing Comments List */}
      <div className="space-y-4 mb-10">
        {mockComments.map((c) => (
          <div key={c.id} className="p-5 rounded-2xl bg-[#FAF4E9]/60 border border-[#E8D8C0] space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white border border-[#D9A441] flex items-center justify-center text-[#650D25]">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm text-[#392A25]">{c.author}</span>
              </div>
              <span className="text-xs text-[#6E5D57]">{c.date}</span>
            </div>
            <p className="text-sm text-[#392A25]/90 leading-relaxed pl-10">
              {c.content}
            </p>
          </div>
        ))}
      </div>

      {/* Comment Submission Form */}
      <div className="bg-white rounded-3xl border border-[#D9A441]/50 p-6 sm:p-8 shadow-sm">
        <h4 className="font-heading text-lg font-bold text-[#650D25] mb-1">
          Leave a Thought or Question
        </h4>
        <p className="text-xs text-[#6E5D57] mb-6">
          Your email address will not be published. Comments are moderated prior to public display.
        </p>

        {submitted ? (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-sm">
              JazakAllah Khair! Your reflection has been submitted and is currently pending moderator approval.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#392A25] uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Abdullah"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8D8C0] bg-[#FAF4E9]/40 text-sm text-[#392A25] focus:outline-none focus:border-[#D9A441] focus:bg-white transition-all"
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
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8D8C0] bg-[#FAF4E9]/40 text-sm text-[#392A25] focus:outline-none focus:border-[#D9A441] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#392A25] uppercase tracking-wider mb-1.5">
                Your Comment *
              </label>
              <textarea
                required
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={`Write your reflection on "${postTitle}"...`}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D8C0] bg-[#FAF4E9]/40 text-sm text-[#392A25] focus:outline-none focus:border-[#D9A441] focus:bg-white transition-all"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#650D25] text-white hover:bg-[#50091D] shadow-md hover:shadow-lg transition-all"
            >
              <Send className="w-4 h-4 text-[#E8C78D]" />
              <span>Submit for Moderation</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
