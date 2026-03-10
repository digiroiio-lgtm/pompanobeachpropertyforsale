'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Info, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  message: z.string().optional(),
  type: z.enum(['schedule_showing', 'request_info']),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadFormProps {
  propertyId?: string;
  propertyAddress?: string;
  defaultType?: 'schedule_showing' | 'request_info';
}

export default function LeadForm({ propertyId, propertyAddress, defaultType = 'schedule_showing' }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: { type: defaultType },
  });

  const selectedType = watch('type');

  const onSubmit = async (data: LeadFormData) => {
    setSubmitError('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, propertyId }),
      });

      if (!res.ok) {
        const err = (await res.json()) as { error?: string };
        throw new Error(err.error ?? 'Submission failed');
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-green-800 mb-2">
          {selectedType === 'schedule_showing' ? 'Showing Requested!' : 'Message Sent!'}
        </h3>
        <p className="text-green-700 text-sm">
          {selectedType === 'schedule_showing'
            ? "We'll contact you shortly to confirm your showing appointment."
            : "We've received your inquiry and will respond within 24 hours."}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-1">Contact Agent</h3>
      {propertyAddress && (
        <p className="text-sm text-gray-500 mb-4 truncate">{propertyAddress}</p>
      )}

      {/* Type Toggle */}
      <div className="flex gap-2 mb-5">
        <label className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer text-sm font-medium transition-colors ${selectedType === 'schedule_showing' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'}`}>
          <input type="radio" value="schedule_showing" {...register('type')} className="sr-only" />
          <Calendar className="w-4 h-4" />
          Schedule Showing
        </label>
        <label className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer text-sm font-medium transition-colors ${selectedType === 'request_info' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'}`}>
          <input type="radio" value="request_info" {...register('type')} className="sr-only" />
          <Info className="w-4 h-4" />
          Request Info
        </label>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            {...register('name')}
            placeholder="John Smith"
            className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            {...register('email')}
            type="email"
            placeholder="john@example.com"
            className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="(954) 555-0000"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message (optional)
          </label>
          <textarea
            {...register('message')}
            rows={3}
            placeholder={
              selectedType === 'schedule_showing'
                ? 'Preferred showing times or any questions...'
                : 'What would you like to know about this property?'
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Error */}
        {submitError && (
          <div className="bg-red-50 text-red-700 text-sm rounded-lg p-3 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {submitError}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-lg px-4 py-3 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          {selectedType === 'schedule_showing' ? 'Schedule a Showing' : 'Send Message'}
        </button>

        <p className="text-xs text-gray-400 text-center">
          By submitting, you agree to our privacy policy. No spam, ever.
        </p>
      </form>
    </div>
  );
}
