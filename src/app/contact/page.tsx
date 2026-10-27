'use client';

import { SITE } from '@/data/site-copy';
import { contactSubmitUrl } from '@/lib/contact-api';
import { headline, lede, primaryButton, surface } from '@/lib/studio';
import { useState } from 'react';

const fieldClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-800/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error' | 'misconfigured'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const submitUrl = contactSubmitUrl();
    if (!submitUrl) {
      setSubmitStatus('misconfigured');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            fullName: formData.fullName,
            email: formData.email,
            company: formData.company,
            reasonForContact: formData.service,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
          try {
            await response.json();
          } catch {
            // No JSON body, which is fine for 201 responses
          }
        }

        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          company: '',
          service: '',
          message: '',
        });
      } else {
        console.error(
          'Form submission failed:',
          response.status,
          response.statusText
        );
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="px-6 pb-20 pt-28">
      <div className="mx-auto max-w-2xl">
        <h1 className={`${headline} text-4xl md:text-5xl`}>
          {SITE.contactHeading}
        </h1>
        <p className={`${lede} mt-4`}>{SITE.contactLede}</p>
        <p className={`${lede} mt-3`}>
          Or email us at{' '}
          <a
            href={`mailto:${SITE.email}`}
            className="font-semibold text-teal-800 underline underline-offset-4 dark:text-teal-300"
          >
            {SITE.email}
          </a>
          .
        </p>

        <div className={`${surface} mt-10 p-6 md:p-8`}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200"
              >
                Full name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className={fieldClass}
                placeholder="Your name"
                autoComplete="name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={fieldClass}
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={fieldClass}
                placeholder="Company name"
                autoComplete="organization"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200"
              >
                What do you need? *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className={fieldClass}
              >
                <option value="">Select one</option>
                <option value="website">Website</option>
                <option value="tool">Tool or product</option>
                <option value="advertising">Web advertising</option>
                <option value="social">Social media</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`${fieldClass} resize-y`}
                placeholder="What needs building?"
              />
            </div>

            {submitStatus === 'success' && (
              <p
                role="status"
                aria-live="polite"
                className="rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-950 dark:border-teal-900 dark:bg-teal-950/40 dark:text-teal-100"
              >
                Your message was sent. You can also reach us at{' '}
                <a className="underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                .
              </p>
            )}

            {submitStatus === 'error' && (
              <p
                role="status"
                aria-live="polite"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900 dark:border-red-900 dark:bg-red-950/40 dark:text-red-100"
              >
                The message did not send. Email{' '}
                <a className="underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>{' '}
                instead.
              </p>
            )}

            {submitStatus === 'misconfigured' && (
              <p
                role="status"
                aria-live="polite"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900 dark:border-red-900 dark:bg-red-950/40 dark:text-red-100"
              >
                The contact form is not configured for this build. Email{' '}
                <a className="underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>{' '}
                instead.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`${primaryButton} w-full`}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
