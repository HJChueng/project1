'use client';

import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ConsultationForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || '오류가 발생했습니다.');
        setState('error');
        return;
      }

      setState('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setErrorMsg('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div
        className="rounded-lg p-8 text-center"
        style={{ background: 'var(--color-background-alt)', border: '1px solid var(--color-twitch-purple)' }}
      >
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-base)' }}>
          상담 신청이 완료됐습니다!
        </h3>
        <p className="text-sm mb-6" style={{ color: 'var(--color-text-alt)' }}>
          빠른 시일 내에 연락드리겠습니다.
        </p>
        <button
          onClick={() => setState('idle')}
          className="btn-primary"
          style={{ background: 'none', border: '2px solid var(--color-twitch-purple)', color: 'var(--color-twitch-purple-light)' }}
        >
          새 상담 신청
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold" style={{ color: 'var(--color-text-alt)' }}>
            이름 <span style={{ color: 'var(--color-live)' }}>*</span>
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="홍길동"
            required
            className="px-3 py-2 text-sm rounded outline-none transition-all"
            style={{
              background: 'var(--color-background-input)',
              color: 'var(--color-text-base)',
              border: '2px solid transparent',
              borderRadius: 'var(--radius-sm)',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--color-twitch-purple)')}
            onBlur={(e) => (e.target.style.borderColor = 'transparent')}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold" style={{ color: 'var(--color-text-alt)' }}>
            이메일 <span style={{ color: 'var(--color-live)' }}>*</span>
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
            className="px-3 py-2 text-sm rounded outline-none transition-all"
            style={{
              background: 'var(--color-background-input)',
              color: 'var(--color-text-base)',
              border: '2px solid transparent',
              borderRadius: 'var(--radius-sm)',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--color-twitch-purple)')}
            onBlur={(e) => (e.target.style.borderColor = 'transparent')}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold" style={{ color: 'var(--color-text-alt)' }}>
          전화번호
        </label>
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="010-0000-0000"
          className="px-3 py-2 text-sm rounded outline-none transition-all"
          style={{
            background: 'var(--color-background-input)',
            color: 'var(--color-text-base)',
            border: '2px solid transparent',
            borderRadius: 'var(--radius-sm)',
          }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--color-twitch-purple)')}
          onBlur={(e) => (e.target.style.borderColor = 'transparent')}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold" style={{ color: 'var(--color-text-alt)' }}>
          상담 내용 <span style={{ color: 'var(--color-live)' }}>*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="문의하실 내용을 자유롭게 작성해주세요."
          required
          rows={5}
          className="px-3 py-2 text-sm rounded outline-none transition-all resize-none"
          style={{
            background: 'var(--color-background-input)',
            color: 'var(--color-text-base)',
            border: '2px solid transparent',
            borderRadius: 'var(--radius-sm)',
          }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--color-twitch-purple)')}
          onBlur={(e) => (e.target.style.borderColor = 'transparent')}
        />
      </div>

      {state === 'error' && (
        <p className="text-sm px-3 py-2 rounded" style={{ color: '#ff6b6b', background: 'rgba(235,4,0,0.1)', borderRadius: 'var(--radius-sm)' }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="btn-primary justify-center"
        style={state === 'submitting' ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
      >
        {state === 'submitting' ? '전송 중...' : '상담 신청하기'}
      </button>

      <p className="text-xs text-center" style={{ color: 'var(--color-text-alt-2)' }}>
        <span style={{ color: 'var(--color-live)' }}>*</span> 표시는 필수 항목입니다
      </p>
    </form>
  );
}
