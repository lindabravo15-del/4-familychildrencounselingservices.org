import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';
import pocketbaseClient from '@/lib/pocketbaseClient';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5">
    <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#e8f2e6]">
      <img
        src="/images/be152104-0808-45f5-aaec-f730661714ba.png"
        alt="Family illustration"
        className="h-full w-full object-cover"
      />
    </span>
    <span className="font-display text-lg font-600 leading-tight">
      <span className="text-[#3a5a6b] font-semibold">4-Family &amp; Children </span>
      <span className="text-[#6ba368] font-semibold">Counseling Services</span>
    </span>
  </Link>
);

const IntakePage = () => {
  const { t } = useLanguage();
  const REASONS = t.intake.reasons;
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.reason) {
      setError(t.intake.errorRequired);
      return;
    }
    setError('');
    setStatus('submitting');
    try {
      await pocketbaseClient.collection('intake_submissions').create(form);
      setStatus('success');
    } catch (err) {
      setStatus('idle');
      setError(t.intake.errorGeneric);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e9f3ee] via-[#eaf2f5] to-[#f3f0e6] text-[#3a5a6b]">
      <Helmet>
        <title>New Client Inquiry | Family Counseling &amp; Child Therapy in Rialto, CA | 4-Family &amp; Children Counseling Services</title>
        <meta name="description" content="Start your journey toward healing. Submit a new client inquiry for family counseling, child therapy, teen counseling, or parenting support. Serving Riverside and San Bernardino County. Bilingual services available." />
      </Helmet>
      <header className="sticky top-0 z-50 border-b border-[#eef2f4] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[80rem] items-center justify-between px-5 py-3.5">
          <Logo />
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm font-semibold text-[#4a6273] transition-colors hover:text-[#6ba368]"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.backHome}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[42rem] px-5 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#c9d6cf]" />
            <h1 className="font-display text-3xl font-bold text-[#3a5a6b] md:text-4xl">
              {t.intake.title}
            </h1>
            <span className="h-px w-10 bg-[#c9d6cf]" />
          </div>
          <p className="text-center text-[#5a7183] mb-8">
            {t.intake.subtitle}
          </p>

          <div className="mb-8 flex items-start gap-3 rounded-xl bg-white/70 px-5 py-4 shadow-sm">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#6ba368]" />
            <p className="text-sm leading-relaxed text-[#4a6273]">
              {t.intake.confidentiality}
            </p>
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex flex-col items-center gap-4 rounded-2xl bg-white px-8 py-14 text-center shadow-md"
            >
              <CheckCircle2 className="h-14 w-14 text-[#7bb06e]" />
              <h2 className="font-display text-2xl font-bold text-[#3a5a6b]">{t.intake.successTitle}</h2>
              <p className="text-[#5a7183]">
                {t.intake.successMessage}
              </p>
              <Link
                to="/"
                className="mt-2 rounded-md bg-[#7bb06e] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6ba368]"
              >
                {t.intake.returnHome}
              </Link>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-2xl bg-white px-6 py-8 shadow-md md:px-10 md:py-10"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="full_name" className="text-sm font-semibold text-[#3a5a6b]">
                  {t.intake.fullName}
                </label>
                <input
                  id="full_name"
                  type="text"
                  value={form.full_name}
                  onChange={handleChange('full_name')}
                  placeholder="Jane Smith"
                  className="rounded-md border border-[#dbe6e0] px-4 py-2.5 text-[15px] text-[#3a5a6b] outline-none transition-colors focus:border-[#7bb06e] focus:ring-2 focus:ring-[#7bb06e]/20"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-[#3a5a6b]">
                    {t.intake.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="jane@email.com"
                    className="rounded-md border border-[#dbe6e0] px-4 py-2.5 text-[15px] text-[#3a5a6b] outline-none transition-colors focus:border-[#7bb06e] focus:ring-2 focus:ring-[#7bb06e]/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-[#3a5a6b]">
                    {t.intake.phone} <span className="text-[#9ab0a2] font-normal">{t.intake.optional}</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    placeholder="(555) 123-4567"
                    className="rounded-md border border-[#dbe6e0] px-4 py-2.5 text-[15px] text-[#3a5a6b] outline-none transition-colors focus:border-[#7bb06e] focus:ring-2 focus:ring-[#7bb06e]/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="reason" className="text-sm font-semibold text-[#3a5a6b]">
                  {t.intake.reason}
                </label>
                <select
                  id="reason"
                  value={form.reason}
                  onChange={handleChange('reason')}
                  className="rounded-md border border-[#dbe6e0] bg-white px-4 py-2.5 text-[15px] text-[#3a5a6b] outline-none transition-colors focus:border-[#7bb06e] focus:ring-2 focus:ring-[#7bb06e]/20"
                >
                  <option value="" disabled>
                    {t.intake.selectReason}
                  </option>
                  {REASONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-[#3a5a6b]">
                  {t.intake.tellUsMore} <span className="text-[#9ab0a2] font-normal">{t.intake.optional}</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder={t.intake.tellUsMorePlaceholder}
                  className="rounded-md border border-[#dbe6e0] px-4 py-2.5 text-[15px] text-[#3a5a6b] outline-none transition-colors focus:border-[#7bb06e] focus:ring-2 focus:ring-[#7bb06e]/20 resize-none"
                />
              </div>

              {error && <p className="text-sm font-medium text-[#c0574a]">{error}</p>}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[#7bb06e] px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-[#6ba368] hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:-translate-y-0"
              >
                {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === 'submitting' ? t.intake.sending : t.intake.submit}
              </button>
            </form>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default IntakePage;
