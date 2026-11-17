import React from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';
import { useSportly } from '../context/SportlyContext';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast } = useSportly();

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed top-20 right-4 left-4 sm:left-auto sm:w-96 z-[60] flex flex-col gap-2.5 pointer-events-none"
      aria-live="polite"
    >
      {toasts.map((toast) => {
        const isSuccess = toast.variant === 'success';
        const isWarning = toast.variant === 'warning';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl border shadow-lg backdrop-blur-md transition-all duration-200 ${
              isSuccess
                ? 'bg-white/95 border-emerald-200 text-slate-900'
                : isWarning
                ? 'bg-amber-50/95 border-amber-200 text-amber-950'
                : 'bg-white/95 border-slate-200 text-slate-900'
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {isSuccess ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              ) : isWarning ? (
                <AlertCircle className="w-5 h-5 text-amber-600" />
              ) : (
                <Info className="w-5 h-5 text-teal-600" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#064E3B] leading-snug">
                {toast.title}
              </p>
              {toast.description && (
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  {toast.description}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => dismissToast(toast.id)}
              aria-label="Închide notificarea"
              className="p-1.5 -mr-1 -mt-1 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
